// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A4.8;
* @section: 11.8.1, 11.8.5;
* @assertion: If y is -Infinity, return false;
* @description: x is number primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A4.8",

path: "11.8.1, 11.8.5",

description: "x is number primitive",

test: function testcase() {
   //CHECK#1
if ((0 < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#1: (0 < -Infinity) === false');
}

//CHECK#2
if ((1.1 < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#2: (1.1 < -Infinity) === false');
}

//CHECK#3
if ((-1.1 < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#3: (-1.1 < -Infinity) === false');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#4: (+Infinity < -Infinity) === false');
}

//CHECK#5
if ((Number.MAX_VALUE < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#5: (Number.MAX_VALUE < -Infinity) === false');
}

//CHECK#6
if ((Number.MIN_VALUE < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#6: (Number.MIN_VALUE < -Infinity) === false');
}


 }
});

