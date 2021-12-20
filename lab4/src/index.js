const robin = require('./generator/robin');
const bignum = require('./bignum/bignum');

const min128 = bignum().minForDischarge(128);
const max128 = bignum().maxForDischarge(128);

const primeNum1 = robin(min128, max128);
const primeNum2 = robin(min128, max128);

console.log('First prime number with discharge 32: ' + primeNum1);
console.log('Second prime number with discharge 32: ' + primeNum2);
