const robin = require('./generator/robin');
const bignum = require('./bignum/bignum');
const IDEA = require('./idea/idea');
const fs = require('fs');

const min128 = bignum().minForDischarge(128);
const max128 = bignum().maxForDischarge(128);

const closedKey = robin(min128, max128);
const publicKey = robin(min128, max128);

console.log(closedKey);
console.log(publicKey);

const cipher = new IDEA(publicKey);

const input = fs.readFileSync(__dirname + '/input.txt');
const encrypted = cipher.encrypt(closedKey, input);

fs.writeFileSync(__dirname + '/close.txt', encrypted);
const closed = fs.readFileSync(__dirname + '/close.txt');

const decrypted = cipher.decrypt(closed);
fs.writeFileSync(__dirname + '/open.txt', decrypted);
