const level = require('level');
const ValidatedAddressDB = './vallidatedaddressdata';
const db = level(ValidatedAddressDB);

class ValidatedAddress{
  constructor(){
  }

  // Add
  async addValidatedAddress(_address){
    await this.addLevelDBData(_address, true);
  }

// getValidatedAddress
  getValidatedAddress(address){
    return new Promise((resolve, reject) => {
      db.get(address, function(error, value) {
        if (error) { resolve(false); }   // Is it ok?
        else { 
            resolve(true); }
      });
    })    
    }

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

}//class ValidatedAddress

module.exports = ValidatedAddress;