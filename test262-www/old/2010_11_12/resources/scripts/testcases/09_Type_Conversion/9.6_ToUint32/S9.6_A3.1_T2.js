// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.6_A3.1_T2;
 * @section: 9.6;
 * @assertion: Operator uses ToNumber;
 * @description: Type(x) is Number; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.6_A3.1_T2",

path: "9.6",

description: "Type(x) is Number",

test: function testcase() {
   // CHECK#1
if ((new Number(1) >>> 0) !== 1) {
  $ERROR('#1: (new Number(1) >>> 0) === 1. Actual: ' + ((new Number(1) >>> 0)));
}

// CHECK#2
if ((-1.234 >>> 0) !== 4294967295) {
  $ERROR('#2: (-1.234 >>> 0) === 4294967295. Actual: ' + ((-1.234 >>> 0)));
}

 }
});

