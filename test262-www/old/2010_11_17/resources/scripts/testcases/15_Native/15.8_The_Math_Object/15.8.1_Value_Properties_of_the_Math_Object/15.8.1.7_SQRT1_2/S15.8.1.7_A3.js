// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.7_A3;
 * @section: 15.8.1.7;
 * @assertion: Value Property SQRT1_2 of the Math Object has the attribute DontDelete;
 * @description: Checking if Math.SQRT1_2 property has the attribute DontDelete;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.7_A3",

path: "15.8.1.7",

description: "Checking if Math.SQRT1_2 property has the attribute DontDelete",

test: function testcase() {
   // CHECK#1
if (delete Math.SQRT1_2 === true) {
  $ERROR("#1: Value Property SQRT1_2 of the Math Object hasn't attribute DontDelete: 'Math.SQRT1_2 === true'");
}


 }
});

