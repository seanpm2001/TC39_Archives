// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.2_A4_T2;
 * @section: 11.5.2;
 * @assertion: The result of division is determined by the specification of IEEE 754 arithmetics; 
 * @description: The sign of the result is positive if both operands have the same sign, negative if the operands have different signs;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.2_A4_T2",

path: "11.5.2",

description: "The sign of the result is positive if both operands have the same sign, negative if the operands have different signs",

test: function testcase() {
   //CHECK#1
if (1 / 1 !== 1) {
  $ERROR('#1: 1 / 1 === 1. Actual: ' + (1 / 1));
}

//CHECK#2
if (1 / -1 !== -1) {
  $ERROR('#2: 1 / -1 === -1. Actual: ' + (1 / -1));
}

//CHECK#3
if (-1 / 1 !== -1) {
  $ERROR('#3: -1 / 1 === -1. Actual: ' + (-1 / 1));
}

//CHECK#4
if (-1 / -1 !== 1) {
  $ERROR('#4: -1 / -1 === 1. Actual: ' + (-1 / -1));
}

 }
});

