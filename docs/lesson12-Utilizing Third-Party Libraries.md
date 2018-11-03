# 1. Lesson Overview

## Lesson Overview
### Lesson Topics

- How to discover and use common third-party libraries
- Use Bitcoin Core as an example to discover third-party libraries to assist with RPC functions we’ve seen before
- Discuss the discuss the risks and precautions of working with third-party libraries and wallets (or anything that stores value)

# 2. Third-Party Libraries with Bitcoin Core

- Common Third-Party Libraries
- Considerations When Choosing a library

Benefits of Third-Party Libraries
- Don't need to recreate code solutions
- Take advantage of vetted code
- Makes our code cleaner and more efficient

Considerations When Choosing a library
- how often update?
- security?

## Resources

- [bitcoin-core npm package](https://www.npmjs.com/package/bitcoin-core)
- [ethereumjs-util npm package](https://www.npmjs.com/package/ethereumjs-util)
- [general query for blockchain npm packages](https://www.npmjs.com/search?q=keywords:blockchain)

## bitcoin-core Example

Example: VerifyMessage RPC function using bitcoin-core Node.js.

```js
const bitcoin = require('bitcoin');

// Bitcoin-core: verifyMessage
function verifyMessage(walletAddress, signature, message){
 response = 'false';
 const client = new bitcoin.Client({
   host: 'localhost',
   port: 8332,
   user: 'user',
   pass: 'password!'
 });
 client.cmd('verifymessage', walletAddress, signature, message, function(err, result, resHeaders) {
   if (err) {
     // console.log(err);
     return console.log("Incorrect submission");
   }
   if (result===true) {
     console.log('Validation passed');
   }  
   console.log(' Validation: ', result);
   response = result;
 })
};
```

## Join the Third-Party Library Party

Not only will this help you sharpen your skills to discover useful, healthy, and well-maintained third-party libraries, it could save you some time down the road if you ever want to develop for these platforms.

# 3. Security - Third-Party Libraries and MultiSig

Libraries and MultiSig

- Best Practices Working with Third-Party Libraries
- MultiSig Wallets

Best Practices Working with Third-Party Libraries

- Use Well-Tested Libraries
- Thoroughly Examine the Documentation
- Focus on Scalable Libraries
- Check Security

MultiSig Wallet

- A wallet that requires more than one key to authorize a transaction. Also known as a Multisignature wallet.
- The m-of-n scheme means that the wallet is associated with n keys and each time a transaction needs to be broadcast, m of those n keys need to sign it.
- real world examples: Husband and wife joint bank account.
- Used in Smart contracts in networks such as Tumblebit, Coinswap and Lightning Network.

# 4. Lesson Summary

## What you learned

- Discovered and used common third-party libraries
    - Remember the best practices when finding your own third-party libraries
- Used Bitcoin Core as an example to discover third-party libraries to assist with RPC functions we’ve seen before
    - bitcoin-core and ethereumjs-util
- Discussed the risks and precautions of working with third-party libraries and wallets (or anything that stores value)
    - Multisig wallets that use an M-of-N transaction sheme

## What's next?

Moving forward, you'll pull together all the steps - web service planning, learning about frameworks, and implementing third-party libraries - as you configure an API web service with GET/POST endpoints that migrate over your private blockchain.