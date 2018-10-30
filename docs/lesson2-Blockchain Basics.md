# 1. Lesson Introduction
# 2. Interview: Blockchain Fundamentals

# 3. Financial Transactions

## Financial Transactions

The blockchain started as a way to try and solve problems seen with financial transactions. In this section, we'll go over what these transactions look like and discuss the solutions the blockchain provides.

## Current State of Financial Transactions
## Problem: Financial Transactions

Joe passes money to his Bank; Joe's Bank passes money to Brandy's Bank; Brandy's Bank passes money to Brandy

What are potential flaws with this system?

Your reflection
1. It takes lots of time. There are lots of steps.
2. Also they will take a little fee at each steps.
3. If bank doesn't work, you lose all money on that bank.
Things to think about
Thanks for your response.

Potential Answer 1: No easy way to see if transactions have been tampered with

Potential Answer 2: Transaction time is dependent on the banks to validate the transactions

## Problems with the Current System
## Wrap Up

Now we have a better idea of what the financial industry is trying to solve, and how the blockchain thinks it can improve on some of these ideas. Some of these ideas may seem pretty familiar, and thats great! When starting off we just want to make sure we're on the same page about the high level goals and solutions that the blockchain provides.

As we dive into the details, keep these solutions in mind. The blockchain is developing rapidly with TONS of new tools and ideas coming out all of the time. Having a firm grasp of what the goals are, you'll be able to better decide for yourself what's a useful tool, what's potentially successful solution to these problems, and how you can solve entirely new problems for yourself.


# 4. Introduction to Bitcoin
## Introduction to Bitcoin
## What is Bitcoin?
## Rercap

Bitcoin is not THE blockchain, it is A blockchain.

There are a lot of blockchains, and you’ll even be building one yourself later in this program. We’ll go through other blockchains and platforms too. But we’re starting here because once you can grasp these core ideas you’ll be able to apply them anywhere.

## Resources

