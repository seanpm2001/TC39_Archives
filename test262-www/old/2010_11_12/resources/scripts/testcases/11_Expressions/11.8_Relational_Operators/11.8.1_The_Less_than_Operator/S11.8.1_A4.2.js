// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A4.2;
* @section: 11.8.1, 11.8.5;
* @assertion: If y is NaN, return false (if result in 11.8.5 is undefined, return false);
* @description: x is number primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A4.2",

path: "11.8.1, 11.8.5",

description: "x is number primitive",

test: function testcase() {
   //CHECK#1
if ((0 < Number.NaN) !== false) {
  $ERROR('#1: (0 < NaN) === false');
}

//CHECK#2
if ((1.1 < Number.NaN) !== false) {
  $ERROR('#2: (1.1 < NaN) === false');
}

//CHECK#3
if ((-1.1 < Number.NaN) !== false) {
  $ERROR('#3: (-1.1 < NaN) === false');
}

//CHECK#4
if ((Number.NaN < Number.NaN) !== false) {
  $ERROR('#4: (NaN < NaN) === false');
}

//CHECK#5
if ((Number.POSITIVE_INFINITY < Number.NaN) !== false) {
  $ERROR('#5: (+Infinity < NaN) === false');
}

//CHECK#6
if ((Number.NEGATIVE_INFINITY < Number.NaN) !== false) {
  $ERROR('#6: (-Infinity < NaN) === false');
}

//CHECK#7
if ((Number.MAX_VALUE < Number.NaN) !== false) {
  $ERROR('#7: (Number.MAX_VALUE < NaN) === false');
}

//CHECK#8
if ((Number.MIN_VALUE < Number.NaN) !== false) {
  $ERROR('#8: (Number.MIN_VALUE < NaN) === false');
}


 }
});

