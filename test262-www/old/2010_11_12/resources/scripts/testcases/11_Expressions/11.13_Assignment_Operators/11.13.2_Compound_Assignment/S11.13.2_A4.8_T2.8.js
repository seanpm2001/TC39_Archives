// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.8_T2.8;
 * @section: 11.13.2, 11.7.3;
 * @assertion: The production x >>>= y is the same as x = x >>> y; 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.8_T2.8",

path: "11.13.2, 11.7.3",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
x = true;
x >>>= undefined;
if (x !== 1) {
  $ERROR('#1: x = true; x >>>= undefined; x === 1. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x >>>= true;
if (x !== 0) {
  $ERROR('#2: x = undefined; x >>>= true; x === 0. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x >>>= undefined;
if (x !== 1) {
  $ERROR('#3: x = new Boolean(true); x >>>= undefined; x === 1. Actual: ' + (x));
}

//CHECK#4
x = undefined;
x >>>= new Boolean(true);
if (x !== 0) {
  $ERROR('#4: x = undefined; x >>>= new Boolean(true); x === 0. Actual: ' + (x));
}

 }
});

