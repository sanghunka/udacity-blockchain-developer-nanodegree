const Block = require('./Block.js');
const Blockchain = require('./Blockchain.js');
const Mempool = require('./Mempool.js');
const ValidatedAddress = require('./ValidatedAddress.js');
const bitcoinMessage = require('bitcoinjs-message');

/**
 * Controller Definition to encapsulate routes to work with blocks
 */
class BlockController {

    /**
     * Constructor to create a new BlockController, you need to initialize here all your endpoints
     * @param {*} app 
     */
    constructor(app) {
        this.app = app;
        this.blockchain = new Blockchain();
        this.mempool = new Mempool();
        this.validatedAddress = new ValidatedAddress();
        this.getBlockByIndex();
        this.getBlockByAddress();
        this.getBlockByHash();
        this.postNewBlock();
        this.getBlockLength(); // will be removed
        this.requestValidation();
        this.messageSignatureValidation();
        this.getTx();
    }
    
    /**
     * Implement a GET Endpoint to retrieve a block by height, url: "/api/block/:HEIGHT"
     */
    // Step 3 Requirement 3: Search by Star Block Height
    getBlockByIndex() {
        this.app.get("/block/:HEIGHT", (req, res) => {
            // Add your code here
            var height = req.params.HEIGHT;
            this.blockchain.getBlock(height)
                .then(block => res.send(block))
                .catch((error) => res.status(400).send(error.message))
        });
    }

    // Step 2 Requirement 1
    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block", async (req, res) => {
            // Add your code here            
            let body = req.body;
            
            if (body == undefined || body == "") {
                res.send("Block Body shouldn't be empty."); 
            } else if (body.address == undefined || body.address == "" ) {
                res.send("address shouldn't be empty.");
            } else if (!(await this.validatedAddress.getValidatedAddress(body.address))) {
                res.send("not verified address.");
            } else if (body.star == undefined || body.star == "" ) {
                res.send("star object shouldn't be empty.");
            } else if (Buffer.byteLength(body.star.story, 'utf8') > 500) {
                res.send("star story shouldn't be over than 500 bytes.");
            } else {    
                body.star.story = Buffer.from(body.star.story, 'ascii').toString('hex');
                const block = new Block(body);
                const newBlock = await this.blockchain.addBlock(block);
                res.send(newBlock);
            }
        });
    }//postNewBlock

    // Step 1 Requirement 3
    requestValidation() {
        this.app.post("/requestValidation", async (req, res) => {
            // Add your code here            
            let body = req.body;
            let _address = body.address;
            
            if (body == undefined || body == "") {
                res.send("Body shouldn't be empty."); 
            } else if (_address == undefined || _address == "" ) {
                res.send("address shouldn't be empty.");
            } else {    
                let _requestTimestamp = await this.mempool.getTxByAddress(_address);
                let _validationWindow = "";

                if(_requestTimestamp) {
                    // if there is tx with given address in mempool
                    // check window
                    _validationWindow = this.mempool.getValidationWindow(_requestTimestamp)
                    if (_validationWindow < 0) {
                        //del and add
                        await this.mempool.removeTxByAddress(_address);
                        _requestTimestamp = await this.mempool.addTx(body.address);   
                    }
                } else {
                    // if there is no tx with given address in mempool
                    _requestTimestamp = await this.mempool.addTx(body.address);
                }

                let _message = body.address + ":" + _requestTimestamp + ":starRegistry";
                _validationWindow = this.mempool.getValidationWindow(_requestTimestamp)

                let returnJson = {
                    address: body.address,
                    requestTimestamp: _requestTimestamp,
                    message: _message,
                    validationWindow: _validationWindow
                }

                res.send(returnJson);  
            }
        });      
    }//requestValidation    

    // Step 1 Requirement 4
    messageSignatureValidation() {
        this.app.post("/message-signature/validate", async (req, res) => {
            // Add your code here  
            let body = req.body;
            let _address = body.address;
            let _signature = body.signature;
            let returnJson = {};
            
            if (body == undefined || body == "") {
                res.send("Body shouldn't be empty."); 
            } else if (_address == undefined || _address == "" ) {
                res.send("address shouldn't be empty.");
            } else if (_signature == undefined || _signature == "" ) {
                res.send("signature shouldn't be empty.");
            } else {    
                let _requestTimestamp = await this.mempool.getTxByAddress(_address);
                if(_requestTimestamp) {
                    // if there is tx with given address in mempool
                    // check window
                    let _validationWindow = this.mempool.getValidationWindow(_requestTimestamp)
                    if (_validationWindow < 0) {
                        //return false
                        returnJson.registerStar = false;
                    } else {
                        returnJson.registerStar = true;
                        returnJson.status = {};
                        returnJson.status.address = _address;
                        returnJson.status.requestTimeStamp = _requestTimestamp;
                        returnJson.status.message = _address + ":" + _requestTimestamp + ":starRegistry";
                        returnJson.status.validationWindow = _validationWindow;
                        
                        if (bitcoinMessage.verify(returnJson.status.message, _address, _signature)) {
                            returnJson.status.messageSignature = 'valid';
                            this.validatedAddress.addValidatedAddress(_address);
                        } else {
                            returnJson.status.messageSignature = 'invalid';
                        } 
                    }
                } else {
                    // if there is no tx with given address in mempool
                    // return false
                    returnJson.registerStar = false;
                }
            }//end of ifelse
            res.send(returnJson);
        });      
    }//messageSignatureValidation    

    // for check blockchain status. not mandatory
    getBlockLength() {
        this.app.get("/getBlockLength/", (req, res) => {
           this.blockchain.getBlockHeight().then((height) => {
               console.log("height: " + height);
               res.send("height: " + height);
           })
            
        });
    }//getBlockLength

    //for testing
    getTx() {
        this.app.get("/mempool/:address", (req, res) => {
            // Add your code here
            var address = req.params.address;
            // res.send(address); // works well
            this.mempool.getTxByAddress(address)
                .then(value => res.send("timestamp: " + value))
                .catch((error) => res.status(400).send(error.message))
        });
    }

    // Step 3 Requirement 1: Search by Blockchain Wallet Address
    getBlockByAddress() {
        this.app.get("/stars/address::ADDRESS", async (req, res) => {
            // Add your code here
            var _address = req.params.ADDRESS;
            let height = await this.blockchain.getBlockHeight();
            let blockArray = [];
            for (let i = 0; i <= height; i++) {
                let block = await this.blockchain.getBlock(i);
                if (block.body.address == _address) {
                    blockArray.push(block);
                }
            }
            res.send(blockArray);
        });
    }

    // Step 3 Requirement 2: Search by Star Block Hash
    getBlockByHash() {
        this.app.get("/stars/hash::HASH", async (req, res) => {
            // Add your code here
            var _hash = req.params.HASH;
            let height = await this.blockchain.getBlockHeight();
            let blockArray = [];
            for (let i = 0; i <= height; i++) {
                let block = await this.blockchain.getBlock(i);
                if (block.hash == _hash) {
                    blockArray.push(block);
                }
            }
            res.send(blockArray);
        });
    }    
}//BlockController



/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}