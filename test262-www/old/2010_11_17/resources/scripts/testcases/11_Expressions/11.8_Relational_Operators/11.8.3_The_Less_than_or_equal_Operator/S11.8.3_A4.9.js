// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.3_A4.9;
* @section: 11.8.3, 11.8.5;
* @assertion: If x is less or equal than y and these values are both finite non-zero, return true; otherwise, return false;
* @description: x and y are number primitives;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.3_A4.9",

path: "11.8.3, 11.8.5",

description: "x and y are number primitives",

test: function testcase() {
   //CHECK#1
if ((1.1 <= 1) !== false) {
  $ERROR('#1: (1.1 <= 1) === false');
}

//CHECK#2
if ((1 <= 1.1) !== true) {
  $ERROR('#2: (1 <= 1.1) === true');
}

//CHECK#3
if ((-1.1 <= -1) !== true) {
  $ERROR('#3: (-1.1 <= -1) === true');
}

//CHECK#4
if ((-1 <= -1.1) !== false) {
  $ERROR('#4: (-1 <= -1.1) === false');
}

//CHECK#5
if ((0 <= 0.1) !== true) {
  $ERROR('#5: (0 <= 0.1) === true');
}

//CHECK#6
if ((-0.1 <= 0) !== true) {
  $ERROR('#6: (-0.1 <= 0) === true');
}

//CHECK#7
if ((Number.MAX_VALUE/2 <= Number.MAX_VALUE) !== true) {
  $ERROR('#7: (Number.MAX_VALUE/2 <= Number.MAX_VALUE) === true');
}

//CHECK#8
if ((Number.MIN_VALUE <= Number.MIN_VALUE*2) !== true) {
  $ERROR('#8: (Number.MIN_VALUE <= Number.MIN_VALUE*2) === true');
}



 }
});

