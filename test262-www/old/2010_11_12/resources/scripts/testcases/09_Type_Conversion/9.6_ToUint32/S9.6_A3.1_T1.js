// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.6_A3.1_T1;
 * @section: 9.6;
 * @assertion: Operator uses ToNumber;
 * @description: Type(x) is Boolean; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.6_A3.1_T1",

path: "9.6",

description: "Type(x) is Boolean",

test: function testcase() {
   // CHECK#1
if ((new Boolean(true) >>> 0) !== 1) {
  $ERROR('#1: (new Boolean(true) >>> 0) === 1. Actual: ' + ((new Boolean(true) >>> 0)));
}

// CHECK#2
if ((false >>> 0) !== 0) {
  $ERROR('#2: (false >>> 0) === 0. Actual: ' + ((false >>> 0)));
}

 }
});

