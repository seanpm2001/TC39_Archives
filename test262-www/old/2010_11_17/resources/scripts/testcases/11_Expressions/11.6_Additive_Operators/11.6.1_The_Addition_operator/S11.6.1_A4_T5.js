// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.1_A4_T5;
* @section: 11.6.1, 11.6.3;
* @assertion: The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics; 
* @description: The sum of two negative zeros is -0. The sum of two positive zeros, or of two zeros of opposite sign is +0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A4_T5",

path: "11.6.1, 11.6.3",

description: "The sum of two negative zeros is -0. The sum of two positive zeros, or of two zeros of opposite sign is +0",

test: function testcase() {
   //CHECK#1
if (-0 + -0 !== -0 ) {  
  $ERROR('#1.1: -0 + -0 === 0. Actual: ' + (-0 + -0));
} else {
  if (1 / (-0 + -0) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#1.1: -0 + -0 === - 0. Actual: +0');
  }
}

//CHECK#2
if (0 + -0 !== 0 ) {  
  $ERROR('#2.1: 0 + -0 === 0. Actual: ' + (0 + -0));
} else {
  if (1 / (0 + -0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#2.2: 0 + -0 === + 0. Actual: -0');
  }
}

//CHECK#3
if (-0 + 0 !== 0 ) {  
  $ERROR('#3.1: -0 + 0 === 0. Actual: ' + (-0 + 0));
} else {
  if (1 / (-0 + 0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#3.2: -0 + 0 === + 0. Actual: -0');
  }
}

//CHECK#4
if (0 + 0 !== 0 ) {  
  $ERROR('#4.1: 0 + 0 === 0. Actual: ' + (0 + 0));
} else {
  if (1 / (0 + 0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#4.2: 0 + 0 === + 0. Actual: -0');
  }
}

 }
});

