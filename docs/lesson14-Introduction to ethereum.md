# 1. Lesson Introduction - Part 1

## Lesson Overview

- Introduce Ethereum Blockchain
- Tools and Developer Ecosystem
- Deep dive into the Ethereum Protocol

# 2. Lesson Introduction - Part 2

### In the Previous Course

Previously, you learned to create your own private blockchain web service so a user could interact with data on your blockchain via the web3 object and a webserver.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baab948_screen-shot-2018-09-25-at-3.40.15-pm/screen-shot-2018-09-25-at-3.40.15-pm.png)

You built a blockchain notary service API that was used to encrypt and decrypt digital data about a star and could be used to publicly prove who rightfully owns it. It might sound simple, but remember that one of the most important aspects of a blockchain that ensures data security is the ability for a transaction on the blockchain to be signed and validated.

![])(https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baab965_screen-shot-2018-09-25-at-3.40.51-pm/screen-shot-2018-09-25-at-3.40.51-pm.png)

### In this Course

In this course, you will take that blockchain notary service one step further and use it to create your very first Decentralized Application or DApp!

You will modify your blockchain notary service API to interact with the Ethereum platform. The web service API will include third party libraries to interface with Ethereum smart contract to offer instant and secure proof of existence for any digital asset such as a document, agreement, media, or in this case, proof of who owns the star on the blockchain.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baab986_screen-shot-2018-09-25-at-3.41.24-pm/screen-shot-2018-09-25-at-3.41.24-pm.png)

With that setup, you’ll learn how to interact with your dapp in a browser like Chrome. We’ll explore how to do this using MetaMask, a tool that allows you to run Ethereum DApps right in your browser without running a full Ethereum node. So if you need to make transactions that interact with Ethereum, say buy or sell your star, you can complete these transactions all from your web browser!

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baab9a8_screen-shot-2018-09-25-at-3.41.56-pm/screen-shot-2018-09-25-at-3.41.56-pm.png)

