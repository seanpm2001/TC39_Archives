// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.2_T2.9;
 * @section: 11.13.2, 11.5.2;
 * @assertion: The production x /= y is the same as x = x / y; 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.2_T2.9",

path: "11.13.2, 11.5.2",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
x = true;
x /= null;
if (x !== Number.POSITIVE_INFINITY) {
  $ERROR('#1: x = true; x /= null; x === +Infinity. Actual: ' + (x));
}

//CHECK#2
x = null;
x /= true;
if (x !== 0) {
  $ERROR('#2: x = null; x /= true; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x /= null;
if (x !== Number.POSITIVE_INFINITY) {
  $ERROR('#3: x = new Boolean(true); x /= null; x === +Infinity. Actual: ' + (x));
}

//CHECK#4
x = null;
x /= new Boolean(true);
if (x !== 0) {
  $ERROR('#4: x = null; x /= new Boolean(true); x === 0. Actual: ' + (x));
}

 }
});

