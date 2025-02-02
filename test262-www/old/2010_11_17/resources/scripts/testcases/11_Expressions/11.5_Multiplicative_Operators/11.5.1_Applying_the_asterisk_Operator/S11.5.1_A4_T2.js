// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.1_A4_T2;
 * @section: 11.5.1;
 * @assertion: The result of a floating-point multiplication is governed by the rules of IEEE 754 double-precision arithmetics; 
 * @description: The sign of the result is positive if both operands have the same sign, negative if the operands have different signs;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.1_A4_T2",

path: "11.5.1",

description: "The sign of the result is positive if both operands have the same sign, negative if the operands have different signs",

test: function testcase() {
   //CHECK#1
if (1 * 1 !== 1) {
  $ERROR('#1: 1 * 1 === 1. Actual: ' + (1 * 1));
}

//CHECK#2
if (1 * -1 !== -1) {
  $ERROR('#2: 1 * -1 === -1. Actual: ' + (1 * -1));
}

//CHECK#3
if (-1 * 1 !== -1) {
  $ERROR('#3: -1 * 1 === -1. Actual: ' + (-1 * 1));
}

//CHECK#4
if (-1 * -1 !== 1) {
  $ERROR('#4: -1 * -1 === 1. Actual: ' + (-1 * -1));
}

//CHECK#5
if (0 * 0 !== 0) {
  $ERROR('#5.1: 0 * 0 === 0. Actual: ' + (0 * 0));
} else {
  if (1 / (0 * 0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#5.2: 0 * 0 === + 0. Actual: -0');
  }
}

//CHECK#6
if (0 * -0 !== -0) {
  $ERROR('#6.1: 0 * -0 === 0. Actual: ' + (0 * -0));
} else {
  if (1 / (0 * -0) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#6.2: 0 * -0 === - 0. Actual: +0');
  }
}

//CHECK#7
if (-0 * 0 !== -0) {
  $ERROR('#7.1: -0 * 0 === 0. Actual: ' + (-0 * 0));
} else {
  if (1 / (-0 * 0) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#7.2: -0 * 0 === - 0. Actual: +0');
  }
}

//CHECK#8
if (-0 * -0 !== 0) {
  $ERROR('#8.1: -0 * -0 === 0. Actual: ' + (-0 * -0));
} else {
  if (1 / (-0 * -0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#8.2: 0 * -0 === - 0. Actual: +0');
  }
}

 }
});

