var bsv=require('E:/BSV_Practice/Chapter1.2/node_modules/bsv');
var G = bsv.Point.getG();
//console.log(G)
/*
x: <BN-R: 79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798>,
y: <BN-R: 483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8>,
*/
//console.log(G.mul(bsv.Bn('2')));
/* 
x: <BN-R: c6047f9441ed7d6d3045406e95c07cd85c778e4b8cef3ca7abac09b95c709ee5>,
y: <BN-R: 1ae168fea63dc339a3c58419466ceaeef7f632653266d0e1236431a950cfe52a>,
*/
var hex= bsv.Random.getRandomBuffer(32);
//console.log(hex)
var phex = bsv.Random.getRandomBuffer(32)
//console.log(phex)
var p = bsv.Bn.fromBuffer(Buffer.from(phex,hex));
//console.log(p.toString('hex'))

var P = G.mul(p)
// console.log(P)
// console.log(P.getX().toString('hex'))
// console.log(P.getY().toString('hex'))
//__________________________________________________________________________
// console.log(Buffer.from('Bitcoin is a global public blockchain'))
// var hash1 = bsv.Hash.sha256Ripemd160(Buffer.from('Bitcoin is a global public blockchain'))
// console.log(hash1.toString('hex'))


