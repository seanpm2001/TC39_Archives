// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A4.1_T1;
 * @section: 11.9.5, 11.9.6;
 * @assertion: If x or y is NaN, return true;
 * @description: x is NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A4.1_T1",

path: "11.9.5, 11.9.6",

description: "x is NaN",

test: function testcase() {
   //CHECK#1
if (!(Number.NaN !== true)) {
  $ERROR('#1: NaN !== true');
}

//CHECK#2
if (!(Number.NaN !== 1)) {
  $ERROR('#2: NaN !== 1');
}

//CHECK#3
if (!(Number.NaN !== Number.NaN)) {
  $ERROR('#3: NaN !== NaN');
}

//CHECK#4
if (!(Number.NaN !== Number.POSITIVE_INFINITY)) {
  $ERROR('#4: NaN !== +Infinity');
}

//CHECK#5
if (!(Number.NaN !== Number.NEGATIVE_INFINITY)) {
  $ERROR('#5: NaN !== -Infinity');
}

//CHECK#6
if (!(Number.NaN !== Number.MAX_VALUE)) {
  $ERROR('#6: NaN !== Number.MAX_VALUE');
}

//CHECK#7
if (!(Number.NaN !== Number.MIN_VALUE)) {
  $ERROR('#7: NaN !== Number.MIN_VALUE');
}

//CHECK#8
if (!(Number.NaN !== "string")) {
  $ERROR('#8: NaN !== "string"');
}

//CHECK#9
if (!(Number.NaN !== new Object())) {
  $ERROR('#9: NaN !== new Object()');
}


 }
});

