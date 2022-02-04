let bsv = require('E:/BSV_Practice/Chapter2.2/node_modules/bsv');

console.log(Buffer.from('Bitcoin is a global public blockchain'))
var hash = bsv.Hash.sha256Ripemd160(Buffer.from('Bitcoin is a global public blockchain'))
console.log(hash1.toString('hex'))

console.log(Buffer.from('Bitcoin is a global public blockchain'))
var hash1 = bsv.Hash.sha256(Buffer.from('Bitcoin is a global public blockchain'))
console.log(hash1.toString('hex'))


var string = "my random string"
var base58 = bsv.Base58.fromBuffer(Buffer.from(string)).toString()
console.log(base58)
var base58Check = bsv.Base58Check.fromBuffer(Buffer.from(string)).toString()
console.log(base58Check)

var base58 = 'EX4GGfMqowb3SahgwQS6bg'

var buf = bsv.Base58.fromString(base58).toBuffer()
console.log(buf.toString())

var base58check = '2XTb6Gp8zqqq1g5ED7YDsUXom9an'
var buf = bsv.Base58Check.fromString(base58check).toBuffer()
console.log(buf.toString())