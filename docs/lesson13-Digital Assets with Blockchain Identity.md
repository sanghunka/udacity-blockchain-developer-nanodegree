# 1. Lesson Overview

## Lesson Goals

Throughout this lesson, you worked with digital assets programmatically using your terminal and javascript. This is meant to help prepare you for the next project where you will utilize these skills in your own private blockchain.

### Digital Assets

- Discuss what digital assets are and how they are related to the blockchain

### Encode/Decode Data

- Learn to explain the purpose that encoding, decoding, and what this purpose this serves for digital
- Generate raw data from different types of digital assets from the terminal
- Learn to generate raw data from different types of digital assets using Javascript

### Proof of Existence

- Learn a new concept "proof of existence" and see one way this is implemented using an online service known as poex

### Secure Assets Using Your Digital Identity

- Understand how a identity can be used to secure digital assets and why this is helpful

### Blockchain Generations

- Discuss digital asset management and how it fits into the overall scheme of blockchain generations

# 2. Digital Assets

## Digital Assets

Welcome to this section on digital assets! In this section we'll go over some of the basic ideas behind digital assets like what they are, why they're important, and how they are related to the blockchain. The goal is to help get you prepared to work with digital assets for yourself using your own private blockchain.

## Digital Assets Overview
## Key Terms

- Digital Asset - Digitally stored content or online account owned by an individual

## Resources

