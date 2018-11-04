/* ===== Block Class ==============================
|  Class with a constructor for block 			   |
|  ===============================================*/

class Block{
	constructor(data){
     this.hash = "",
     this.height = 0,
     this.body = data,
     this.time = 0,
     this.previousBlockHash = ""
    }
}

module.exports = Block; // original. 바로 Block을 할당한것.
//module.exports.Block = Block; // from example. exports도 object이다. exports의 Block에다가 Block을 할당한것.