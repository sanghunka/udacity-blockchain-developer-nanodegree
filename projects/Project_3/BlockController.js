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
        this.blockchain = new Blockchain();
        this.getBlockByIndex();
        this.postNewBlock();
        this.getBlockLength(); // will be removed
    }
    
    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/block/:index", (req, res) => {
            // Add your code here
            var index = req.params.index;
            this.blockchain.getBlock(index)
                .then(block => res.send(block))
                .catch((error) => res.status(400).send(error.message))
        });
    }


    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/block", async (req, res) => {
            // Add your code here            
            let body = req.body.body;
            if (body == undefined || body == "") {
                res.send("Block Body shouldn't be empty.");
            } else {
                const block = new Block(body);
                this.blockchain.addBlock(block).then(async () => {
                    let height = await this.blockchain.getBlockHeight();
                    this.blockchain.getBlock(height).then(block => res.send(block));
                });
            }
        });
    }//postNewBlock

    // for check blockchain status. not mandatory
    getBlockLength() {
        this.app.get("/getBlockLength/", (req, res) => {
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