// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A4.1_T1;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If x or y is NaN, return false;
 * @description: x is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A4.1_T1",

path: "11.9.1, 11.9.3",

description: "x is NaN",

test: function testcase() {
   //CHECK#1
if ((Number.NaN == true) !== false) {
  $ERROR('#1: (NaN == true) === false');
}

//CHECK#2
if ((Number.NaN == 1) !== false) {
  $ERROR('#2: (NaN == 1) === false');
}

//CHECK#3
if ((Number.NaN == Number.NaN) !== false) {
  $ERROR('#3: (NaN == NaN) === false');
}

//CHECK#4
if ((Number.NaN == Number.POSITIVE_INFINITY) !== false) {
  $ERROR('#4: (NaN == +Infinity) === false');
}

//CHECK#5
if ((Number.NaN == Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#5: (NaN == -Infinity) === false');
}

//CHECK#6
if ((Number.NaN == Number.MAX_VALUE) !== false) {
  $ERROR('#6: (NaN == Number.MAX_VALUE) === false');
}

//CHECK#7
if ((Number.NaN == Number.MIN_VALUE) !== false) {
  $ERROR('#7: (NaN == Number.MIN_VALUE) === false');
}

//CHECK#8
if ((Number.NaN == "string") !== false) {
  $ERROR('#8: (NaN == "string") === false');
}

//CHECK#9
if ((Number.NaN == new Object()) !== false) {
  $ERROR('#9: (NaN == new Object()) === false');
}


 }
});

