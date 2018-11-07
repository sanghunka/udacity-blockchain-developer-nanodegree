# Project 4: Build a Private Blockchain Notary Service

In this project, I built a Star Registry service that allows users to claim ownership of their favorite star in the night sky.

## Getting Started

First, I specify the following information.

- **Node.js framework**: Express.js
- **API Service Port Configuration**: 8000

In this project, I set three databases.

- Blockchain Database.
- Mempool Databases.
- Verified Databases.

I implement several endpoints for my private blockchain based on project 3:

1. Validate block
  - requestValidation()
  - messageSignatureValidation()
2. POST block
  - postNewBlock()
3. GET block
  - getBlockByIndex()
  - getBlockByAddress()
  - getBlockByHash()

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
  - "bitcoinjs-message": "^2.0.0",

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

## Using

1. Validate block
  - requestValidation()
  - messageSignatureValidation()
2. POST block
  - postNewBlock()
3. GET block
  - getBlockByIndex()
  - getBlockByAddress()
  - getBlockByHash()

### Validate

Only validated address can post block. There are two steps to verify user's own address.

#### requestValidation()

First of all, you should request validation.

```
http://localhost:8000/requestValidation
```

##### Example

- CURL
```
curl -X POST \
  http://localhost:8000/requestValidation \
  -H 'Content-Type: application/json' \
  -d '{
  "address": [your-address]
}'
```

- POSTMAN

```
curl -X POST \
  http://localhost:8000/requestValidation \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: [your-token]' \
  -H 'cache-control: no-cache' \
  -d '{
  "address": [your-address]
}'
```

##### Returns

```
{
    "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
    "requestTimestamp": "1541516117",
    "message": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN:1541519744:starRegistry",
    "validationWindow": 300
}
```

##### Error

Address is required. If you try posting without address, the endpoint responses error message.
Likewise, Empty string address is not allowed.


```
~ curl -X POST \
  http://localhost:8000/requestValidation \
  -H 'Content-Type: application/json' \
  -d '{
  "address": [your-address]
}'
> address shouldn't be empty.

```

#### messageSignatureValidation()

After requesting validation, Users will get messages in their response.
After receiving the response, users will prove their blockchain identity by signing a message with their wallet.
Once they sign this message, the application will validate their request and grant access to register a star.
Upon validation, the address will be stored in VerifiedAddress database. The user is granted access to register a single star.

Because ot the window duration, Users must prove their identity within 5 minutes after reqeusting validation.


> window duration is set at `Mempool.js` line 4.

**If you are not familier with signature on cli, then https://reinproject.org/static/bitcoin-signature-tool/index.html#sign is great alternative.

```
http://localhost:8000/message-signature/validate
```

- Message Configuration
  - `[walletAddress]:[timeStamp]:starRegistry`
- JSON Response
  - Success/fail

##### Example

- CURL
```
curl -X "POST" "http://localhost:8000/message-signature/validate" \
     -H 'Content-Type: application/json; charset=utf-8' \
     -d $'{
  "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
  "signature": "HCai9tZrzRCl/bp5PaF0wsY1gZ5wMZCvKeHk2ngGZgQn2J0WDFZyH/0K24Ju3J5VI79MGgox0tOoJQh43JpXk4M="
}'
```

- POSTMAN

```
curl -X POST \
  http://localhost:8000/message-signature/validate \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: [your-token]' \
  -H 'cache-control: no-cache' \
  -d '{
  "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
  "signature": "HCai9tZrzRCl/bp5PaF0wsY1gZ5wMZCvKeHk2ngGZgQn2J0WDFZyH/0K24Ju3J5VI79MGgox0tOoJQh43JpXk4M="
}'
```

##### Returns

```
{
    "registerStar": true,
    "status": {
        "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
        "requestTimeStamp": 1541516117,
        "message": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN:1541516117:starRegistry",
        "validationWindow": 252,
        "messageSignature": "valid"
    }
}
```

##### Error

Both address and signature are required.

### POST

This endpoint generates new block with the body and push into the blockchain.
If there is no error, the endpoint will check the given address. 
When validated, the response for the endpoint will provide newly added block object in JSON format.

Body data is required. If there is no body or just ""(empty string), Block will not be created.

#### postNewBlock()

```
http://localhost:8000/block
```

##### Example

- CURL
```
curl -X POST \
  http://localhost:8000/block \
  -H 'Content-Type: application/json' \
  -d '{
  "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
  "star": {
    "dec": "-26° 29'\'' 24.9",
    "ra": "16h 29m 1.0s",
    "story": "3"
  }
}'
```

- POSTMAN

```
curl -X POST \
  http://localhost:8000/block \
  -H 'Content-Type: application/json' \
  -H 'Postman-Token: [your-token]' \
  -H 'cache-control: no-cache' \
  -d '{
  "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
  "star": {
    "dec": "-26° 29'\'' 24.9",
    "ra": "16h 29m 1.0s",
    "story": "3"
  }
}'
```

##### Returns

```
{
    "hash": "16f010045c6b357023afa869f931e45c08dc4434c4b783cdbe62a3df3da04c94",
    "height": 3,
    "body": {
        "address": "1HZwkjkeaoZfTSaJxDw6aKkxp45agDiEzN",
        "star": {
            "dec": "-26° 29' 24.9",
            "ra": "16h 29m 1.0s",
            "story": "33"
            "decodedStory": "2"
        }
    },
    "time": "1541516236",
    "previousBlockHash": "fc6dccdcec9a64046198a285830045f2be68d1cdc0c9257766f50819d687b2af"
}
```

##### Error

If you try posting without body, the endpoint responses error message.

```
~ curl -X POST http://localhost:8000/block
> Block Body shouldn't be empty.

```

### GET

Get block object specified by the condition. 
If there is no error, the response for the endpoint will provide all block objects which met condition.

There are three ways to get block.

#### getBlockByIndex();

```
http://localhost:8000/block/::HEIGHT
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

#### getBlockByAddress();

```
http://localhost:8000/stars/address::ADDRESS"
```

please refer getBlockByIndex()

#### getBlockByHash();

```
http://localhost:8000/stars/address::HASH"
```

please refer getBlockByIndex()

## Built With

- [NodeJS](https://nodejs.org/)
- [CryptoJS](https://www.npmjs.com/package/crypto-js)
- [ExpressJS](https://expressjs.com/)
- [LevelDB](http://leveldb.org/)

## Contributing

Feel free to contributing by issuing&PR

## Authors

* **Sanghun Kang** - *Initial work*