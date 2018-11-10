# 1. Lesson Introduction

## Lesson Introduction
### In the Previous Lesson

In the previous lesson, you learned the basics of the Ethereum blockchain covering topics such as - Accounts, Transactions and Messages, Gas, and EVM.

You also learned about the tooling, ecosystem, clients, and local development environments covering how to use Geth and Mist.

### Smart Contracts

At a high-level, a smart contract is self-executing computer programs used to facilitate a transaction between various parties. You will learn more about this later on.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baac37a_screen-shot-2018-09-25-at-4.23.08-pm/screen-shot-2018-09-25-at-4.23.08-pm.png)

For example, a smart contract between a renter and her landlord can automate the process of monthly rent payments. In the digital contract, every first of the month the monthly rent is automatically paid from the renter's fund account to the landlord's fund account.

This smart contract removes the process of any intermediary, automates the process, and is recorded in a transparent ledger.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baac499_screen-shot-2018-09-25-at-4.23.55-pm/screen-shot-2018-09-25-at-4.23.55-pm.png)

### DApps

Learning about smart contracts will allow you to build your own decentralized app or dapp!

A DApp has its backend code running on a decentralized peer-to-peer network. Contrast this with typical centralized app where the backend code is running on centralized servers.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baaad9b_screen-shot-2018-09-25-at-2.50.00-pm/screen-shot-2018-09-25-at-2.50.00-pm.png)

### Skills for the Project
### Summary

To develop a DApp, we've broken down the process into these parts which we will be covering in this lesson:

- Part 1	**Write a smart contract with functions to support proof of existence (i.e. notarization)**
- Part 2	Test smart contract code coverage
- Part 3	Deploy smart contract on a public test network (Rinkeby)
- Part 4	Modify client code to interact with a smart contract

# 2. Smart Contracts

## Smart Contracts

- Part 1	**Write a smart contract with functions to support proof of existence (i.e. notarization)**

## Resources

