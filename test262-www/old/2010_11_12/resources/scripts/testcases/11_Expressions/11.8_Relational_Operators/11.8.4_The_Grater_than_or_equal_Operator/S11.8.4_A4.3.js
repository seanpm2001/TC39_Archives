// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.4_A4.3;
* @section: 11.8.4, 11.8.5;
* @assertion: If x and y are the same number value, return true;
* @description: x and y are number primitives;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.4_A4.3",

path: "11.8.4, 11.8.5",

description: "x and y are number primitives",

test: function testcase() {
   //CHECK#1
if ((1 >= 1) !== true) {
  $ERROR('#1: (1 >= 1) === true');
}

//CHECK#2
if ((1.1 >= 1.1) !== true) {
  $ERROR('#2: (1.1 >= 1.1) === true');
}

//CHECK#3
if ((-1.1 >= -1.1) !== true) {
  $ERROR('#3: (-1.1 >= -1.1) === true');
}

//CHECK#4
if ((Number.NEGATIVE_INFINITY >= Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#4: (-Infinity >= -Infinity) === true');
}

//CHECK#5
if ((Number.POSITIVE_INFINITY >= Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#5: (+Infinity >= +Infinity) === true');
}

//CHECK#6
if ((Number.MAX_VALUE >= Number.MAX_VALUE) !== true) {
  $ERROR('#6: (Number.MAX_VALUE >= Number.MAX_VALUE) === true');
}

//CHECK#7
if ((Number.MIN_VALUE >= Number.MIN_VALUE) !== true) {
  $ERROR('#7: (Number.MIN_VALUE >= Number.MIN_VALUE) === true');
}



 }
});

