/* ===== SHA256 with Crypto-js ===============================
|  Learn more: Crypto-js: https://github.com/brix/crypto-js  |
|  =========================================================*/

const SHA256 = require('crypto-js/sha256');
const Block = require('./Block.js');

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
    await this.addLevelDBData(newBlock.height, JSON.stringify(newBlock));
    return newBlock;
    // console.log("addBlockHeight: "+newBlock.height ); //would be removed
  }

  // Get block height
  getBlockHeight(){
    return new Promise((resolve, reject) => {
      let i =-1;
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
      db.get(blockHeight, function(error, value) {
          if (error) { reject(error); } 
            else { resolve(JSON.parse(value)); }
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
  async addLevelDBData(key,value){
    return new Promise((resolve, reject) => {
      db.put(key, value, function(error) {
        if (error) {
          reject('Block ' + key + ' submission failed', error);
        } else {
          resolve('Block ' + key + ' submission succeeded');
        }
      })
    })
  }

  // Get data from levelDB with key
  async getLevelDBData(key){
    return new Promise((resolve, reject) => {
      db.get(key, function(error, value) {
        if (error) {
          reject('Not found!', error);
        } else {
          resolve('Value = ' + value);
        }
      })
    })
  }



}//class Blockchain

module.exports = Blockchain;