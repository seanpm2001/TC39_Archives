// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A4.1;
* @section: 11.8.1, 11.8.5;
* @assertion: If x is NaN, return false (if result in 11.8.5 is undefined, return false);
* @description: y is number primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A4.1",

path: "11.8.1, 11.8.5",

description: "y is number primitive",

test: function testcase() {
   //CHECK#1
if ((Number.NaN < 0) !== false) {
  $ERROR('#1: (NaN < 0) === false');
}

//CHECK#2
if ((Number.NaN < 1.1) !== false) {
  $ERROR('#2: (NaN < 1.1) === false');
}

//CHECK#3
if ((Number.NaN < -1.1) !== false) {
  $ERROR('#3: (NaN < -1.1) === false');
}

//CHECK#4
if ((Number.NaN < Number.NaN) !== false) {
  $ERROR('#4: (NaN < NaN) === false');
}

//CHECK#5
if ((Number.NaN < Number.POSITIVE_INFINITY) !== false) {
  $ERROR('#5: (NaN < +Infinity) === false');
}

//CHECK#6
if ((Number.NaN < Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#6: (NaN < -Infinity) === false');
}

//CHECK#7
if ((Number.NaN < Number.MAX_VALUE) !== false) {
  $ERROR('#7: (NaN < Number.MAX_VALUE) === false');
}

//CHECK#8
if ((Number.NaN < Number.MIN_VALUE) !== false) {
  $ERROR('#8: (NaN < Number.MIN_VALUE) === false');
}


 }
});

