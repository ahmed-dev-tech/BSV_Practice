let bsv = require('E:/BSV_Practice/Chapter1.2/node_modules/bsv');

var privKey = new bsv.PrivKey().fromRandom()
//Starts from L or K 

// console.log(privKey.toString());
// console.log(privKey.toWif())

// console.log(privKey.bn.toString())


// console.log(privKey.compressed)

// var value = Buffer.from('Bitcoin is a Peer to Peer Electronic cash system');
// var hash = bsv.Hash.sha256(value);
// console.log("Hash value :",hash)
// var bn = bsv.Bn.fromBuffer(hash);
// console.log(bn);
// var pKey = bsv.PrivKey.fromBn(bn);
// console.log(pKey.toWif())
// let testPrivKey = bsv.PrivKey.Testnet.fromRandom()
// console.log(testPrivKey.toString())

//______________________________________________________________________________
const mnemonic = new bsv.Bip39().fromRandom().toString()
console.log(mnemonic.toString())
//const m ='pelican lizard hope silk exchange fall devote gun baby antique thank paddle'
//const seed = new bsv.Bip39().fromString(m).toSeed()
const seed = new bsv.Bip39().fromString(mnemonic).toSeed()
console.log(seed)
var hdPrivateKey = new bsv.Bip32().fromSeed(seed)
console.log(hdPrivateKey.toString())


var privKey = new bsv.PrivKey().fromRandom()
// console.log(privKey.toString())
var G = bsv.Point.getG()
var pubCal = G.mul(privKey.bn).toString()
var pubKey = new bsv.PubKey().fromPrivKey(new bsv.PrivKey().fromRandom())
//var pubKey = new bsv.PubKey().fromPrivKey(privKey)
console.log(pubKey.toString())
//console.log(pubKey.toBuffer().length)
//console.log(pubKey)
var pubk = new bsv.PubKey(pubKey.point,false)
console.log(pubk.toHex())