Read: [How to Time-Stamp a Digital Document](https://www.anf.es/pdf/Haber_Stornetta.pdf)
Read: [Bitcoin: A Peer to Peer Electronic Cash System](https://bitcoin.org/bitcoin.pdf)

## Review the Bitcoin Whitepaper

Many of the concepts that Nakamoto wrote about - from building in privacy to ensuring the system grows - extend beyond Bitcoin and even beyond just cryptocurrency. These are concepts that are fundamental to building a robust blockchain for any application.

For this task, review the Bitcoin white paper. Reflect on what problem with the existing system that Bitcoin aimed to solve and the proposed solution. It’s expected that there you will encounter terms and concepts that aren’t familiar yet. It’s okay. We will cover these in the program. For now, try to understand the issue at a high-level.

A white paper is a guide that informs readers concisely about a complex issue and presents a thought on the matter. A white paper is meant to help readers understand an issue, solve a problem, or make a decision.

# 5. Hashing

## Hashing

Hashing is an idea you may already be familiar with. It's a way to create a digital fingerprint for a piece of data. It's a fundamental idea behind what makes the blockchain work. Understanding hashing will help you connect other ideas that we'll discuss later.

Coming up, we'll discuss what hashing is, why it's important, and the basics of how hashing helps contribute to the structure of the blockchain.

## Hashing Overview

The goal here is to help understand what hash values are and how they are used to build the blockchain.

## Hashing Demo

You can follow along with this demonstration at [Anders.com](https://anders.com/blockchain/hash.html).

## Resources

[Anders.com](https://anders.com/blockchain/hash.html)
[Bitcoin Hash Wiki](https://en.bitcoin.it/wiki/Hash)
[Cryptographic Hash Function](https://en.wikipedia.org/wiki/Cryptographic_hash_function)

## Wrapping Up

# 6. Blocks

# Blocks

In this section, we'll discuss what blocks are, why they're important, and the basics of how they work.

# Blocks Overview

we'll go over some basic concepts like what a block is, how it works, and why they're important.

Observation:
The term “reverse” isn’t very clear. In this case, you do not reverse the hashing algorithm or reconstruct the transactions in this case of a Merkle Root. What you do is use the hash to search the original transactions or hash values that created them. This searching allows you to find the original transactions that made up the block when starting from this single hash value.

# Block Demonstration

[Anders.com](https://anders.com/blockchain/block.html)

# Wrapping Up

Awesome work! You're moving along quickly and already understand how blocks work. The next question we want to answer is, "How do hash values and blocks work together to create the blockchain?"

# 7. Blockchain

[Anders.com](https://anders.com/blockchain/blockchain.html)

## Blockchain
## Blockchain Overview

\we'll discuss how hash values and blocks work together to create the blockchain. We'll also look at a few fundamental ideas about how a blockchain stays secure.

## Blockchain Demo
## Wrapping Up

We made it through the basics of blockchains. Great work! Having a better idea of how blocks and blockchains are formed is great, but it leaves us with one big question.

Where is all this information stored?!

The answer is interesting. It's stored across a network of users that all have their own copy of the blockchain. No one user owns the data, everyone has access, and anyone can participate.

That's pretty amazing! We'll go over more about how this works in the next section where we talk about Distributed Peer-to-peer networks.


# 8. Distributed Peer-to-Peer Network

## Distributed Peer-to-Peer Networks
## Distributed Peer-to-Peer Networks Overview
## Key Terms

> Peer-to-Peer Network: A network of computers that allows information to be shared across users.
> Distributed Network: A network that allows information to spread out across many users.

## Wrapping Up

Before becoming a part of the network, and eventually the blockchain, transactions are held in something known as a memory pool.


# 9. Memory Pool

## Memory Pool

The memory pool (also known as the mempool) is the waiting place for transactions before they enter the blockchain. 

## Memory Pool Overview
## Resources

- Blockchain.com
    - See [Unconfirmed Transactions](https://blockchain.info/unconfirmed-transactions)
    - Explore [Blockchain Data Charts](https://blockchain.info/charts)
- [Bitcoin Visuals](https://bitcoinvisuals.com/stats) - Another fun site to check bitcoin stats (e.g. fees, mempool, block speed, and hashrate)

## Problem:Mempool Transactions

Which of these are valid reasons a Transaction would leave the Mempool?

- [x] The transaction expired by timeout (by default 14 days after entering)
- [x] The transaction was at the bottom of the mempool (when sorted by fee per size), the mempool had reached its size limit, and a new higher-fee transaction was accepted, evicting the transaction at the bottom.
- [x] The transaction was included in a block.
- [x] The transaction or one of its unconfirmed ancestors conflicts with a transaction that was included in a block.

## Why Transactions Leave the Mempool
## Wrapping Up

The questions you might have at this point are...

- Who's making the decisions around here?
- Who is deciding when a transaction is valid or what data belongs in a block?

This is done using what's known as consensus. Consensus drives all of the decisions made to establish and grow the blockchain. In the next section, we'll go over what consensus is, and how it helps make decisions related to the blockchain.


# 10. Consensus

## Consensus

Consensus is how the blockchain makes decisions. Basically consensus is an idea, but the idea is implemented through many different algorithms. These algorithms are all different ways to try and achieve consensus more effectively. Things like proof of work, proof of stake, and DBFT are all consensus algorithms we'll discuss soon.

## Byzantine General's Problem

One big question in consensus is known as the **Byzantine General's problem**.


## Wrapping Up

The Byzantine General's problem solves many core issues around how members of a network can trust one another.

What it doesn't do is provide the specific system you would use to go about implementing this solution.

These implementations are done using consensus algorithms. In the next few sections we'll cover a few of these algorithms known as proof of work, proof of stake, and a few of others.

# 11. Proof of Work

## Proof of Work

The idea behind proof of work is that whoever puts in the most work to contribute to the system is the most trustworthy.

## Proof of Work Overview

Proof of work: System where information can be costly to produce, but easy to verify.

## Proof of Work Demonstration

leading 0의 갯수를 통해 난이도를 조절한다.
10분보다 빨리 생성되면 난이도 업. 10분보다 더걸리면 난이도 다운
논스값을 1, 2, 3 ... 시도해봄. 리딩 0이 원하는만큼 나올때까지

## Resources

https://anders.com/blockchain/block.html

## Problems with Proof of Work

proof of work was the first implementation of a blockchain consensus algorithm, originally used by Bitcoin. Like most first attempts, we are noticing some problems with it and some ways it can be improved.

2 Commonly Discussed Issues with PoW:

1. Extremely High-Energy Consumption
2. A Monopoly of miners leads to concern for Centralization

## Wrapping Up

Awesome work getting through this proof of work section!

As you saw, proof of work is an algorithm that helps solve many important issues around managing a distributed peer to peer network.

Proof of work does come with its problems, though. Other algorithms have been built to try and handle these problems more effectively. One of them, known as proof of stake, has it's own take on how to handle consensus. We'll be covering this algorithm in the next section.

# 12. Proof of Stake

## Proof of Stake

Proof of stake is another algorithm used to help achieve consensus on a blockchain. The key idea behind proof of stake is that it focuses on giving votes to members, depending on how much stake they have in the success of the chain.

This is different than proof of work and results in some interesting new ideas. We'll cover more about this algorithm throughout this section.

## Proof of Stake Overview

we'll cover what proof of stake is, how it works, and how blockchains utilize this algorithm to achieve consensus.

- How does it work?
- Potential Challenges
    - Nothing at stake problem
        - Slasher solution: Which entails penalizing validators if they simultaneously create blocks on multiple chains.
        - Punishes validators for creating blocks on the wrong chain.
- Who's Using it

## Resources

- [Ethereum](https://ethereum.org/)
- [Dash](https://www.dash.org/)
- [Lisk](https://lisk.io/)

## Key Terms

Proof of Stake: Algorithm that Seeks to achieve consensus by giving votes to those with stake in the system

## Wrapping Up

We went over what it is, how it works, and discussed a few platforms that have implemented this consensus algorithm in their platform.

This is a popular algorithm used to achieve consensus, but there are still others. Like we mentioned, there's a few more consensus models, one of which is known as Delegated Byzantine Fault Tolerance.

# 13. Delegated Byzantine Fault Tolerance

## Delegated Byzantine Fault Tolerance

Unlike proof of work or proof of stake, DBFT tries to achieve consensus by assigning roles to nodes to help coordinate consensus.

## DBFT Overview

we discuss what DBFT is, how it works, and what makes this a successful consensus algorithm.

- How does it work?
    - It has nodes that are split into ordinary nodes and consensus nodes.
    - Much faster than pow, pos
    - Requires less resources because there are no complicated cryptographic puzzles to solve.
    - It's resistant to forking.(At any given moment, there's only one version of truth.)
- Potential Challenges
    - In the first, let's assume  there's a dishonest speaker. There's always a chance that the speaker who is randomly selected from the delegates could be dishonest or malfunction, and if this occurs, the network needs to rely on honest delegates to vote the proposed block down so it doesn't reach the two-thirds avvroval rate. Since users of the protocol vote on delegates and the speaker is randomly selected from the group of delegates, It's up to the users to find out which delegates are trustworthy and vote them into power.
    - second scinario. It is up to users who vote on delegates to do their due deligence to only vote honest delegates into power so that dishonest delegates are in  the minority. If a minority of delegates are dishonest, the honest majority can vote the block down and the block will make into the blockchain. To help with this, some blockchain platforms release data about the honesty and functioning of each delegate for voters to review.
- Who's Using it
    - Neo

## Key Terms

Delegated Byzantine Fault Tolerance: Consensus algorithm based on assigning roles to nodes to help coordinate consensus.

## Wrapping Up

These are some of the major consensus algorithms, but it isn't all of them. We won't go over any more consensus algorithms in detail, but it's helpful to know some others that exist.

# 14. Other Consensus Models

## Other Consensus Algorithms

A big part of being a successful blockchain developer is taking initiative on staying up to date with the most current tools and ideas.

## Resources

Consensus Protocols to consider (some we did not cover):

### Proof of Work

- [Bitcoin’s whitepaper on PoW](https://bitcoin.org/bitcoin.pdf)

### Proof of Stake

- [Ethereum’s Proof of Stake FAQs](https://github.com/ethereum/wiki/wiki/Proof-of-Stake-FAQ)
    - [Block Selection methods](https://en.wikipedia.org/wiki/Proof-of-stake)
        - Randomized block selection
        - Coin age-based selection
- [Alternative Proof of Stake Methods](https://dailyfintech.com/2016/01/20/why-proof-of-stake-matters-for-blockchain/#content-wrapper)
    - Transparent Forging
    - Delegated Proof of Stake

### Delegated Byzantine Fault Tolerance

- [NEO's Consensus Protocol](https://steemit.com/neo/@basiccrypto/neo-s-consensus-protocol-how-delegated-byzantine-fault-tolerance-works)

### Proof of Activity

- [Proof of Activity Explained: A Hybrid Consensus Algorithm](https://www.coinbureau.com/blockchain/proof-of-activity-explained-hybrid-consensus-algorithm/) Proof of Burn
- [What is Proof of Burn?](https://99bitcoins.com/what-is-proof-of-burn/) Proof of Elapsed Time
- [What is Proof of Elapsed Time?](https://nulltx.com/what-is-proof-of-elapsed-time/) Proof of Capacity

# 15. Recap of Achieving Consensus Protocols

## Byzantine Generals’ Problem

As we saw in the Byzantines’ General Problem, this challenge has been around for a while - achieving consensus in a distributed system with suboptimal communication between participants who do not necessarily trust each other isn’t new.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/June/5b36958c_1301-recapof-achieving-consensus-protocols01-v2/1301-recapof-achieving-consensus-protocols01-v2.png)

## Proof of Work (PoW)

Bitcoin figured out how to use the Proof of Work algorithm to solve this issue.

The main innovation that Satoshi Nakamoto introduced in Bitcoin’s white paper is using proof of work (POW) to achieve consensus without a central authority and solve the double-spend problem.

### How Does It Work?

PoW involves miner nodes, or miners, to solve a math puzzle that requires a lot of computation power. Whichever miner is able to solve the puzzle the fastest is able to add a block of transactions to the blockchain, and in return, they are paid the transaction fees from all the transactions included in the block as well as paid by the network with bitcoins that were newly created upon the “mining” of the block.

### Potential Issues

2 Commonly discussed issues with Proof of Work are:

1. Extremely High-Energy Consumption
2. A Monopoloy of Miners which Leads to a Concern for System Centralizations

## Proof of Stake

In the Proof-of-Stake Consensus Protocol, there are no more miners; instead, there are Validators. These validators, or stakeholders, determine which block makes it onto the blockchain. In order to validate transactions and create blocks, validators put up their own coins as “stake”. Think of it as placing a bet - if they validate a fraudulent transaction, they lose their holdings as well as their rights to participate as a validator in the future. In theory, this check incentivizes the system to validate only truthful transactions.

### Potential Issues

We discussed the “Nothing At Stake” problem in which a bad acting Validator places bets on multiple forks so they theoretically always win out in the end.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/June/5b369596_1302-recapof-achieving-consensus-protocols01-v2/1302-recapof-achieving-consensus-protocols01-v2.png)

### Proposed Solutions

Slasher Strategy which entails penalizing validators if they simultaneously create blocks on multiple chains.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/June/5b3695a3_1303-recapof-achieving-consensus-protocols01-v2/1303-recapof-achieving-consensus-protocols01-v2.png)

Additionally there’s the Punisher Strategy which simply punishes validators for creating blocks on the wrong chain. In this method, Validators will be motivated to be selective and conscious about the blockchain in which they put their stake.

![](https://s3.amazonaws.com/video.udacity-data.com/topher/2018/June/5b369614_1109-proof-of-stake01-v2/1109-proof-of-stake01-v2.png)

### Who’s Using It?

Ethereum, DASH, and LISK are big proponents

## Delegated Byzantine Fault Tolerance (dBFT)

dBFT uses a system similar to a democracy where Ordinary Nodes the system vote on representative Delegate Nodes to decide which blocks should be added to the blockchain. When it’s time to add a block, a Speaker is randomly assigned from the group of Delegates to create a new block and propose the new block. 66.66% of delegates need to approve on the block for it to pass.

### Potential Issues

Two issues we explored were the case of the Dishonest Speaker and the Dishonest Delegate.

#### Dishonest Speaker

There is always a chance the Speaker, who is randomly selected from the Delegates, could be dishonest or malfunction. In this situation, the network needs to rely on honest delegates to vote the proposed block down so it doesn’t reach 66% approval. It is up to users of protocol who vote on Delegates, to find out which delegates are not trustworthy and vote on other delegates that are truthful.

#### Dishonest Delegate

In this case, the chosen Speaker is honest but there are Dishonest Delegates in the system meaning even if they receive a proposal for new block that is faulty, they can say it is valid. If it is a minority of delegates that are dishonest, the block will not make it and new speaker is elected.

### Who’s Using It?

NEO is a big advocator of this protocol.

## In Conclusion

While, Proof of Work and Proof of Stake are definitely the more popular choices, there are newer mechanisms coming up and proving themselves.

Remember that a consensus algorithm gets its reputation from being safe for a long period of time.

There is no “perfect” consensus mechanism, and chances are that there never will be, but it is interesting to see newer cryptocurrencies coming out with their own protocols and important to understand their pros and cons.

# 16. Interview: Blockchain Fundamentals
# 17. Lesson Recap

질문
- 모든 노드들이 모든 동일한 멤풀을 가지는건가?
- 이것도 네트워크처럼 공유되나?



- Does every nodes have mempool?
- If it is true, Are the transactions in each mempools the same? Does every nodes shares mempool like distributed ledger?
