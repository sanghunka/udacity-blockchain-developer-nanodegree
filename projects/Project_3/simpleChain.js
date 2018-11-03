/* ===== SHA256 with Crypto-js ===============================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js  |
|  =========================================================*/

const SHA256 = require('crypto-js/sha256');
const Block = require('./block.js');

//Requirement 1	Configure LevelDB to persist dataset
const level = require('level');
const chainDB = './chaindata';
const db = level(chainDB);

/* ===== Blockchain Class ==========================
|  Class with a constructor for new blockchain 		|
|  ================================================*/

class Blockchain{
  constructor(){
    this.getBlockHeight().then((height) => {
      if (height < 0) {
        const genesisBlock = new Block("First block in the chain - Genesis block");
        this.addBlock(genesisBlock);
      }  
    })
  }

  // Add new block
  async addBlock(newBlock){
    // Block height
    newBlock.height = await this.getBlockHeight() + 1;
    // UTC timestamp
    newBlock.time = new Date().getTime().toString().slice(0,-3);
    // previous block hash
    if(newBlock.height>0){
      const prevBlock = await this.getBlock(newBlock.height-1);
      newBlock.previousBlockHash = prevBlock.hash;
    }
    // Block hash with SHA256 using newBlock and converting to a string
    newBlock.hash = SHA256(JSON.stringify(newBlock)).toString();
    // Adding block object to chain
    this.addLevelDBData(newBlock.height, JSON.stringify(newBlock));
  }

  // Get block height
  getBlockHeight(){
    let i =-1; 
    return new Promise((resolve, reject) => {
      db.createReadStream()
          .on('data', function(data) {
            i++;
          }).on('error', function(err) {
            reject(err);
          }).on('close', function() {
            resolve(i);
          });            
    });
  }//getBlockHeight

  // get block
  getBlock(blockHeight){
    return new Promise((resolve, reject) => {
      db.get(blockHeight, function(err, value) {
          if (err) return console.log('Not found!', err);
          resolve(JSON.parse(value));
      });
    })    
  }


  // validate block
  async validateBlock(blockHeight){
    // get block object
    let block = await this.getBlock(blockHeight);
    // get block hash
    let blockHash = block.hash;
    // remove block hash to test block integrity
    block.hash = '';
    // generate block hash
    let validBlockHash = SHA256(JSON.stringify(block)).toString();
    // Compare
    if (blockHash===validBlockHash) {
        return true;
      } else {
        console.log('Block #'+blockHeight+' invalid hash:\n'+blockHash+'<>'+validBlockHash);
        return false;
      }
  }  


  // Validate blockchain
  async validateChain(){
    let errorLog = [];
    const chainLength = await this.getBlockHeight()+1;
  

    if (chainLength == 1){
      if (!this.validateBlock(i))errorLog.push(i);      
    } else{
      for (var i = 0; i < chainLength - 1; i++) {
        // validate block
        if (!this.validateBlock(i))errorLog.push(i);
        // compare blocks hash link
        let block = await this.getBlock(i);
        let blockHash = block.hash;
  
        let nextBlock = await this.getBlock(i+1);
        let previousBlockHash = nextBlock.previousBlockHash;
  
        if (blockHash!==previousBlockHash) {
          errorLog.push(i);
        }
      }
    }
    if (errorLog.length>0) {
      console.log('Block errors = ' + errorLog.length);
      console.log('Blocks: '+errorLog);
    } else {
      console.log('No errors detected');
    }

  }

  //sanghun kang
  // Add data to levelDB with key/value pair
  addLevelDBData(key,value){
    db.put(key, value, function(err) {
      if (err) return console.log('Block ' + key + ' submission failed', err);
    })
  }

  // Get data from levelDB with key
  getLevelDBData(key){
    db.get(key, function(err, value) {
      if (err) return console.log('Not found!', err);
      console.log('Value = ' + value);
    })
  }


}//class Blockchain


//test code
let bc = new Blockchain();

(function theLoop (i) {
  setTimeout(function () {
      console.log(i);
      let blockTest = new Block("Test Block - " + (i+1));
      bc.addBlock(blockTest).then(() => {
          bc.getBlock(i).then(block => console.log(block))
          i++;
          if (i < 10) theLoop(i);
      });
  }, 10);
})(0);



// let bc = new Blockchain();
// console.log(bc.getLevelDBData(0));

// bc.getBlock(0);
// bc.getBlock(0).then(block => console.log(block));

// bc.addBlock(new Block("1st"));
//console.log(bc.getLevelDBData(1));
// bc.getBlock(1).then(block => console.log(block));

// bc.getBlockHeight().then(count => console.log("height:" + count));


// bc.validateBlock(0).then(result => console.log(result));