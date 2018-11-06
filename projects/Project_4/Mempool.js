const level = require('level');
const mempoolDB = './mempooldata';
const db = level(mempoolDB);
const WINDOW_DURATION = 300; // 300 sec

class Mempool{
  constructor(){
  }

  getTimeStampNow(){
    return new Date().getTime().toString().slice(0,-3);
  }

  getValidationWindow(_requestTimestamp){
    return (WINDOW_DURATION + (_requestTimestamp - this.getTimeStampNow()));
  }

  // Add new block
  async addTx(_address){
    // UTC timestamp
    const _requestTimeStamp = this.getTimeStampNow();
    // Adding tx to mempool
    await this.addLevelDBData(_address, _requestTimeStamp);
    return _requestTimeStamp; 
  }

// getTxByAddress
  getTxByAddress(address){
    return new Promise((resolve, reject) => {
      db.get(address, function(error, value) {
        if (error) { resolve(null); }   // Is it ok?
        else { resolve(JSON.parse(value)); }
      });
    })    
    }

  removeTxByAddress(address) {
    return new Promise((resolve, reject) => {
        db.del(address, function(err) {
          if (err) {
            resolve(false);
          } else {
            resolve(true);
          }
      });
    });
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



}//class Mempool

module.exports = Mempool;