- [gif](https://techterms.com/definition/gif)
- [jpg](https://techterms.com/definition/jpeg)
- [mp3](https://techterms.com/definition/mp3)

## Wrap Up

# 3. Encode and Decode Basics

## Encoding and Decoding

The goal is to set you up for the next section where you'll start to encode and decode text and images for yourself.

## Encoding and Decoding Basics
## Key Terms

- Encode - Process of putting a sequence of characters into a specialized format for efficient transmission or storage
- Decode - Takes encoded, raw, unreadable files and converts them back into human readable format

## Types of Encoding and Decoding
## Key Terms

- ASCII - American Standard Code for Information Interchange
- Hexadecimal - More concise and human readable representation of binary
- Base64 - Encoding scheme meant to represent data as numbers in a string format

## Resources

ASCII
- [How numbers are encoded as character is ASCII](http://www.asciitable.com/)
- [Text to ASCII Converter](http://www.unit-conversion.info/texttools/ascii/)
- [ASCII Wiki](https://en.wikipedia.org/wiki/ASCII)

Hexadecimal
- [How do HEX color codes work?](https://www.youtube.com/watch?v=c56x1aj2CPA)
- [Text to Hex Converter](http://www.convertstring.com/EncodeDecode/HexEncode)
- [Hexadecimal Wiki](https://en.wikipedia.org/wiki/Hexadecimal)

Base64
- [Base64 Encoding](https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding)
- [Text to Base64 Converter](https://www.base64encode.org/)
- [Base64 Wiki](https://en.wikipedia.org/wiki/Base64)

## Wrap Up

# 4. Encode and Decode from Terminal

## Encode and Decode Demonstration
## Encode and Decode Information from the Terminal

- Encode and decode text within the terminal
- Encode and decode text files from the terminal
- Encode and decode image files from the terminal

### Encode and Decode Text from Terminal

- String to hex: `xxd -p <<< "Blockchain Developer"`
- Hex to string: `echo 426c6f636b636861696e20446576656c6f7065720a|xxd -r -p`

### Encode and Decode Text from Terminal Using Files

- Create file: `touch hello.txt`
- Add text to file
- String to Hex: `xxd -p hello.txt helloEncoded.txt`
- Hex to String: `xxd -p -r helloEncoded.txt helloDecoded.txt`

### Encode and Decode Image from Terminal Using Files

- Find image file and place in directory
- Image to Hex: `xxd -p cat.png cat.txt`
- Hex to Image: `xxd -p -r cat.txt catDecoded.png`

## Wrap Up

Congratulations, you can now encode and decode both text and images. That's a great start! Remember that the goal here is to get this type of functionality to help support our blockchain application. To do that, we'll first need to do this in node.js. That's what we'll work on next!

# 5. Encode and Decode with Node.js

## Encoding and Decoding Image Data with Node.js

In this section we'll focus on the same ideas of encoding and decoding digital assets using node.js rather than the terminal. This will allow us to work with this functionality in a way that we can integrate with our private blockchain.

Once we have this we’ll use a similar method to add this type of data onto a block on our blockchain. To do that we’ll need to get a digital asset, write a few lines of javascript, then look at the output to see our encoded asset.

## Encode and Decode an Image

For this demonstration, we’ll focus on converting an image into hex. You can use any image you'd like, but here’s a look at the image we’ll use, named test-pattern.jpg.

![](../exercise/encoding-and-decoding/test-pattern.jpg)

Note: If you use a different image, either rename the file test-pattern.jpg or update the code to match whatever file name you prefer.

## Getting Started

To start, open up your code editor, create a project directory, and create a file named img2hex.js.

- Step 1: Get access to the file system.
- Step 2: Read the image file.
- Step 3: Encode the image as hex.
- Step 4: Output the encoded data to the console.

## Code Structure

To get started, you can paste the comments from below to help guide you. Down below, we'll give the solution to this. Feel free to get started on your own if you'd like, or follow along with us as we encode and decode this image!

```js
// Require file system access

// Read file buffer 

// Encode image buffer to hex

// Output encoded data to console
```

## Encode the Image

```js
// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('test-pattern.jpg');


// Encode image buffer to hex
imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

// Output encoded data to console
console.log(imgHexEncode);
```

## Decode the Image
## Code Strutcture

```js
// Decode hex

// Save decoded file file system 
```

## Decode the Image

```js
// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);

```

## Wrap Up

# 6. Proof of Existence

## Proof of Existence
## Poex.io Demo

- Step 1. Digital asset is hashed via sha256
- Step 2. That hash is appended to an identifier (i.e. 0x444f4...)
- Step 3. The hash + identifier is put into a generated Transaction.
- Step 4. The Tx is marked with OP_RETURN so it's unspendable

## Methods of POE

We just saw how to use a pre-created notarization service. What’s really cool is that it’s possible for anyone, including us, to create a web application that verifies the existence of digital assets this same way.

For example, there are other services in the space such as Factom, OriginTimestamp, and Florincoin. Feel free to check some of these out!

Proof of Existence Services 

-[Factom](http://factom.org/)
-[Origin Timestamp](http://www.originstamp.org/)
-[Floricoin](http://florincoin.org/)

## Why do we need POE

Before trying to use this for ourselves, here’s a few quick ideas over why you might even want to to do this in the first place.

Helps you demonstrate data ownership without revealing actual data.
- This is useful for things like copyrighted material or patents.

Checks for the integrity of your digital asset. Any proof of existence will recognize your document FOREVER.
- Even the slightest difference will be recognized allowing you to be sure your asset hasn’t changed.

Provides document Time stamping. You can use this to prove certain information existed at a certain time.
- This can be useful in cases where you want to prove who was the original owner of the document.

Certifies the existence of the document without the need for a central authority.
- Similar to many blockchain concepts this decentralized proof can’t be erased or modified by anyone.

## POE Algorithms

There are a different of algorithms to demonstrate Proof of Existence. The two we have chosen to focus on here are SHA256 and MD5.

They both serve the same purpose. They’re a way to hash a digital asset so it can be embedded in a transaction in the blockchain. This allows people to verify that a document existed at a certain point in time.

### SHA256

This is an algorithm we’ve seen already in several different parts of the Bitcoin network. It’s used in mining as part of the proof of work algorithm.

It’s also used to create secured bitcoin addresses.

SHA256 stands for Secure Hash Algorithm. It is a one-way hashing function that takes in any piece of data and produces a unique hash.

This is the algorithm POEX uses to secure their digital documents.

### MD5

Next, the MD5 algorithm is a hash function that takes in a String input and produces a 128-bit hash value. This value is usually shown as a 32-character hexadecimal number that humans can read.\

### Goals of POE Algorithm

While each method does things a bit differently, the important thing to remember is their purpose.

They hash digital assets to hide the actual content. Once the hashed data is embedded in a transaction in the blockchain, the existence of that transaction in the blockchain proves that the document existed at the time the transaction got included into a block.

## Wrap Up

- Proof of Existence: The concept (and a service) that publicly proving and authenticating any digital asset on the blockchain by verifying its hash.
- We saw a demo using the POEX online document notarization service.
- Lastly, we discussed different algorithms commonly used for proof of existence such as SHA256 and MD5.

# 7. Securing Assets Using Your Digital Identity

Topics

- Secure assets with a digital identity
- Ownership of digital assets
- Proof of Existence

**Secure an Asset**
Protect the resource (asset) from wrongful access or alteration

# 8. Blockchain Generations

## Lesson Goals

Throughout this lesson, you worked with digital assets programmatically using your terminal and javascript. This is meant to help prepare you for the next project where you will utilize these skills in your own private blockchain.

- Digital Assets
    -  Discuss what digital assets are and how they are related to the blockchain.
- Encode/Decode Data
    -  Explain the purpose that encoding, decoding, and what this purpose this serves for digital assets.
    - Generate raw data from different types of digital assets from the terminal.
    - Learn to generate raw data from different types of digital assets using Javascript
- Proof of Existence
    - Learn a new concept "proof of existence" and see one way this is implemented using an online service known as poex.
- Secure Assets Using Your Digital Identity
    - Understand how a identity can be used to secure digital assets and why this is helpful.
- Blockchain Generations
    - Discuss digital asset management and how it fits into the overall scheme of blockchain generations.

# 9. Lesson Recap