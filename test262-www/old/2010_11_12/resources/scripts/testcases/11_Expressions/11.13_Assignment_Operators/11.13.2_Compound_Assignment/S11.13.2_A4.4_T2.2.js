// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.4_T2.2;
 * @section: 11.13.2, 11.6.1;
 * @assertion: The production x += y is the same as x = x + y; 
 * @description: Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.4_T2.2",

path: "11.13.2, 11.6.1",

description: "Type(x) is different from Type(y) and both types vary between Number (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
x = 1;
x += null;
if (x !== 1) {
  $ERROR('#1: x = 1; x += null; x === 1. Actual: ' + (x));
}

//CHECK#2
x = null;
x += 1;
if (x !== 1) {
  $ERROR('#2: x = null; x += 1; x === 1. Actual: ' + (x));
}

//CHECK#3
x = new Number(1);
x += null;
if (x !== 1) {
  $ERROR('#3: x = new Number(1); x += null; x === 1. Actual: ' + (x));
}

//CHECK#4
x = null;
x += new Number(1);
if (x !== 1) {
  $ERROR('#4: x = null; x += new Number(1); x === 1. Actual: ' + (x));
}

 }
});

