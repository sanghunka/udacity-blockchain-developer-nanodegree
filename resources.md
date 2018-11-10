# l14 작동안함 아래 명령어

Generate the hash, and save to a file 'address'
cat pub | keccak-256sum -x -l | tr -d ' -' | tail -c 41 > address




# Project 3
In addition, it would be better to provide the correct status codes. This is possible with res.status(400).send(err.message).

Here you can find more information about error handling with Express.js: http://expressjs.com/en/guide/error-handling.html
More information about status codes can be found here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes

Udacity has a free course about Promise. Maybe it will help you to understand it: https://www.udacity.com/course/javascript-promises--ud898
This is also a good page to understand all the async mechanisms: https://javascript.info/async
And this one: https://medium.com/platformer-blog/node-js-concurrency-with-async-await-and-promises-b4c4ae8f4510
