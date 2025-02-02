// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A3.3_T3;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: DecimalIntegerLiteral. ExponentPart;
 * @description: ExponentPart :: e -DecimalDigits;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A3.3_T3",

path: "7.8.3",

description: "ExponentPart :: e -DecimalDigits",

test: function testcase() {
   //CHECK#0
if (0.e-1 !== 0) {
  $ERROR('#0: 0.e-1 === 0');
}

//CHECK#1
if (1.e-1 !== 0.1) {
  $ERROR('#1: 1.e-1 === 0.1');
}

//CHECK#2
if (2.e-1 !== 0.2) {
  $ERROR('#2: 2.e-1 === 0.2');
}

//CHECK#3
if (3.e-1 !== 0.3) {
  $ERROR('#3: 3.e-1 === 0.3');
}

//CHECK#4
if (4.e-1 !== 0.4) {
  $ERROR('#4: 4.e-1 === 0.4');
}

//CHECK#5
if (5.e-1 !== 0.5) {
  $ERROR('#5: 5.e-1 === 0.5');
}

//CHECK#6
if (6.e-1 !== 0.6) {
  $ERROR('#6: 6.e-1 === 0.6');
}

//CHECK#7
if (7.e-1 !== 0.7) {
  $ERROR('#7: 7.e-1 === 0.7');
}

//CHECK#8
if (8.e-1 !== 0.8) {
  $ERROR('#8: 8.e-1 === 0.8');
}

//CHECK#9
if (9.e-1 !== 0.9) {
  $ERROR('#9: 9.e-1 === 0.9');
}

 }
});

