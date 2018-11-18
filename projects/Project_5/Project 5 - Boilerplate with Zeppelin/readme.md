# Project 5: Decentralized Star Notary Project

For this project, you will create a DApp by adding functionality to your smart contract and deploy it on the public testnet. To do so, you'll employ your blockchain identity to secure digital assets on the Ethereum platform using a smart contract. You will get to practice your knowledge of the basics of Solidity.

## Key Information

- Contract hash
    - [0x6976dd58540ae829b2bf0112464316a47dae0deca92c7eed5dd9ac9d74abc729](https://rinkeby.etherscan.io/tx/0x6976dd58540ae829b2bf0112464316a47dae0deca92c7eed5dd9ac9d74abc729)
- Contract address
    - [0xd12D43Ef7440a56Ba18642823D10f7df1956D268](https://rinkeby.etherscan.io/address/0xd12D43Ef7440a56Ba18642823D10f7df1956D268)
- createStar() transaction hashes
    - 1st star: [0x9e05bc9b93871078f27870e29c87081370133a7e1a3fb6ab77f94d6db9571bee](https://rinkeby.etherscan.io/tx/0x9e05bc9b93871078f27870e29c87081370133a7e1a3fb6ab77f94d6db9571bee)
    - 2nd star: [0x043f25465f694e5a0af8fad95cdc530120462330092551fed8b696c464476412](https://rinkeby.etherscan.io/tx/0x043f25465f694e5a0af8fad95cdc530120462330092551fed8b696c464476412)
    - 3rd star: [0xe4fc1da55f76ea2d9d661814f9e4df2ecd53f25122bd76bc2cb6a5a049ca63fb](https://rinkeby.etherscan.io/tx/0xe4fc1da55f76ea2d9d661814f9e4df2ecd53f25122bd76bc2cb6a5a049ca63fb)
- Star tokenId
    - 1,2,3
- putStarUpForSale() transaction hashes
    - 1st star: [0xeb3f33444a5af42352d08938ad44e27b466528ec01ce1bbab4bb40fcbbd2a726](https://rinkeby.etherscan.io/tx/0xeb3f33444a5af42352d08938ad44e27b466528ec01ce1bbab4bb40fcbbd2a726)
    - 2nd star: [0x578b6631bff57b61fc9936baed3e8f63b747c9c086598eaecb94af501d6309fc](https://rinkeby.etherscan.io/tx/0x578b6631bff57b61fc9936baed3e8f63b747c9c086598eaecb94af501d6309fc)
    - 3rd star is not for sale to compare

## Getting Started

### Development Environment

- macOS Mojave 10.14
- Visual Studio Code 1.28.2
- node 11.0.0
- metamask

### Prerequisites

This project requires [NodeJS](https://nodejs.org/)

#### node Package dependencies

- "openzeppelin-solidity": "2.0.0-rc.1",
- "truffle-hdwallet-provider": "0.0.6"

### Installing

In the project's root directory,

```
npm install --save
```

## Migration

`truffle migrate --network rinkeby --reset --compile-all`

## Built With

- [NodeJS](https://nodejs.org/)
- Metamask
- Openzeppelin

## Authors

* **Sanghun Kang** - *Initial work*