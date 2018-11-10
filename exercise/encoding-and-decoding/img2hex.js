// Require file system access
fs = require('fs');

// Read file buffer 
imgReadBuffer = fs.readFileSync('test-pattern.jpg');

console.log(imgReadBuffer); //added by me

// Encode image buffer to hex
imgHexEncode = new Buffer(imgReadBuffer).toString('hex');

// Output encoded data to console
// console.log(imgHexEncode);

// Decode hex
var imgHexDecode = new Buffer(imgHexEncode, 'hex');

console.log(imgHexDecode);//added by me

// Save decoded file file system 
fs.writeFileSync('decodedHexImage.jpg', imgHexDecode);
