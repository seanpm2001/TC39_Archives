// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.3_A4_T2;
 * @section: 11.5.3;
 * @assertion: The result of a ECMAScript floating-point remainder operation is determined by the rules of IEEE arithmetics; 
 * @description: The sign of the finite non-zero value result equals the sign of the divided;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.3_A4_T2",

path: "11.5.3",

description: "The sign of the finite non-zero value result equals the sign of the divided",

test: function testcase() {
   //CHECK#1
if (1 % 1 !== 0) {
  $ERROR('#1.1: 1 % 1 === 0. Actual: ' + (1 % 1));
} else {
  if (1 / (1 % 1) !== Number.POSITIVE_INFINITY) {
    $ERROR('#1.2: 1 % 1 === + 0. Actual: -0');
  }
}

//CHECK#2
if (-1 % -1 !== -0) {
  $ERROR('#2.1: -1 % -1 === 0. Actual: ' + (-1 % -1));
} else {
  if (1 / (-1 % -1) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#2.2: -1 % -1 === - 0. Actual: +0');
  }
}

//CHECK#3
if (-1 % 1 !== -0) {
  $ERROR('#3.1: -1 % 1 === 0. Actual: ' + (-1 % 1));
} else {
  if (1 / (-1 % 1) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#3.2: -1 % 1 === - 0. Actual: +0');
  }
}

//CHECK#4
if (1 % -1 !== 0) {
  $ERROR('#4.1: 1 % -1 === 0. Actual: ' + (1 % -1));
} else {
  if (1 / (1 % -1) !== Number.POSITIVE_INFINITY) {
    $ERROR('#4.2: 1 % -1 === + 0. Actual: -0');
  }
}

//CHECK#5
if (101 % 51 !== 50) {
  $ERROR('#5: 101 % 51 === 50. Actual: ' + (101 % 51));
}

//CHECK#6
if (101 % -51 !== 50) {
  $ERROR('#6: 101 % -51 === 50. Actual: ' + (101 % -51));
}

//CHECK#7
if (-101 % 51 !== -50) {
  $ERROR('#7: -101 % 51 === -50. Actual: ' + (-101 % 51));
}

//CHECK#8
if (-101 % -51 !== -50) {
  $ERROR('#8: -101 % -51 === -50. Actual: ' + (-101 % -51));
}

 }
});

