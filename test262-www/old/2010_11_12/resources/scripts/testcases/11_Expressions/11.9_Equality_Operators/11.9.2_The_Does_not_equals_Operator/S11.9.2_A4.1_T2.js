// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A4.1_T2;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If x or y is NaN, return true;
 * @description: y is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A4.1_T2",

path: "11.9.2, 11.9.3",

description: "y is NaN",

test: function testcase() {
   //CHECK#1
if ((true != Number.NaN) !== true) {
  $ERROR('#1: (true != NaN) === true');
}

//CHECK#2
if ((-1 != Number.NaN) !== true) {
  $ERROR('#2: (-1 != NaN) === true');
}

//CHECK#3
if ((Number.NaN != Number.NaN) !== true) {
  $ERROR('#3: (NaN != NaN) === true');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY != Number.NaN) !== true) {
  $ERROR('#4: (+Infinity != NaN) === true');
}

//CHECK#5
if ((Number.NEGATIVE_INFINITY != Number.NaN) !== true) {
  $ERROR('#5: (-Infinity != NaN) === true');
}

//CHECK#6
if ((Number.MAX_VALUE != Number.NaN) !== true) {
  $ERROR('#6: (Number.MAX_VALUE != NaN) === true');
}

//CHECK#7
if ((Number.MIN_VALUE != Number.NaN) !== true) {
  $ERROR('#7: (Number.MIN_VALUE != NaN) === true');
}

//CHECK#8
if (("string" != Number.NaN) !== true) {
  $ERROR('#8: ("string" != NaN) === true');
}

//CHECK#9
if ((new Object() != Number.NaN) !== true) {
  $ERROR('#9: (new Object() != NaN) === true');
}

 }
});

