q1. BlockController.js :44

Is it right? In rubrics, "When posting to localhost:8000/block without any content on the payload, the service should not create a block. "
I can't understand 'without any content'.
Does it mean 'no body'? or empty body(empty string)?

Because i'm not sure, I implemented for both situations.

q2. In rubrics, "Be sure to validate if there is content in the block before creating and adding it to the chain."
I don't know why I have to validate block. I know it is important, but in this project, all I do is just pushing block right after creating.
If I have to do, where I should do?

q3. I want to response newly generated block at postNewBlock();
But Strangely, it doesn't work well.

BlockController.js 49:50

let height = await this.blockchain.getBlockHeight();
this.blockchain.getBlock(height).then(block => res.send(block)); // It works well

When I starting `node app.js` for the first time, then first postNewBlock() correctly assigns the height value.
But trying after that, height value returns 'height-1' value.

Please check the video.
https://www.dropbox.com/s/fkvsonvt5f25iyk/q3.mov?dl=0

Could you help me? I really tried to solve this problem. But I feel it is out of my ability.

q4. BlockController.js 90:

res.send(block)}); // It sends 'height -1' block. why????
Could I get more resources to solve this problem? (async, await, promise)

It always sends 'height -1' block.

q5. BlockController.js 75:

same problem like q4. 

q6. BlockController.js 63:

same problem like q4. 



second submit

# README.md

- modified endpoint url
- modified curl example to use json data

# Blockchain.js
- modified addLevelDBData, getLevelDBData
    - Are `db.put` and `db.get` asynchronous? If so, How can i check this in code level?
    - At first, It doesn't work properly. After I attached `async` on line 123, line 136, line 41, It works well.
        - I can't fully understand this. Before asking this part, I should study promise materials you attached in previous review.
- modified addBlock()
    - I attached `async` on line 41

# BlockController.js

- modified endpoint url
- modified getBlockByIndex
    - line 31. implemented to respond with status code
- In line 39 and line 56, Both postNewBlock() works well. Which one do you prefer?