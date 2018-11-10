# 1.Lesson Introduction

### By the End of This Lesson...

You will ...

- Use MetaMask to interact with smart contract from the webpage
- Write Javascript tests for smart contracts
- Explore the purpose of Ethereum Improvement Protocols
- Use OpenZepplin to increase smart contract security
- Use Infura to easily deploy smart contracts on the Rinkeby Ethereum test network

# 2. Getting Started with MetaMask

## Getting Started with MetaMask

### Resources

- [MetaMask website](https://metamask.io/)
- [Remix](http://remix.ethereum.org/)
- [http-server](https://www.npmjs.com/package/http-server)

## Code

Summary of code changes made to the `index.html` file:

- Allow Metamask to inject its own web3.js object
- Modify function claimButtonClicked() to replace the logic of setting a default account by asking the web3 object what accounts are available and take the top one

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

            if(typeof web3 != 'undefined') { 
                web3 = new Web3(web3.currentProvider) // what Metamask injected 
            } else {
                // Instantiate and set Ganache as your provider
                web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
            }
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
                        "anonymous": false,
                        "inputs": [
                            {
                                "indexed": false,
                                "name": "owner",
                                "type": "address"
                            }
                        ],
                        "name": "starClaimed",
                        "type": "event"
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
            var starNotary = StarNotary.at('0x8040086095e9bc41535094bf03eae1f6178b5260');

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
                web3.eth.getAccounts(function(error, accounts) { 
                    if (error) { 
                        console.log(error)
                        return
                    }
                    var account = accounts[0]
                    starNotary.claimStar(function (error, result) {
                        if (!error) {
                            var starClaimedEvent = starNotary.starClaimed({from: account});
                            starClaimedEvent.watch(function(error, result) {
                                if (!error) {
                                    location.reload();
                                } else {
                                    console.log('watching for star claimed event is failing');
                                }
                            });
                        } else { 
                            console.log(error);
                        }
                    });

                })
            }
        </script>
    </body>
</html>
```

# 3. Unit tests in Javascript and Sollidity with Truffle

## Unit tests in Javascript and Solidity with Truffle

When developing software, testing is vital to ensure quality. In this concept, we will go over how to write basic unit tests using the Truffle test suite and write out some unit tests in our start notarization service as an example.

## Resources

- [Truffle Framework](https://truffleframework.com/)
- [Visual Studio Code](https://code.visualstudio.com/)
- [Solidity support for Visual Studio code](https://marketplace.visualstudio.com/items?itemName=JuanBlanco.solidity)

## Deploy the Contract

As shown in the video above, you can compile, migrate, and deploy this contract using the truffle framework. 

## Code

In the `StarNotaryTest.js` file

```js
const starDefinition = artifacts.require('StarNotary')

contract('StarNotary', accounts => { 
    var owner = accounts[0]
    var contractInstance 

    beforeEach(async function () { 
        contractInstance = await starDefinition.new({from: owner})
    })

    describe('StaryNotary basics', () => { 
        it('has correct name', async function () { 
            assert.equal(await contractInstance.starName(), 'Awesome Udacity Star')
        })

        it('can be claimed', async function () { 
            assert.equal(await contractInstance.starOwner(), 0)
            await contractInstance.claimStar({from: owner})
            assert.equal(await contractInstance.starOwner(), owner)
        })
    })

    describe('Star can change owners', () => { 
        beforeEach(async function () { 
            assert.equal(await contractInstance.starOwner(), 0)
            await contractInstance.claimStar({from: owner})
        })

        it('can be claimed by a second user', async function () {
            var secondUser = accounts[1]
            await contractInstance.claimStar({from: secondUser})

            assert.equal(await contractInstance.starOwner(), secondUser)
        })
    })
})
```


# 4. Ethereum Inprovement Proposals..
# 5. Star Notary as ERC-721
# 6. Transform Star Notary into a Non-F
# 7. Getting Started with OpenZeppelin
# 8. Infura
# 9. Lesson Recap