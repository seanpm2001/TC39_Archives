// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.4_A3;
 * @section: 15.8.1.4;
 * @assertion: Value Property LOG2E of the Math Object has the attribute DontDelete;
 * @description: Checking if Math.LOG2E property has the attribute DontDelete;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.4_A3",

path: "15.8.1.4",

description: "Checking if Math.LOG2E property has the attribute DontDelete",

test: function testcase() {
   // CHECK#1
if (delete Math.LOG2E === true) {
    $ERROR('#1: Value Property LOG2E of the Math Object hasn\'t attribute DontDelete: \'Math.LOG2E === true\'');
}


 }
});