- [Remix](https://remix.ethereum.org/) - A powerful, open source tool that helps you write Solidity contracts straight from the browser.
- [Truffle](https://truffleframework.com/) - A development environment, testing framework and asset pipeline for blockchains using the Ethereum Virtual Machine (EVM)
- [Ganache](https://truffleframework.com/ganache) - A personal blockchain for Ethereum development you can use to deploy contracts, develop your applications, and run tests.
- And of course [Solidity](https://solidity.readthedocs.io/en/v0.4.25/), the language used to write smart contacts in the Ethereum network.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baae793_screen-shot-2018-09-25-at-6.57.25-pm/screen-shot-2018-09-25-at-6.57.25-pm.png)

### What is a DApp?

First off, a DApp, or Decentralized Application, has its backend code running on a decentralized peer-to-peer network. Contrast this with a traditional app where the backend code is running on centralized servers.

A DApp can have frontend code and user interfaces written in any language (just like a traditional app) that can make calls to its backend.

### Why is understanding how to create a notarization DApp useful?

The project associated with this course will cover many of the fundamental principles used to create a DApp that involves securing digital assets and transferring funds on the blockchain via smart contracts and allowing users to interact with this process via a frontend browser. This same concept can be applied to any sort of marketplace application you can think of.

One very famous example of this is Cryptokitties, a blockchain based virtual game that allows players to purchase, collect, breed and sell various types of virtual cats which we will explore further in this course.

## Summary

At a high-level, here’s the steps and concepts we’ll cover to complete this:

- Background on Ethereum
- Explore the development environment
    - Ethereum CLI
    - Ethereum GUI
    - Truffle
    - Ganache
- Write a smart contract with Solidity in Truffle
- Compile and migrate the smart contract to the blockchain
- Test the smart contract
- Interact with DApp in browser via MetaMask

# 3. Interview: Samrt Contracts
# 4. Blockchain Framework Refresher

## Blockchain Framework Refresher

Throughout this lesson, we'll go over a ton of new concepts related to the Ethereum platform. While learning these new ideas, it's important to keep in mind that not everything here is brand new. While there are some differences between Ethereum, Bitcoin, and other platforms, there are also many similarities.

In this section, we'll recap the Blockchain Framework. This framework was introduced earlier in the program and is meant to help navigate you through these similarities and differences as you explore each of these new platforms.

## Blockchain Framework

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/September/5baa77ee_screen-shot-2018-09-25-at-10.59.23-am/screen-shot-2018-09-25-at-10.59.23-am.png)

While there are many similarities between Ethereum and what you've learned previously, there are also some differences. Coming up, we'll go over some of these similarities and differences using basic Ethereum terminology.

# 5. Ethereum Basic Terminology

## Ethereum Basic Terminology

When getting started with any new idea, it's important to understand the basic terms and definitions that you'll be introduced to. In this section, you'll learn these basic terms. Having a clear understanding of these terms will help prepare you to understand more complex ideas later in the course.

## Terms

- Ethereum: An open source, programmable public blockchain platform.
- Ethereum Virtual Machine (EVM): Capable of executing logic, algorithms, and process data inputs.
- Turing Complete: Any software that is able to run code written by a developer or executed by an end user.
- Smart Contract: A contract written in code. More specifically, it is an object on the Ethereum blockchain that contains EVM code functions.
- Solidity: High level language for coding and deploying smart contracts.

## Glossary

Ethereum also maintains a glossary on their github page that will be helpful to reference as you continue learning. You can find that glossary [here](https://github.com/ethereum/wiki/wiki/Glossary).

# 6. Why Ethereum

## Why Ethereum?

Questions
- What are its goals?
- Why was it created?

Topics
- Qualities of early blockchain protocols
- Next generation protocols
- Ethereum

How Ethereum defines themselves on Ethereum.org

A decentralized platform that runs smart contracts: applications that run exactly as programmed without any possibility of downtime, censorship, fraud, or third-party interface

## Resources

- [Ethereum Home Page](https://www.ethereum.org/)
- [Ethereum Github](https://github.com/ethereum/)

# 7. Ethereum vs. Bitcoin

## Ethereum vs Bitcoin

The goal is to help you better understand how each of them provides value to you and the users of your applications on these platforms.

![](src/l14-1-bitcoinvsethereum.png)

## Resources
### Ethereum

- [Ethereum Homepage](https://www.ethereum.org/)
- [Ethereum Github](https://github.com/ethereum/)
- [Ethereum Documentation](http://www.ethdocs.org/en/latest/)

### Bitcoin

- [Bitcoin Homepage](https://bitcoin.org/en/)
- [Bitcoin Github](https://github.com/bitcoin)
- [Bitcoin Documentation](https://bitcoin.org/en/developer-documentation)

# 8. Ethereum Roadmap and Consensus Algorithm

## Ethereum Roadmap and Consensus

![](src/l14-2-ethereum-roadmap.png)

**Frontier**
First release of the Ethereum network. This release enabled developers to experiment, mine ETH, and start building decentralized applications.

**Homestead**
Second release of the Ethereum network. This came with many protocol improvements, and became a foundation layer for many more upgrades that followed.

**Metropolis**
Third release of the Ethereum network. The plan was to provide a lighter, faster and more secure client and network.

> two mini releases
> Byzantium and Constantinople

**Serenity**
Forth release of the Ethereum network. In this release the long-awaited transaction to Proof of Stake (PoS) consensus algorithm is expected.

## Resources

- [Dagger Hashimoto Reference](https://github.com/ethereum/wiki/wiki/Dagger-Hashimoto)
- [Ethereum Releases Olympic Release](https://blog.ethereum.org/2015/05/09/olympic-frontier-pre-release/)
- [Frontier Release](https://blog.ethereum.org/2015/07/27/final-steps/)
- [Homestead Release Metropolis Release](https://blog.ethereum.org/2016/02/29/homestead-release/)
- [Serenity Release](https://blog.ethereum.org/2016/03/05/serenity-poc2/)
- [Ethereum Block 1](https://etherscan.io/block/1)

# 9. Proof of Work to Proof of Stake Algorithm

## proof of Work to Proof of Stake

On top of knowing what changes are coming to the Ethereum network, you should also know some of the more technical aspects behind what that actually means for you as a developer. One of the largest changes coming to the Ethereum network is the transition from PoW to PoS. 

**PoS Benefit**

- Copious amounts of electricity is not required
- issuance of several new coins might not be necessary
- Potentially discourages selfish miners
- Rewards are not exponential to Economies of Scale
- Less chances for a 51% attack because of economic penalties

## Resources

Throughout this video, PK overviews the motivations and goals for a big change coming to the Ethereum platform. To better understand the details of Casper and the shift from PoW to PoS, feel free to read through some of the resources Ethereum provides about these topics.

- [Casper Proof of Stake](https://github.com/ethereum/casper)
- [Proof of Work (PoW)](https://github.com/ethereum/wiki/wiki/Ethash)
- [Proof of Stake (PoS)](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQs)

# 10. World State

## World State

You'll lean what it means for a blockchain to have a state and how this compares between Bitcoin and Ethereum.

![](src/l14-3-ethereum-world-states-1.png)
![](src/l14-4-ethereum-world-states-2.png)

**Ethereum World States**

- Nonce
- Balance
- Storage Hash
- Code Hash
- Account Storage
- Ethereum Virtual Code

# 11. Ethereum Accounts

## Ethereum Accounts

Ethereum Accounts are a fundamental component needed to manage the state of the Ethereum blockchain. In this section, we'll overview what types of accounts exist the variables make up these accounts. This will help you better work with this data later on when you are programming applications using these accounts.

**Account Types**
- Externally owned accounts (EOA's)
- Contract Account (CA's)

![](src/l14-5-eoa-vs-ca.png)

### Externally owned accounts (EOA's)

- Tied to a private key
- Doesn't hold code
- Maintains ether balance
- Can send transactions

#### Contents:

- Account balance
- Transaction Count
    > The number of transactions that originated from the account.

#### Abilities:

- Send transactions
- Initiate a smart contract
- Transfer value from its wallet

### Contract Account (CA's)

- Has code
- Maintains ether balance
- Executes code when triggered by transactions or messages

#### Contents:

- Account balance
- Transaction Count
    > The number of times this contract has deployed other smart contracts
- Smart contract code

#### Abilities:

- Transfer value
- Initiate another smart contract
- Execute smart contracts
- Manipulate storage

### Ethereum World States

- Nonce
    - Number of transactions on the account
    - different transaction menning between EOA and CA
- Account Balance
    - Total value of Ether available on the account in Wei
- Storage Hash
    - Root node of the patricia tree
    > patricia tree: the data structure that Ethereum uses
- Code Hash
    - Hash of the code within the smart contract
    - This hash cannot change because smart contract code cannot change after it's deployed
    - In EOA, there is no code. So the code hash field is an empty string

## Resources

[EOA vs Contract Accounts](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html?highlight=accounts#eoa-vs-contract-accounts)

# 12. Transactions and Messages

## Transactions and Messages

In this section, we'll overview how these transactions take place, how messages work, and the fields within them that are available for you to work with as a developer.

Transaction Types
- Message Calls
- Contract Creation

![](src/l14-6-eoa-transactions.png)

![](src/l14-7-eoa-transactions.png)

**Nonce**
- Transaction count from the sender's account

**Gas Price**
- Price per unit of gas you are willing to pay for executing the code in your smart contract
- Similar conscept to miner's fee of bitcoin

**Gas Limit**
- Specifies the max number of computational steps the transaction is allowed

**To**
- Recipient's address

**Value**
- The amount of Ether you want to send
- Written in Wei

**Data, Init**
- Optional
- Information used to record the creation and execution of smart contract

## Resources

- [What is a transaction?](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html#what-is-a-transaction)
- [What is a message?](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html#what-is-a-message)

# 13. Ethereum Gas and Fees

## Ethereum Gas and Fees
## Resources

- [What is gas?](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html#what-is-gas)
- [Estimating transaction costs](http://ethdocs.org/en/latest/contracts-and-transactions/account-types-gas-and-transactions.html#estimating-transaction-costs)

# 14. Ethereum Virtual Machine

## Ethereum Virtual Machine

**EVM (technical definition)**
- A virtual machine that executes code.
- A runtime environment for Smart Contracts.

[](src/l14-8-evm.png)

## Resources

![Ethereum Virtual Machine](http://ethdocs.org/en/latest/introduction/what-is-ethereum.html?highlight=EVM#ethereum-virtual-machine)

# 15. Ethereum Network Performance

## Ethereum Network Performance
## Resources

- [Ethstats](https://ethstats.net/)
- [Ether denominations](http://ethdocs.org/en/latest/ether.html)

## Terms and Definitions

- BestBlock: The highest block number of the longest valid chain, said differently it is heavy with cumulative difficulty.
- Uncles: Orphaned blocks and unlike other blockchains, in Ethereum they are included and rewarded. The dashboard displays current bloc uncle count and that from last 50 blocks.
- LastBlock: The time since the last mined block in seconds.
- AverageBlock: Average time between two block (excl. uncles) - should display 15 seconds unless the network is really slow.
- AverageNetworkHashrate: Number of hashes spent by miners to find a new block. 250 TH/s is 250 trillion network hash power per second.
- Difficulty: Also known as the mining difficulty to find a new block.
- ActiveNodes: The number of nodes connected to the dashboard. The total number of active connected nodes powering the network is quite high.
- GasPrice: The price miners are currently accepting. Currently it is ~40 gwei, which is 40 giga wei, which is 40 billion wei. The default is 20 gwei.
- GasLimit: The gas limit for a block. The dashboard reads 7,999,992 gas and the miner can include transactions until the block is full and limit is met. The default is 4,712,388 (1.5 pi million gas) In bitcoin you might have come across block size limit.
- PageLatency: A dashboard stat.
- Uptime: A dashboard stat.
- BlockTimeChart: Maps out actual time between blocks.
- DifficultyChart: Maps out actual difficulty of previous blocks.
- BlockPropagationChart: For the nodes connected to the dashboard, it is how fast blocks are shared/propagated between nodes.
- LastBlockMiners: Displays the public key of the last miners who found the most number of blocks.
- UncleCountChart: Displays number of uncles per 25 blocks per bar.
- TransactionsChart: Displays the number of transactions included in previous blocks.
- GasSpendingChart: Correlated to Transactions Chart and displays the amount of spent gas.
- GasLimitChart: Dynamic in nature and shows Gas Limit for the previous blocks.

## Ethereum Glossary

![Ethereum Glossary](https://github.com/ethereum/wiki/wiki/Glossary)

# 16. Generating Keys in Ethereum

## Generating Keys in Etehreum
## Goals

Keys: Private > Public > Address
3 Steps

- Create a random private key (of 64 hexadecimal characters | 256 bits | 32 bytes)
- Derive a public key from the above private key (of 128 hexadecimal characters | 512 bits | 64 bytes)
- Derive an address from the above derived public key (of 40 hexadecimal characters | 160 bits |20 bytes)

## Commands
### Generate Private Key

```
openssl ecparam -name secp256k1 -genkey -noout
```

#### Example Output

```
-----BEGIN EC PRIVATE KEY-----
MHQCAQEEIOV/tf2mBMYtygiqAoMLk1weZj2uXmGCagGxALeZnHQWoAcGBSuBBAAK
oUQDQgAEBKrAcZsycPPgJf+uzTF+/xZ35v8og4+P7fvHJ81jCXpNyfyfrg8e1goN
Yamwfd8MEgS3u/qJOSSEsoc+saTDVg==
-----END EC PRIVATE KEY-----
```

### Generate a random Private Key & Derive a Public Key

```
openssl ecparam -name secp256k1 -genkey -noout | openssl ec -text -noout > Key
```

### Display Key File

```
cat Key
```

#### Example Output

```
Private-Key: (256 bit)
priv:
    00:a8:a6:02:44:37:16:3f:1b:20:1d:61:8c:45:5c:
    33:88:09:97:0c:38:59:19:c9:82:1c:10:9d:30:36:
    29:e8:53
pub:
    04:17:2d:96:31:e3:18:46:9a:80:6c:7f:b5:a3:d1:
    27:d8:3f:ac:ca:f9:f5:18:69:65:c7:82:dc:b0:4b:
    51:1e:56:7a:67:f9:33:4a:a3:72:fc:3b:55:78:d2:
    2d:1a:3f:30:5b:bd:38:69:66:14:41:16:8d:b7:12:
    34:19:2c:4f:88
ASN1 OID: secp256k1
```

### Extract the Private Key, remove leading zero, and save to a file 'priv'

```
cat Key | grep priv -A 3 | tail -n +2 | tr -d '\n[:space:]:' | sed 's/^00//' > priv

cat priv
```

#### Example Output

```
3-00a8a6024437163f1b201d618c455c4-338809970c385919c9821c109d30365-29e853
```

### Extract the Public Key, remove EC prefix 0x04, and save to a file 'pub'

```
cat Key | grep pub -A 5 | tail -n +2 |tr -d '\n[:space:]:' | sed 's/^04//' > pub
```

#### Example Output

```
7-04172d9631e318469a806c7fb5a3d18-27d83faccaf9f5186965c782dcb04b9-
511e567a67f9334aa372fc3b5578d210-2d1a3f305bbd3869661441168db71211-34192c4f88
```

### Generate the hash, and save to a file 'address'

```
cat pub | keccak-256sum -x -l | tr -d ' -' | tail -c 41 > address

cat address
```

#### Example Output

```
a95fdeec5607856dd71b3c466af62a6e895a8a6aa
```

## Key Outputs

```
1. 3-00a8a6024437163f1b201d618c455c4-338809970c385919c9821c109d30365-29e853
2. 7-04172d9631e318469a806c7fb5a3d18-27d83faccaf9f5186965c782dcb04b9-
511e567a67f9334aa372fc3b5578d210-2d1a3f305bbd3869661441168db71211-34192c4f88
3. a95fdeec5607856dd71b3c466af62a6e895a8a6aa
```

# 17. Ethereum Command Line Interface (CLI)

## Ethereum Command LIne Interface

There are many tools available to help you develop using Ethereum. On extremely important tool is the Ethereum client, which includes a CLI that you can use to interact with the Ethereum blockchain (in this course we will be using the Ethereum CLI called Geth).

![](src/l14-9-eth-client-types.png)

## Waht is Geth?

**Teh go-ethereum client is also reffered as geth.**
Geth is a multipurpose command line tool that runs a full Ethereum node implemented in the programming language Go. It has three interfaces - an interactive console, the command line subcommands and options, and a json-rpc server.

## Resources

- [Geth Website](https://ethereum.github.io/go-ethereum/)
- [Geth Github](https://github.com/ethereum/go-ethereum)
- [Geth Wiki](https://github.com/ethereum/go-ethereum/wiki/geth)
- [Geth Community](https://gitter.im/ethereum/go-ethereum)
- [Download Geth](https://ethereum.github.io/go-ethereum/downloads/)
- [Installation instructions for Mac](https://github.com/ethereum/go-ethereum/wiki/Installation-Instructions-for-Mac)
- [Command Line Options](https://github.com/ethereum/go-ethereum/wiki/Command-Line-Options)
- [Etherescan - Rinkeby](https://rinkeby.etherscan.io/blocks)
- [Rinkeby IO](https://www.rinkeby.io/#stats)

## Commands
### Install Geth

```shell
$ brew tap ethereum/ethereum
$ brew install ethereum
or brew upgrade ethereum
```

### Sync to the Rinkeby Test Network

```shell
$ geth --rinkeby --syncmode "fast"
```

# 18. Ethereum Graphical User Interface (GUI)

## Ethereum Graphical User Interface

As well as a CLI, Ethereum also provides a GUI to help you work with their platform more easily. This provides many of the same features of the CLI in a friendlier environment.

## Resources

- [Mist / Ethereum Wallet](http://ethdocs.org/en/latest/ethereum-clients/choosing-a-client.html#what-should-i-install-on-my-desktop-laptop)
- [Ethereum GUI - Mist](https://ethereum.org/)
- [See other GUI versions](https://github.com/ethereum/mist/releases/tag/v0.11.1)

# 19. Network Types & Funding Wallets using Faucets

## Network Types and Funding Wallets with Faucets

how to access these networks and finishes up by showing you how to get access to Ethereum on these networks using pubic faucets.

## Resources

- [Metamask Wallet](https://metamask.io/)
- [Metamask - Ether Faucet](https://faucet.metamask.io/)
- [Rinkeby - Ether Faucet](https://www.rinkeby.io/#faucet)

# 20. Lesson Recap