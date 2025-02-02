// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.4_A4.3;
 * @section: 11.9.4, 11.9.6;
 * @assertion: Type(x) and Type(y) are Number-s minus NaN, +0, -0. 
 * Return true, if x is the same number value as y; otherwise, return false;
 * @description: x and y are primitive numbers;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.4_A4.3",

path: "11.9.4, 11.9.6",

description: "x and y are primitive numbers",

test: function testcase() {
   //CHECK#1
if (!(Number.POSITIVE_INFINITY === Number.POSITIVE_INFINITY)) {
  $ERROR('#1: +Infinity === +Infinity');
}

//CHECK#2
if (!(Number.NEGATIVE_INFINITY === Number.NEGATIVE_INFINITY)) {
  $ERROR('#2: -Infinity === -Infinity');
}

//CHECK#3
if (!(13 === 13)) {
  $ERROR('#3: 13 === 13');
}

//CHECK#4
if (!(-13 === -13)) {
  $ERROR('#4: -13 === -13');
}

//CHECK#5
if (!(1.3 === 1.3)) {
  $ERROR('#5: 1.3 === 1.3');
}

//CHECK#6
if (!(-1.3 === -1.3)) {
  $ERROR('#6: -1.3 === -1.3');
}

//CHECK#7
if (!(Number.POSITIVE_INFINITY === -Number.NEGATIVE_INFINITY)) {
  $ERROR('#7: +Infinity === -(-Infinity)');
}

//CHECK#8
if (1 === 0.999999999999) {
  $ERROR('#8: 1 !== 0.999999999999');
}

//CHECK#9
if (!(1.0 === 1)) {
  $ERROR('#9: 1.0 === 1');
}

 }
});

