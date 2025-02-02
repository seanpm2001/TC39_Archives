// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.2_A4_T7;
* @section: 11.6.2, 11.6.3;
* @assertion: Operator x - y produces the same result as x + (-y); 
* @description: The mathematical difference of two nonzero finite values of the same magnitude and same sign is +0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A4_T7",

path: "11.6.2, 11.6.3",

description: "The mathematical difference of two nonzero finite values of the same magnitude and same sign is +0",

test: function testcase() {
   //CHECK#1
if (Number.MIN_VALUE - Number.MIN_VALUE !== +0) {  
  $ERROR('#1.1: Number.MIN_VALUE - Number.MIN_VALUE === 0. Actual: ' + (Number.MIN_VALUE - Number.MIN_VALUE));
} else {
  if (1 / (Number.MIN_VALUE - Number.MIN_VALUE) !== Number.POSITIVE_INFINITY) {
    $ERROR('#1.2: Number.MIN_VALUE - Number.MIN_VALUE === + 0. Actual: -0');
  }
}

//CHECK#2
if (-Number.MAX_VALUE - -Number.MAX_VALUE !== +0) {  
  $ERROR('#2.2: -Number.MAX_VALUE - -Number.MAX_VALUE === 0. Actual: ' + (-Number.MAX_VALUE - -Number.MAX_VALUE));
} else {
  if (1 / (-Number.MAX_VALUE - -Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {
    $ERROR('#2.1: -Number.MAX_VALUE - -Number.MAX_VALUE === + 0. Actual: -0');
  }
}

//CHECK#3
if (1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE !== +0) {  
  $ERROR('#3.1: 1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE === 0. Actual: ' + (1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE));
} else {
  if (1 / (1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE) !== Number.POSITIVE_INFINITY) {
    $ERROR('#3.2: 1 / Number.MAX_VALUE - 1 / Number.MAX_VALUE === + 0. Actual: -0');
  }
}

 }
});

