// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.6_A4;
 * @section: 15.8.1.6;
 * @assertion: Value Property PI of the Math Object has the attribute ReadOnly;
 * @description: Checking if Math.PI property has the attribute ReadOnly;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.6_A4",

path: "15.8.1.6",

description: "Checking if Math.PI property has the attribute ReadOnly",

test: function testcase() {
   // CHECK#1
var x = Math.PI;
Math.PI = 1;
if (Math.PI !== x) {
  $ERROR('#1: Math.PI hasn\'t ReadOnly: \'x = Math.PI;Math.PI = 1;Math.PI === x\'');
}

 }
});

