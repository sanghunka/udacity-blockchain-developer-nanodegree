# Project 3: RESTful Web API with Node.js Framework

Building a RESTful API using a Node.js framework that will interfaces with the private blockchain.

## Getting Started

First, I specify the following information.

- **Node.js framework**: Express.js
- **API Service Port Configuration**: 8000

In this project, I created a RESTful web API for my private blockchain. I implemented two endpoints based on project 2:

1. GET block
2. POST block

### Development Environment

- macOS Mojave 10.14
- Visual Studio Code 1.28.2
- node 11.0.0
- (tested with) postman 6.4.4

### Prerequisites

This project requires [NodeJS](https://nodejs.org/)

#### node Package dependencies

  - "crypto-js": "^3.1.9-1",
  - "express": "^4.16.4",
  - "level": "^4.0.0"

### Installing

In the project's root directory,

```
npm install --save
```

## Running

In the project's root directory,

```
node app.js
```

If it doesn't work, check the message on terminal.

### Using

#### GET

Get block object specified by the index. If there is no error, the response for the endpoint will provide block object in JSON format.
In this version, Index value is not restricted to number only.

```
http://localhost:8000/block/[:index]
```

##### Example

- On browser
```
http://localhost:8000/block/0
```

- CURL
```
curl http://localhost:8000/block/0
```

- Postman
```
curl -X GET \
  http://localhost:8000/block/0 \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: [your-token]' \
  -H 'cache-control: no-cache'
```

##### Returns

```
{"hash":"611137c7adbbb5caa8b97d1a559302430cc29f2bfde1461979460e39b94d97fa","height":0,"body":"First block in the chain - Genesis block","time":"1541234485","previousBlockHash":""}
```

##### Error

If you try the index out of blockchain, It returns error and shows message.

```
~ curl localhost:8000/block/100
> Error: NotFoundError: Key not found in database [100]

~ curl localhost:8000/block/abc
> Error: NotFoundError: Key not found in database [abc]
```

#### POST

Post body data. Then endpoint generates new block with the body and push into the blockchain.
If there is no error, the response for the endpoint will provide newly added block object in JSON format.

Body data is required. If there is no body or just ""(empty string), Block will not be created.

```
http://localhost:8000/block
```

##### Example

- CURL
```
curl -X "POST" "http://localhost:8000/block" -H "Content-Type: application/json" -d $"{\"body\": \"block body contents\"}"
```

- POSTMAN

curl -X POST \
  http://localhost:8000/block \
  -H 'Content-Type: application/x-www-form-urlencoded' \
  -H 'Postman-Token: [your-token]' \
  -H 'cache-control: no-cache' \
  -d body=[body-data]


##### Returns

```
{
    "hash": "de95678caffc8abdeb5286b7780075a751c80a235cecb9cad6adc5ceda87ee5a",
    "height": 38,
    "body": "body-data",
    "time": "1541313403",
    "previousBlockHash": "6f90eb4000cf155f5bf6411affd53a877968ee1e80834b874c020bde8fbcf9a3"
}
```

##### Error

If you try posting without body, the endpoint responses error message.

```
~ curl -X POST http://localhost:8000/block
> Block Body shouldn't be empty.

```

## Built With

- [NodeJS](https://nodejs.org/)
- [CryptoJS](https://www.npmjs.com/package/crypto-js)
- [ExpressJS](https://expressjs.com/)
- [LevelDB](http://leveldb.org/)

## Contributing

Feel free to contributing by issuing&PR

## Authors

* **Sanghun Kang** - *Initial work*