- [Art](https://dada.nyc/home)
- [Service providers](https://www.originprotocol.com/en)
- [Derivatives](https://dydx.exchange/)
- [Credit](https://bloom.co/)
- [Loans](https://dharma.io/)
- [Cryptokitties](https://www.cryptokitties.co/)
- [Cryptokitty Auction](https://www.nytimes.com/2018/05/18/style/cryptokitty-auction.htmlÎ)

## Case Study: CryptoKitties Smart Contract

While on the surface CryptoKitties may seem like a trivial game, it has been revolutionary in demonstrating the power of blockchain transactions beyond simple financial transactions.

The CryptoKitties game demonstrates owning a digital asset (CryptoKitty) and how that asset is tied to a digital identity and how transactions between users can take place via smart contracts, digital identities and their digital assets.

If we explore the [CryptoKitties source code](https://ethfiddle.com/09YbyJRfiI), there are important takeaways we can use to apply to smart contracts we write in the future.

Take some time to review this post - [How to Code Your Own CryptoKitties-Style Game on Ethereum](https://medium.com/loom-network/how-to-code-your-own-cryptokitties-style-game-on-ethereum-7c8ac86a4eb3). Be aware that this article is not meant for beginners; however, we are asking you to review it to help expose you to how to structure and design smart contracts as you continue learning more on this topic.

Keep these questions in mind as you're reading:

1. Cryptokitties contains more than one contract. How are all these contracts related? What does each contract focus on? (e.g. KittyBase.sol focuses on the core data of the app)
2. How are gen0 kitties produced?
3. How is data stored (or not)? (Note this is kind of a trick question)
4. The article discusses Kitties as Tokens and the difference between fungible and non-fungible token transactions. If the difference is unclear, no worries, we will discuss more later. If you'd like to learn more now, checkout [this article](https://cointelegraph.com/explained/non-fungible-tokens-explained).

# 3. Solidity Introduction

## Solidity Introduction

- Part 1	**Write a smart contract with functions to support proof of existence (i.e. notarization)**

**Solidity**
Statically-typed, high-level language for writing smart contracts that run on the Ethereum Virtual Machine (EVM)

- Supports inheritance
- Libraries
- User-defined types
- & many other popular features of a programming language

> Note: It is a rapidly evolving and new language with a number of limitations you might not be used to from working with other high level languages

**Remix**
Browser-based IDE with integrated compiler and Solidity runtime environment without sever-side components.

## Resources

[Remix](https://remix.ethereum.org/)

## Code

```js
pragma solidity ^0.4.23;

contract HelloWorld { 
    string public message;

    constructor() public { 
        message = "Hello World!";
    }

    function getMessage() public view returns(string) { 
        return message;
    }
}
```

## Need help with Solidity?

we've created an overview of important things to watchout for in the next concept.

# 4. Solidity Review

## Solidity Review

In this section, we provide a brief Solidity review. For full developer documentation, review the following: https://solidity.readthedocs.io/en/v0.4.24/

Topics covered in this section are:
- Solidity versioning
- Contracts
- Variables
    - Variable types
    - Booleans
    - Integers
    - Addresses
    - Strings
    - Variable definition
- Arithmetics
    - Arithmetic operations
- Structs
- Mappings

## Solidity review

This page list common Solidity syntax. It's geared for a quick review as your working through the development of your smart contracts. For more depth, please review Solidity developer documentation: https://solidity.readthedocs.io/en/v0.4.24/

### Solidity versioning

Solidity source files can contain any number of contract definitions. Each Solidity file also includes a thing called "Version Pragma". It is used to prevent the code from being compiled with future compiler versions that might introduce incompatible changes. Most of the time, the definition looks like this:

```js
pragma solidity ^0.4.20;
```

In the example above 0.4.20 is the desired compiler version.

### Contracts

Now, let's put it into code.

Contracts in Solidity are similar to classes in object-oriented languages. They contain data in variables and functions that can modify these variables.

They are defined by using a contract keyword, followed by the contract name and two brackets { } which will later enclose contract variables and functions. For example:

```js
pragma solidity ^0.4.20;

contract ParentObject {



}
```

### Variables

Wow! You've successfully created the frame of your contract! Now, it's time to start learning about how your contract will work. We'll start by finding out what type of variables there are.

#### Variable types

State variables are used to store information on the blockchain. They can also be manipulated by the functions within the contract.

Solidity is a statically typed programming language, meaning that each variable must have its type specified. Examples of the main data types:

#### Booleans

Can only have one of the two following values: true or false. The keyword for booleans is bool.

#### Integers

Integers can be split into main groups: regular integers (can store both positive and negative values) and unsigned integers (can only store values that are 0 or higher)

Regular integer has keywords from int8 to int256. The number signifies the maximum number of bits it can store (thus limiting the maximum value), and it can be any number between 8 and 256 as long as it incremented in steps of 8 (e.g., int16 is valid but int17is not). The int keyword alone would be understood as int256.

Unsigned integers follow the same logic. The only difference is the keyword which ranges from uint8 to uint256. Keyword uintcan also be used instead of uint256.

#### Addresses

The address keyword is used to hold Ethereum addresses. If you're planning to store an Ethereum address, you will need to use the address keyword.

#### Strings

The string variable is used to store text information. If you need to store a variable that should contain text information use the string keyword.

#### Variable definition

There are more data types, but we will go into more details in further lessons.

Variables and their values are defined like this.

```js
contract Pizza {

bool isWarm = true;

uint slicesLeft = 3;
}


pragma solidity ^0.4.20;

contract ParentObject {

    // Write your solution below

    uint maxChildrenPerParentObject = 10;

    uint minChildrenPerParentObject = 1;

}
```

### Arithmetics

Now that you learned to define the variables for your contract, it's time to go through some basic math commands that will be useful later for defining your planet's code.

#### Arithmetic operations

Integers can be used for arithmetic operations:

- Addition x + y
- Subtraction x - y
- Multiplication x * y
- Division x / y
- Remainder x % y
- Exponentiation x ** y (x to the power of y)

For example:

```js
uint x = 16;
uint pizza = 4;
uint result = 0;
result = x + pizza; // 16 + 4 = 20
result = x - pizza; // 16 - 4 = 12
result = x * pizza; // 16 * 4 = 64
result = x / pizza; // 16 / 4 = 4
result = x % pizza; // 16 % 4 = 0
result = x ** pizza; // 16 ^ 4 = 65536
```

A real world example:

```js
uint pizzaSlices = 6;
uint people = 2;
uint slicesPerPerson = pizzaSlices / people;
```

### Structs

As we've learned the basics for defining varibles, now we will learn to create the structure that defines your variables properties: name, type, coordinates (X and Y), and so forth.

#### Structs

A struct is a special data type that allows the programmer to group a list of variables.

Structures are defined like this:

```js
struct Car {
    string make;
    string model;
    uint16 year;
    uint16 horsepower;
}
```

### Mappings

Now that you've defined your variables, we'll learn how to create a variable that will later map your variable to the blockchain - a special list where all other variables are stored.

Mappings allow the programmer to create key-value pairs and store them as a list. Concepts like this also are known as hash tables.

Mappings are defined like this:

`mapping(key_type => key_value) mappingName;`

key_type should be replaced by a data type. Two commonly used variable types for mapping keys that we already know about are address and uint. It is important to note that not every data type can be used as a key. For instance, structs and other mappings cannot be used as keys.

Similarly, key_value should be replaced by the value type. Unlike with keys, Solidity does not limit the data type for values. It can be anything, including structs and other mappings.

A real-world example of a mapping:

```js
mapping(address => uint256) balance;
```

This mapping could hold the bank account balance in uint256 for the given address.

# 5. Identity & Smart Contracts

## Identity & Smart Contracts
## Resources

- [Cryptopunks Account Info](https://www.larvalabs.com/cryptopunks/accountInfo?account=0xc352b534e8b987e036a93539fd6897f53488e56a)
- [Cryptopunks Details](https://www.larvalabs.com/cryptopunks/details/372)
- [Etherscan](https://etherscan.io/address/0xc352b534e8b987e036a93539fd6897f53488e56a#tokentxns)
- [Rarebits](https://rarebits.io/address/0xC352B534e8b987e036A93539Fd6897F53488e56a)
- [Solidity Units and Global Variables](https://solidity.readthedocs.io/en/v0.4.24/units-and-global-variables.html?highlight=msg.sender)

# 6. Building a Star Notary Service

## Building a Star Notary Service

In this section, we will begin by building a smart contract that tracks ownership of our digital star.

## Resources

- [Ganache](https://truffleframework.com/docs/ganache/using)
- [Remix](https://remix.ethereum.org/)

## Code

```js
pragma solidity ^0.4.23;

contract StarNotary { 

    string public starName; 
    address public starOwner;

    constructor() public { 
        starName = "Awesome Udacity Star";
    }

    function claimStar() public { 
        starOwner = msg.sender;
    }
}
```

# 7. Deploying Smart Contract - Ganache

## Deploying Smart Contract - Ganache

how to setup your local test environment and deploy your smart contract to the local Ethereum network using a tool called Ganache.

## Ganache

Ganache - A personal blockchain for the Ethereum development you can use to deploy contracts, develop your applications, run tests, execute commands, and inspect state while controlling how the chain operates.

It is available as both a desktop application as well as a command-line tool (formerly known as the TestRPC). Ganache is available for Windows, Mac, and Linux.

GUI: HTTP://127.0.0.1:7545
CLI: HTTP://127.0.0.1:8545

## Resources

- [Download Ganache](https://truffleframework.com/ganache)
- [Remix]()

## Need help deploying your smart contract?

If you need additional help setting your local test environment and deploy your smart contract with Truffle and Ganache, we've provided a resource in the next concept.

# 8. Deploying Smart Contract Review

## Deploying Smart Contract Review

In this section, we provide tips for deploying smart contracts with Truffle. These are being provided as a reference point.

This section will cover how to:

- Install Truffle and Ganache CLI
- Run Ganache CLI
- Compile smart contracts
- Deploy smart contract

For full developer documentation review:

- https://truffleframework.com/docs/truffle/overview
- https://truffleframework.com/docs/truffle/getting-started
- https://github.com/ethereum/EIPs/tree/master/EIPS

## Install Truffle and Ganache CLI

```
sudo npm install -g ganache-cli truffle
```

### Run Ganache CLI

After installation, you can start to develop your own smart contracts.

First, you need to create a simulated environment for running smart contracts on your local computer:

```shell
ganache-cli
```

Note: Ganache CLI runs within your system memory, so everything will be back to fresh if restart occurs. If you desire to utilize the same wallet for testing upon restarts, take note of Ganache CLI output regarding 'Mnemonic' wallet words under the HD Wallet section. Stop Ganache and modify your Ganache command line statement to include --mnemonic "string of words".

```shell
ganache-cli --mnemonic 'trick core barely fold sample icon display hollow smoke task emotion pepper'
```

To discover additional options, investigate additional command line arguments utilizing --help.

```sh
ganache-cli --help
```

## Complie smart contracts

```shell
truffle compile
```

This compiles the original code into Ethereum bytecode. If everything goes well, it will create .json file under build/contracts folder.

## Deploy smart contract

Make sure to configure your network settings. Modify truffle.js file (or truffle-config.js for windows), example below:

```js
module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    }
  }
};

```

Run the following command to start the migrations scripts and deploy your smart contracts:

```
truffle migrate
```

# 9. Interact with a Smart Contract from a Webpage

## Interact with a Smart Contract from a Webpage

So far, you've setup your smart contract to register a star, and it’s deployed to our local Ethereum test network. In this lesson, Elena will build a simple web page to interact with it.

**Check the Video!**

## Code

Summary of changes made in the index.html file:

- Paste Contract ABI
- Add code for getting and displaying star name from the smart contract
- Add code for getting and displaying star owner from the smart contract
- Add code for claiming star in function claimButtonClicked()

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Star Notary</title>
        <link rel="stylesheet" type="text/css" href="style.css">

        <script src="https://cdn.jsdelivr.net/gh/ethereum/web3.js/dist/web3.min.js"></script>
    </head>

    <body>
        <div class="container">
            <h1>Star Notary</h1>

            <div class="row">
                <label class="bold">Star Name:</label>
                <label id="star-name"></label>
            </div>

            <div class="row">
                <label class="bold">Star Owner:</label>
                <label id="star-owner"></label>
            </div>

            <button id="claim-button" onclick="claimButtonClicked()">Claim Star</button>
        </div>

        <script>    

            // Instantiate and set Ganache as your provider
            web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            // The default (top) wallet account from a list of test accounts 
            web3.eth.defaultAccount = web3.eth.accounts[0];
            // The interface definition for your smart contract (the ABI) 
            var StarNotary = web3.eth.contract(
                [
                    {
                        "constant": false,
                        "inputs": [],
                        "name": "claimStar",
                        "outputs": [],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "function"
                    },
                    {
                        "inputs": [],
                        "payable": false,
                        "stateMutability": "nonpayable",
                        "type": "constructor"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "starName",
                        "outputs": [
                            {
                                "name": "",
                                "type": "string"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    },
                    {
                        "constant": true,
                        "inputs": [],
                        "name": "starOwner",
                        "outputs": [
                            {
                                "name": "",
                                "type": "address"
                            }
                        ],
                        "payable": false,
                        "stateMutability": "view",
                        "type": "function"
                    }
                ]
            );
            // Grab the contract at specified deployed address with the interface defined by the ABI
            var starNotary = StarNotary.at('0xd236a2fb7e88326cf783d121cb54827ffc0e06b7');

            // Get and display star name
            starNotary.starName(function (error, result) {
                if (!error) {
                    document.getElementById('star-name').innerText = result
                } else { 
                    console.log(error);
                }
            });
            // Get and display star owner
            starNotary.starOwner(function (error, result) {
                if (!error) {
                    document.getElementById('star-owner').innerText = result
                } else { 
                    console.log(error);
                }
            });
            // Enable claim button being clicked
            function claimButtonClicked() { 
                starNotary.claimStar(function (error, result) {
                    if (!error) {
                        location.reload();
                    } else { 
                        console.log(error);
                    }
                });
            }
        </script>
    </body>
</html>
```

# 10. Using Events from a Smart Contract

## Using Events from a Smart Contract
### Events and Logs in Smart Contracts

In this section, you'll learn how to interact with your smart contract using something called events.

Events and logs are important in Ethereum because they facilitate communication between smart contracts and their user interfaces.

In simple terms, the purpose of an event is to provide JavaScript callbacks in a user interface, which allows you to execute code based on whether or not the event was successful or if it errored.

### Comparing Callbacks and Events

You're probably familiar with callbacks from traditional web development - a server response is returned in a callback to the frontend. In Ethereum, when a transaction is mined, smart contracts can emit events and write logs to the blockchain. The frontend has functions that watches for these events and will take some action(e.g. display a message to the UI) when these events fire.

### In This Video

**Part 4	Modify client code to interact with a smart contract**

Elena defines an event called `starClaimed()` in the smart contract. When someone claims a star, it will emit this event.

In the frontend, she adds the function `starClaimedEvent()` which checks if the event was fired. If the event was properly fired without an error, that when we can reload the frontend, otherwise we're going to go ahead and make the console statement to help us debug further.

**Check The Video**

## Code

In the `StarNotary.sol` file, Elena added the `starClaimed()` event:

```js
pragma solidity ^0.4.23;

contract StarNotary { 

    string public starName; 
    address public starOwner;

    event starClaimed(address owner);

    constructor() public { 
        starName = "Awesome Udacity Star";
    }

    function claimStar() public { 
        starOwner = msg.sender;
        emit starClaimed(msg.sender);
    }
}
```


# 11. Lesson Recap

- Wrote a smart contract
- Deployed to local Ethereum test network
- Interacted with our smart contract