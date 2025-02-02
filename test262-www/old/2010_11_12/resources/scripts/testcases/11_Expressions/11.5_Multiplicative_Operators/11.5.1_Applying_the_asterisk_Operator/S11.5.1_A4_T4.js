// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.1_A4_T4;
 * @section: 11.5.1;
 * @assertion: The result of a floating-point multiplication is governed by the rules of IEEE 754 double-precision arithmetics; 
 * @description: Multiplication of an infinity by an infinity results in an infinity of appropriate sign;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.1_A4_T4",

path: "11.5.1",

description: "Multiplication of an infinity by an infinity results in an infinity of appropriate sign",

test: function testcase() {
   //CHECK#1
if (Number.NEGATIVE_INFINITY * Number.NEGATIVE_INFINITY !== Number.POSITIVE_INFINITY) {
  $ERROR('#1: -Infinity * -Infinity === Infinity. Actual: ' + (-Infinity * -Infinity));
}

//CHECK#2
if (Number.POSITIVE_INFINITY * Number.POSITIVE_INFINITY !== Number.POSITIVE_INFINITY) {
  $ERROR('#2: Infinity * Infinity === Infinity. Actual: ' + (Infinity * Infinity));
}

//CHECK#3
if (Number.NEGATIVE_INFINITY * Number.POSITIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
  $ERROR('#3: -Infinity * Infinity === -Infinity. Actual: ' + (-Infinity * Infinity));
}

//CHECK#4
if (Number.POSITIVE_INFINITY * Number.NEGATIVE_INFINITY !== Number.NEGATIVE_INFINITY) {
  $ERROR('#4: Infinity * -Infinity === -Infinity. Actual: ' + (Infinity * -Infinity));
}

 }
});

