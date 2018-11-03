# 1. Lesson Introduction

## Lesson Introduction: Web Services with Node.js

Welcome! The focus of this lesson is to familiarize you with RESTful frameworks for Node.js. We will walk through 3 specific frameworks - Express, Sails, and Hapi

### Project

RESTful Frameworks
Gives you access to guidelines and tools that help you develop applications more efficiently

This lesson will also help prepare you for the Project: RESTful Web API with Node.js Framework, where you'll build a RESTful API using a Node.js framework that will interface with your private blockchain. Feel free to check out this project to better understand what you'll be working on.

# 2. RESTful APIs with Node.js Frameworks

- Define what a framework is
- When would you use one?
- Introduce frameworks for Node.js

REST(Representational State Transfer)
Set of rules that defines guidelines based on the HTTP protocol

Framework
Set of tools and guidelines designed to support the development of web applications.

Why use a Framework?
- Build Rapidly
- Access code that's been built and tested
- Help extend functionality

Node.js Frameworks

- Express
- Sails
- Hapi

## Reading

Node.js is commonly used in the world of web development, so it's no surprise there are many frameworks, platforms, and libraries that leverage it for building Web APIs. Here's an article discussing 13 important ones:

[13 Node.js Frameworks to Build Web APIs](https://nordicapis.com/13-node-js-frameworks-to-build-web-apis/)

## Framework Homepages

- [Expressjs.com](https://expressjs.com/)
- [Sailsjs.com](https://sailsjs.com/)
- [Hapijs.com](https://hapijs.com/)

# 3. Express.js

## Express.js Overview

- Getting started: In the first video, we’ll take a look at www.expressjs.com, and check out some of the resources and documentation.
- Hello World: In the second video, you’ll get express.js installed locally and get your ‘hello world’ application up and running.
- Code Overview: Finally, we’ll go back into the local environment and walk through each line of code to better understand what’s going on with our new application.

### System Requirement

Expressjs should hopefully be simple to install and get started with. It is compatible with any operating system and only requires some space in your working directory to install its dependencies.

### Prepare for Express "Hello World"
#### Tools we'll use

- Expressjs.com for documentation
- Your Local Desktop
- A Terminal Window
- Code Editor (I’m using VS Code)
- Another Browser window (to view your application)

### Express.js Hello World Code

```js
const express = require('express')
const app = express()

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(3000, () => console.log('Example app listening on port 3000!'))
```

### Express.js Documentation

The express.js code description can be found here. [here](https://expressjs.com/en/guide/writing-middleware.html).

## Express.js Conclusion

This is an extremely powerful framework and there are many resources to help you get started. If you’re interested in learning more, they provide a great list of books and blogs on their site [here](https://expressjs.com/en/resources/books-blogs.html).

Also, each of the modules along with their documentation are listed [here](https://expressjs.com/en/resources/middleware.html).

# 4. Practice Express.js

## Let's do some Code Practice
### Additional Info for Step 3
#### Review the boilerplate code

After you've cloned your repository and installed the node packages using npm install, you will need to install the following packages:

- "body-parser": "^1.18.3",
- "crypto-js": "^3.1.9-1",
- "express": "^4.16.3"

The package body-parser allows you to parse incoming request bodies in a middleware before your handlers, available under the req.body property. For more documentation visit this [link](https://www.npmjs.com/package/body-parser).

The package crypto-js you are being using it a lot during this course so far however if you need extra support feel free to read about it in the following [link](https://www.npmjs.com/package/crypto-js).

The package expressis the most important package because it allows you to use the Express Framework features to create your RESTful API. Check the documentation so you'll be familiarized with the core concepts of this framework in this [link](http://expressjs.com/).

#### The code
#### Express framework configuration

Let's take a look at the file app.js it contains the `BlockAPI` class, in this class we are configuring the main code blocks necessary to use Express.js:

```js
class BlockAPI {

    /**
     * Constructor that allows initialize the class 
     */
    constructor() {
        this.app = express();
        this.initExpress();
        this.initExpressMiddleWare();
        this.initControllers();
        this.start();
    }

    /**
     * Initialization of the Express framework
     */
    initExpress() {
        this.app.set("port", 8000);
    }

    /**
     * Initialization of the middleware modules
     */
    initExpressMiddleWare() {
        this.app.use(bodyParser.urlencoded({extended:true}));
        this.app.use(bodyParser.json());
    }

    /**
     * Initialization of all the controllers
     */
    initControllers() {
        require("./BlockController.js")(this.app);
    }

    /**
     * Starting the REST Api application
     */
    start() {
        let self = this;
        this.app.listen(this.app.get("port"), () => {
            console.log(`Server Listening for port: ${self.app.get("port")}`);
        });
    }

}

new BlockAPI();
```

- The first part is the initialization of Express initExpress() in this method we are setting the port where the server will respond to the requests.
- The method initExpressMiddleWare() help us to initialize all the middlewares for the frameworks
> Express is a routing and middleware web framework that has minimal functionality of its own: An Express application is essentially a series of middleware function calls. In this case we are using body-parser middleware to be able to parse the body data as a JSON or urlencoded.
- The method initControllers() allows to initialize all the controllers classes in this case we only have one controller created but if you have more you will need to initialized those here.

#### BlockController class. Creating Endpoints

The BlockController class contain the code of your endpoints:

```js
const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./Block.js');

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
        this.blocks = [];
        this.initializeMockData();
        this.getBlockByIndex();
        this.postNewBlock();
    }

    /**
     * Implement a GET Endpoint to retrieve a block by index, url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/api/block/:index", (req, res) => {
            // Add your code here
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here
        });
    }

    /**
     * Help method to inizialized Mock dataset, adds 10 test blocks to the blocks array
     */
    initializeMockData() {
        if(this.blocks.length === 0){
            for (let index = 0; index < 10; index++) {
                let blockAux = new BlockClass.Block(`Test Data #${index}`);
                blockAux.height = index;
                blockAux.hash = SHA256(JSON.stringify(blockAux)).toString();
                this.blocks.push(blockAux);
            }
        }
    }

}

/**
 * Exporting the BlockController class
 * @param {*} app 
 */
module.exports = (app) => { return new BlockController(app);}
```

The initializeMockData() create mock data for you to work with.

#### Your Tasks

Implement the following endpoint:

```js
/**
     * Implement a GET Endpoint to retrieve a block by index (position in the array), url: "/api/block/:index"
     */
    getBlockByIndex() {
        this.app.get("/api/block/:index", (req, res) => {
            // Add your code here
        });
    }

    /**
     * Implement a POST Endpoint to add a new Block, url: "/api/block"
     */
    postNewBlock() {
        this.app.post("/api/block", (req, res) => {
            // Add your code here
        });
    }
```

#### Tests your endpoints

Use Curl or Postman to test your endpoints.

Postman Example:

```
POST /api/block HTTP/1.1
Host: localhost:8000
Content-Type: application/json
Cache-Control: no-cache
Postman-Token: 008c6496-aa5b-415b-854e-a568e0589877

{
    "data":"Some data example"
}
```

# 5. Hapi.js

## Hapi.js Overview

In this section, we’ll be creating our own hello world hapi application. To do that we’ve broken the section up into 3 main sections.

- Getting started: In the first video, we’ll take a look at hapijs.com, and check out some of the resources and documentation.
- Hello World: In the second video, you’ll get hapi.js installed locally and get your ‘hello world’ application up and running.
- Code Overview: Finally, we’ll go back into the local environment and walk through the code to better understand what’s going on with our new application.

## System Requirements

[hapijs.com](https://hapijs.com/)

## Hapi.js Hello World

https://hapijs.com/tutorials

## Hapi.js Hello World Recap
### Open Terminal

- cd desktop
- mkdir hapi-app
- cd hapi-app
- npm init
- npm install --save hapi
- touch server.js

### Open server.js

In your server.js file, paste the following code then save your file.

```js
'use strict';

const Hapi=require('hapi');

// Create a server with a host and port
const server=Hapi.server({
    host:'localhost',
    port:8000
});

// Add the route
server.route({
    method:'GET',
    path:'/hello',
    handler:function(request,h) {

        return'hello world';
    }
});

// Start the server
async function start() {

    try {
        await server.start();
    }
    catch (err) {
        console.log(err);
        process.exit(1);
    }

    console.log('Server running at:', server.info.uri);
};

start();
```

### Run server.js

Finally, use `npm start` to run the server.js file to launch your application.

### Open Browser

`localhost:8000/hello`

## Hapi.js Environment
## Hapi.js Recap
## Resources

- [Hapi.js Homepage](https://hapijs.com/)
- [Hapi.js Tutorials](https://hapijs.com/tutorials)
- [Hapi.js Resources](https://hapijs.com/resources)

# 6. Practice Hapi.js

## Let's do some Code Practice

- Step 1	Clone the project repository in this [Github repository](https://github.com/udacity/nd1309-rest-api-hapi/tree/master)
- Step 2	Open the terminal and install the packages: `npm install`
- Step 3	Open the file app.js and blockcontroller.js and start coding - See additional info below
- Step 4	Run your application `node app.js`
- Step 5	Use Curl or Postman to test the endpoints

### Additional Info for Step 3
#### Review the boilerplate code

After you've cloned your repository and installed the node packages using npm install, you'll need to install the following packages:

- "crypto-js": "^3.1.9-1",
- "hapi": "^17.6.0"

The package `crypto-js` you are being using it a lot during this course so far; however, if you need extra support feel free to read about it in the following [link](https://www.npmjs.com/package/crypto-js).

The package `hapi` is the most important package because it allows you to use the Hapi Framework features to create your RESTful API. Check the documentation so you'll be familiarized with the core concepts of this framework in this [link](https://hapijs.com/tutorials/)

### The code

In your boilerplate code you'll be provide with a Block.js file, in this file you have an implementation of the Block class:

```js
class Block {
    constructor(data){
        this.hash = "";
        this.height = 0;
        this.body = data;
        this.time = new Date().getTime().toString().slice(0,-3);
    }
}
```

#### Hapi farmework configuration
#### BlockchainCOntroller class. Creating Endpoints

### Your Tasks
### Test your endpoints

Use Curl or Postman to test your endpoints.

Postman Example:

```shell
curl -X POST \
  http://localhost:3000/api/block \
  -H 'Cache-Control: no-cache' \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: 1e551722-4382-49cc-84f1-19d3d433c1e7' \
  -d '{
    "data":"Some data example"
}'
```

# 7. Sails.js

## Sails.js Overview

In this section, we’ll be creating our own hello world sails application. To do that we’ve broken the section up into 3 main sections.

- Getting started: In the first video, we’ll take a look at sailsjs.com, and check out some of the resources and documentation.
- Hello World: In the second video, you’ll get sailsjs installed locally and get your ‘hello world’ application up and running.
- Code Overview: Finally, we’ll go back into the local environment and walk through the code to better understand what’s going on with our new application.

## System Requirements

Sails.js should be simple to install and get started with. It is compatible with any operating system and only requires some space in your working directory to install its dependencies.

## Prepare for Sail.js "Hello World"
### Tools we'll use

- Sailsjs.com for documentation
- Your Local Desktop
- A Terminal Window
- Code Editor (I’m using VS Code)
- Another Browser window (to view your application)

## Hello World Resources

https://sailsjs.com/get-started

## Sails.js Environment Resources

https://github.com/balderdashy/seed

## Sails.js Conclusion

- [Demo App Example](https://ration.io/)
- [App Features](https://sailsjs.com/features)