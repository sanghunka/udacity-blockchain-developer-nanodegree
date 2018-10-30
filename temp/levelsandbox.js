/* ===== Persist data with LevelDB ==================
|  Learn more: level: https://github.com/Level/level |
/===================================================*/
// Importing the module 'level'
const level = require('level');
// Declaring the folder path that store the data
const chainDB = './chaindata';

// Declaring a class
class LevelSandbox {
	// Declaring the class constructor
    constructor() {
    	this.db = level(chainDB);
    }
  
  	// Get data from levelDB with key (Promise)
  	getLevelDBData(key){
        let self = this; // because we are returning a promise we will need this to be able to reference 'this' inside the Promise constructor
        return new Promise(function(resolve, reject) {
            self.db.get(key, (err, value) => {
                if(err){
                    if (err.type == 'NotFoundError') {
                        resolve(undefined);
                    }else {
                        console.log('Block ' + key + ' get failed', err);
                        reject(err);
                    }
                }else {
                    resolve(value);
                }
            });
        });
    }
  
  	// Add data to levelDB with key and value (Promise)
    addLevelDBData(key, value) {
        let self = this;
        return new Promise(function(resolve, reject) {
            self.db.put(key, value, function(err) {
                if (err) {
                    console.log('Block ' + key + ' submission failed', err);
                    reject(err);
                }
                resolve(value);
            });
        });
    }
  
  	// Implement this method
    getBlocksCount() {
        let self = this;
        // Add your code here
      	let i =0;
	///start      
      return new Promise((resolve, reject) => {
        self.db.createReadStream()
          	.on('data', function(data) {
				//console.log("s " + i);              	
          		i++;
				//console.log("e " + i);          
            }).on('error', function(err) {
//                return console.log('Unable to read data stream!', err)
          		reject(err);
            }).on('close', function() {
                console.log('Block #' + i);
//              addLevelDBData(i, value);
          		resolve(i);
            });        
        
        
        /*
        (resolve(1))
          .catch(err => {
          	reject(err);
        	});
        */
        
      });
      

      
	///end
	}//getBlockCount
  
}//class LevelSandbox

// Export the class
module.exports.LevelSandbox = LevelSandbox;