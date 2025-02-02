// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A4.1_T2;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If x or y is NaN, return false;
 * @description: y is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A4.1_T2",

path: "11.9.1, 11.9.3",

description: "y is NaN",

test: function testcase() {
   //CHECK#1
if ((true == Number.NaN) !== false) {
  $ERROR('#1: (true == NaN) === false');
}

//CHECK#2
if ((-1 == Number.NaN) !== false) {
  $ERROR('#2: (-1 == NaN) === false');
}

//CHECK#3
if ((Number.NaN == Number.NaN) !== false) {
  $ERROR('#3: (NaN == NaN) === false');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY == Number.NaN) !== false) {
  $ERROR('#4: (+Infinity == NaN) === false');
}

//CHECK#5
if ((Number.NEGATIVE_INFINITY == Number.NaN) !== false) {
  $ERROR('#5: (-Infinity == NaN) === false');
}

//CHECK#6
if ((Number.MAX_VALUE == Number.NaN) !== false) {
  $ERROR('#6: (Number.MAX_VALUE == NaN) === false');
}

//CHECK#7
if ((Number.MIN_VALUE == Number.NaN) !== false) {
  $ERROR('#7: (Number.MIN_VALUE == NaN) === false');
}

//CHECK#8
if (("string" == Number.NaN) !== false) {
  $ERROR('#8: ("string" == NaN) === false');
}

//CHECK#9
if ((new Object() == Number.NaN) !== false) {
  $ERROR('#9: (new Object() == NaN) === false');
}

 }
});

