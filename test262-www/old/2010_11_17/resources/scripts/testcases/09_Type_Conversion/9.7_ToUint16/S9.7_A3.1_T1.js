// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.7_A3.1_T1;
 * @section: 9.7;
 * @assertion: Operator uses ToNumber;
 * @description: Type(x) is Boolean; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.7_A3.1_T1",

path: "9.7",

description: "Type(x) is Boolean",

test: function testcase() {
   // CHECK#1
if (String.fromCharCode(new Boolean(true)).charCodeAt(0) !== 1) {
  $ERROR('#1: String.fromCharCode(new Boolean(true)).charCodeAt(0) === 1. Actual: ' + (String.fromCharCode(new Boolean(true)).charCodeAt(0)));
}

// CHECK#2
if (String.fromCharCode(false).charCodeAt(0) !== 0) {
  $ERROR('#2: String.fromCharCode(false).charCodeAt(0) === 0. Actual: ' + (String.fromCharCode(false).charCodeAt(0)));
}

 }
});

