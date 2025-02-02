// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.6_A4.3_T1;
 * @section: 7.6;
 * @assertion: Correct interpretation of DIGITS;
 * @description: Identifier is $+ANY_DIGIT;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.6_A4.3_T1",

path: "7.6",

description: "Identifier is $+ANY_DIGIT",

test: function testcase() {
   //CHECK#0-9
$\u0030 = 0;
if ($0 !== 0) {
  $ERROR('#0: $\\u0030 = 0; $0 === 0');
}
$\u0031 = 1;
if ($1 !== 1) {
  $ERROR('#1: $\\u0031 = 1; $1 === 1');
}
$\u0032 = 2;
if ($2 !== 2) {
  $ERROR('#2: $\\u0032 = 2; $2 === 2');
}
$\u0033 = 3;
if ($3 !== 3) {
  $ERROR('#3: $\\u0033 = 3; $3 === 3');
}
$\u0034 = 4;
if ($4 !== 4) {
  $ERROR('#4: $\\u0034 = 4; $4 === 4');
}
$\u0035 = 5;
if ($5 !== 5) {
  $ERROR('#5: $\\u0035 = 5; $5 === 5');
}
$\u0036 = 6;
if ($6 !== 6) {
  $ERROR('#6: $\\u0036 = 6; $6 === 6');
}
$\u0037 = 7;
if ($7 !== 7) {
  $ERROR('#7: $\\u0037 = 7; $7 === 7');
}
$\u0038 = 8;
if ($8 !== 8) {
  $ERROR('#8: $\\u0038 = 8; $8 === 8');
}
$\u0039 = 9;
if ($9 !== 9) {
  $ERROR('#9: $\\u0039 = 9; $9 === 9');
}

 }
});

