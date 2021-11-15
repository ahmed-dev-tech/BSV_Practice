let bsv = require('bsv');
//Random number generator of 32 bits 
var hex = bsv.Random.getRandomBuffer(32)

console.log(hex.toString('hex'))

var bn = bsv.Bn.fromBuffer(hex)
console.log(bn.toString(16))
// console.log(bn)
// console.log("\nHex Conversion:"+bn.toString(16));

// console.log("\nDefault/Decimal Conversion of toString():"+bn.toString()); //10 is by default

// console.log("\nOctal Conversion:"+bn.toString(8));

// console.log("\nBinary Conversion:"+bn.toString(2));

//__________________________________________________________________________

let bx = bsv.Bn
// let bn1=bn.add(new bx(1)).toString(16)
// console.log("BN :"+bn1)

let n = bx(4)
let m = bx(5)

console.log(n.add(m))

// let BN = bsv.crypto.BN
// let n = BN.fromNumber(5)
// let m = BN.fromNumber(6)
// console.log(n.add(m))
