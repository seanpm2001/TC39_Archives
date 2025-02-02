// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.2_A4_T5;
 * @section: 11.5.2;
 * @assertion: The result of division is determined by the specification of IEEE 754 arithmetics; 
 * @description: Division of an infinity by a finite non-zero value results in a signed infinity;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.2_A4_T5",

path: "11.5.2",

description: "Division of an infinity by a finite non-zero value results in a signed infinity",

test: function testcase() {
   //CHECK#1
if (Number.NEGATIVE_INFINITY / 1 !== Number.NEGATIVE_INFINITY) {
  $ERROR('#1: -Infinity / 1 === -Infinity. Actual: ' + (-Infinity / 1));
}

//CHECK#2
if (Number.NEGATIVE_INFINITY / -1 !== Number.POSITIVE_INFINITY) {
  $ERROR('#2: -Infinity / -1 === Infinity. Actual: ' + (-Infinity / -1));
}

//CHECK#3
if (Number.POSITIVE_INFINITY / 1 !== Number.POSITIVE_INFINITY) {
  $ERROR('#3: Infinity / 1 === Infinity. Actual: ' + (Infinity / 1));
}

//CHECK#4
if (Number.POSITIVE_INFINITY / -1 !== Number.NEGATIVE_INFINITY) {
  $ERROR('#4: Infinity / -1 === -Infinity. Actual: ' + (Infinity / -1));
}

//CHECK#5
if (Number.POSITIVE_INFINITY / -Number.MAX_VALUE !== Number.NEGATIVE_INFINITY) {
  $ERROR('#5: Infinity / -Number.MAX_VALUE === -Infinity. Actual: ' + (Infinity / -Number.MAX_VALUE));
}

//CHECK#6
if (Number.NEGATIVE_INFINITY / Number.MIN_VALUE !== Number.NEGATIVE_INFINITY) {
  $ERROR('#6: -Infinity / Number.MIN_VALUE === -Infinity. Actual: ' + (-Infinity / Number.MIN_VALUE));
}

 }
});

