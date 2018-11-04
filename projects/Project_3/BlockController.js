const SHA256 = require('crypto-js/sha256');
const Block = require('./Block.js');
const Blockchain = require('./Blockchain.js');

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
        // this.blocks = []; // will be removed
        // this.initializeMockData(); // will be removed
        this.blockchain = new Blockchain();
        this.getBlockByIndex();
        this.postNewBlock();
        this.getBlockLength(); // will be removed
    }
    
    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/api/block/:index", (req, res) => {
            // Add your code here
            var index = req.params.index;
            this.blockchain.getBlock(index)
                .then(block => res.send(block))
                .catch((error) => res.send("Error: " + error))
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here            
            var body = req.body.body;
            if (body == undefined || body == "") {
                res.send("Block Body shouldn't be empty.");
            } else {
                let block = new Block(body);
                this.blockchain.addBlock(block).then(async () => {
                    let height = await this.blockchain.getBlockHeight();
                    this.blockchain.getBlock(height).then(block => res.send(block)); // It works well
                });
            }
        });
    }//postNewBlock
/*
     postNewBlock3() {
        this.app.post("/api/block", async (req, res) => {
            // Add your code here            
            var body = req.body.body;
            let block = new Block(body);
            this.blockchain.addBlock(block); // add new block!
            let height = await this.blockchain.getBlockHeight();
            this.blockchain.getBlock(height).then(block => console.log(block)); // It shows height-1 block. even after adding new block.
        });
    }//postNewBlock3
*/

/*
    async postNewBlock2() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here            
            var body = req.body.body;
            let block = new Block(body);
            this.blockchain.addBlock(block); // add new block!
            let height = await this.blockchain.getBlockHeight();// I don't know why it doesn't work even using async&await. 
                                                                // When i use `async (req, res)` rather than `async postNewBlock2`, it works well but not wanted result.
                                                                // I don't understand the effect between `async (req, res)` and `async postNewBlock2`
            this.blockchain.getBlockHeight().then((height) => { })
        });
    }//postNewBlock2
/*
    postNewBlock1() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here            
            var body = req.body.body;
            let block = new Block(body);
            this.blockchain.addBlock(block); // add new block!
            this.blockchain.getBlockHeight().then((height) => { 
                this.blockchain.getBlock(height).then( (block) => {
                    res.send(block)}); // It sends 'height -1' block. why????
            })
        });
    }//postNewBlock1
*/    

    // for check blockchain status. not mandatory
    getBlockLength() {
        this.app.get("/api/getBlockLength/", (req, res) => {
           this.blockchain.getBlockHeight().then((height) => {
               console.log("height: " + height);
               res.send("height: " + height);
           })
            
        });
    }//getBlockLength

}//BlockController



/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}