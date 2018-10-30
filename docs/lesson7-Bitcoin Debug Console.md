Learn the tooling available to explore the Bitcoin core public blockchain

# 1. Lesson Introduction

## Lesson Introduction

While this interface is a great start, the real power comes from being able to access this information programmatically. You can do that using what’s known as the bitcoin core debug console.

Throughout the lesson we’ll discuss many of the commands available to you in the debug console. Our goal is to help get you set up to confidently explore blockchain data using this tool. We’ll do this by covering commands for each component in the blockchain framework. This lesson builds on everything you’ve learned so far.

## From Concepts To Data

This is where this program really starts to turn from conceptual ideas to the lower level nuts and bolts you’ll need to build an application.

## Connecting Ideas To Information

Also, there’s one other REALLY important thing we want you to get from this lesson that will take a little effort on your part.

In this lesson you have a huge opportunity to tie the data you’re seeing to the conceptual ideas we’ve talked about earlier in the program.

For example, when we’re looking at block data, think about how this relates to what you understand a block to be.

What image is in your head already?
How does this data relate to that image?
Putting in the extra effort here is going to allow you to visualize how all of this connects.

This will become invaluable as we start building more complicated programs later on. We put a few more details below. If you’d like, take some time to read through, and when you’re ready, we’ll see you in this lesson on the bitcoin public testnet!

# 2. Interview: Debug Console
# 3. Terminal Overview

## Get Started with Bitcoin Core using the Debug Console
### Use the Bitcoin core Debug Console
### Use the Classroom Workspace
## Get Started with the Classroom Workspace
### Using the Workspace
## The Difference is bitcoin-cli

One difference when using the workspace you'll need to start each command with bitcoin-cli. In our tutorials, we do not use this since we are in the debug console but keep this in mind as you progress through the lesson.

## Wrap Up

# 4. Debug Console

## Debug Console
### Debug console Overview
## Commands

- Help: Provides an overview and details of commands available in the console.

For a list of available commands and their definitions, you can also go to the [bitcoin wiki](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list)

## Wrap Up

They're covered in a specific order to make sure you've seen certain commands that you may need before moving on to others. That said, they're not too dependent on each other. If you are interested in a certain section, feel free to jump straight to that, and if you're confident going off to explore on your own, that's great too!

# 5. Blockchain Commands

## Blockchain Commands
## Resources

