//ECDSA, Signing and Verification
const bsv=require('E:/BSV_Practice/Chapter1.2/node_modules/bsv')
var privKey = new bsv.PrivKey().fromRandom()
var pubKey = new bsv.PubKey().fromPrivKey(privKey)
var data = 'my sample data'

var keyPair = new bsv.KeyPair().fromPrivKey(privKey)
console.log(keyPair)
var hash = bsv.Hash.sha256(Buffer.from(data))
console.log(hash.toString('hex'))
var sig = bsv.Ecdsa.sign(hash, keyPair)
console.log(sig.toString())
console.log(sig.r.toString())
console.log(sig.s.toString())

// //Verification is also done in the same manner
var verified = bsv.Ecdsa.verify(hash, sig, pubKey)
console.log(verified)
// // Displays: true

// // using an incorrect public key to the verification process will generate a false for verification
var verified1 = bsv.Ecdsa.verify(hash, sig, bsv.PrivKey.fromRandom().pubKey)
console.log(verified1)
// Displays: false

//_____________________________________________________________________________________________________

var privKey = new bsv.PrivKey().fromRandom()
var pubKey = new bsv.PubKey().fromPrivKey(privKey)
var keyPair = new bsv.KeyPair().fromPrivKey(privKey)
var address = bsv.Address.fromPubKey(pubKey)
var message = "message to be signed"
var messageBuf = Buffer.from('message') 
var sig = bsv.Bsm.sign(messageBuf, keyPair)

console.log(sig.toString())
// // Displays:
// // 'IMyRAWVMTaJm258MDghMYP3zenH3MKR71kFGIt0DzbiEMVeHc2CAvIRmqaaT9ZSX2DpzYIu3GnPzSS0XE2vNQpo='

var verify = bsv.Bsm.verify(messageBuf, sig, address)
console.log(verify)
// // Displays: true