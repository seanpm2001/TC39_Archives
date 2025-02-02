// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A4.5;
* @section: 11.8.1, 11.8.5;
* @assertion: If x is +Infinity, return false;
* @description: y is number primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A4.5",

path: "11.8.1, 11.8.5",

description: "y is number primitive",

test: function testcase() {
   //CHECK#1
if ((Number.POSITIVE_INFINITY < 0) !== false) {
  $ERROR('#1: (+Infinity < 0) === false');
}

//CHECK#2
if ((Number.POSITIVE_INFINITY < 1.1) !== false) {
  $ERROR('#2: (+Infinity < 1.1) === false');
}

//CHECK#3
if ((Number.POSITIVE_INFINITY < -1.1) !== false) {
  $ERROR('#3: (+Infinity < -1.1) === false');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#4: (+Infinity < -Infinity) === false');
}

//CHECK#5
if ((Number.POSITIVE_INFINITY < Number.MAX_VALUE) !== false) {
  $ERROR('#5: (+Infinity < Number.MAX_VALUE) === false');
}

//CHECK#6
if ((Number.POSITIVE_INFINITY < Number.MIN_VALUE) !== false) {
  $ERROR('#6: (+Infinity < Number.MIN_VALUE) === false');
}


 }
});