[Bitcoin Improvement Proposals](https://github.com/bitcoin/bips)

## Commands

- getblockchaininfo: Returns various state information about blockchain processing.
- getblockcount: Returns the number of blocks in the blockchain.
- verifychain: Verifies blockchain database.

## Key Terms

- Blockchain: Digital ledger that contains the entire history of transactions made on the network.

## Problem: Blockchain Debug Console

What is the startTime for `segwit` as shown in the conosole?

> 146206800

# 6. Hash Commands

## Commands

- getblockhash: Returns hash of a block at the block number provided
- getnetworkhashps: Returns an estimated network hashes per second based on a specified number of recent blocks.
- getbestblockhash: Returns the hash of the best block.

## Key Terms

- Hash Value: A digital fingerprint for information
- Best Block: Most recent block that you’ve synced to with your local copy of the blockchain.

## Problem: Hash Debug Console

What is the block hash for block 1309 on the Bitcoin Testnet?

> 00000000e1304e7f152f82069dc85b6522614785c74668bdaad79752f365658b

# 7. Block Commands

## Commands

- getblock: Returns details of block information.
- getblockheader: Returns information about the block header.
- generate: Immediately mines the specified number of blocks to an address in the wallet.

## Key Terms

- Block: A container that holds a list of transactions to be added to the blockchain.

## Problem: Block Debug Console

What is the merkle root for block 1000 on the Bitcoin testnet?

> 3bf8c518a7a1187287516da67cb96733697b1d83eb937e68ae39bd4c08e563b7

# 8. Wallet Commands

## Wallet Commands

> Note: These commands are not available if you are using the Bitcoin-CLI classroom workspace.

## Problem: Wallet Debug Console

> No problems. why?

## Commands

- getwalletinfo: Returns an object containing various information about a wallet’s state.
- listwallets: Returns a list of currently loaded wallets.
- walletpassphrasechange: Change the wallet passphrase.

## Key Terms

- Wallet: Software that stores private keys that give access to a bitcoin balance.

# 9. Mempool Commands

## Mempool Commands
## Commands

- getmempoolinfo: Returns details on the active state of the transaction memory pool.
- getrawmempool: Returns all transaction details in the memory pool.
- getmempoolentry: Returns mempool data for a given transaction.

## Key Terms

- Mempool: Waiting place for all unconfirmed transactions before they are added to the blockchain.

## Problem: Mempool Debug Console

Which of the following best describes the purpose of the command getmempoolinfo?

- [] Returns all transaction ids in memory pool as a json array of string transaction ids.
- [x] Returns details on the active state of the TX memory pool.
- [] Returns mempool data for given transaction

> Correct! You can find information on this or any other commands by using help [command].

# 10. Transaction Commands

## Transaction Commands
## Commands

- getchaintxstats: Compute statistics about the total number and rate of transactions in the chain
- getrawtransaction: Returns raw transaction data
- listtransactions: Returns a list of transactions for a given account

## Key Terms

- Transaction: Record of any movement of funds that takes place on the network.

## Problem: Transaction Debug Console

To get a raw transaction, you’ll first use getrawmempool to find an ID to pass into the command. Why is the list of transactions shown by getrawmempool always changing?

- [] Getrawmempool returns a random selection of id's from the blockchain.
- [x] This command only shows what is currently in the mempool. The mempool is always changing.
- [] The blockchain does not provide access to the entire mempool.

# 11. Signature Commands

## Signature Commands
## Commands

- signrawtransaction: Sign inputs for a raw transaction. - signmessage: Sign message with the private key of an address

## Resources

Learn more about the [Raw transaction format](https://bitcoin.org/en/developer-reference#raw-transaction-format)

## Key Terms

- Signature: Establishes proof of ownership for each transaction on the blockchain.

## Problem: Hash Debug Console

Check all below that are valid arguments to the command signrawtransaction.

- [] txid
- [] vout
- [] scriptPubKey
- [] hex

# 12. Network Commands

## Network Commands
## Commands

- getnetworkinfo: Returns information about the state of the peer-to-peer network.
- getpeerinfo: Returns data about each connection network node.
- getconnectioncount: Returns the number of connections to other nodes.

## Key Terms

- Peer-to-peer network: A network of computers that allows information to be shared across users.

## Problem: Network Debug Console

Which of the following best describes the value returned for version when using getnetworkinfo

- [] (string) the server subversion string
- [] (numeric) the server version
- [] (numeric) the protocol version
- [] (string) the services we offer to the network

# 13. Mining Commands

## Mining Commands
## Commands

- getmininginfo: Returns an object that contains mining-related information.
- getblocktemplate: Returns data needed to construct a block.
- prioritisetransaction: Accepts the transaction into mined blocks at a higher or lower priority.

## Key Terms

Proof of Work: Consensus algorithm that requires manual processing from the user.

## Problem: Mining Debug Console

When using getmininginfo what value is shown for chain?

- [] (numeric) The last block transaction
- [x] (string) current network name as defined in BIP70 (main, test, regtest)
- [] (numeric) The network hashes per second

# 14. Bitcoin-CLI
# 15. Interview: Use Help!

- Help: Provides an overview and details of commands available in the console.

For a list of available commands and their definitions, you can also go to the [bitcoin wiki](https://en.bitcoin.it/wiki/Original_Bitcoin_client/API_calls_list)

# 16. Lesson Recap

In the next lesson, you'll use Bitcoin Core to explore the limitations and best practices when `embedding data in blockchain transactions`.

This lesson has a few important goals...

> Recognize the data structure of blocks and transactions.
> Understand the purpose of `Bitcoin Script opcodes` that are commonly used in the input and output parts of a transaction process.
> Explore the limitations and best practices of `embedding data in blockchain transactions`.

All this will lay a foundation for you in the next lesson where you will use this knowledge to build a simple blockchain from scratch.

Congratulations on making it through the lesson, we're excited to see you in the next lesson `Blockchain Data`.
