// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.1_A3;
 * @section: 15.8.1.1;
 * @assertion: Value Property E of the Math Object has the attribute DontDelete;
 * @description: Checking if Math.E property has the attribute DontDelete;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.1_A3",

path: "15.8.1.1",

description: "Checking if Math.E property has the attribute DontDelete",

test: function testcase() {
   // CHECK#1
if (delete Math.E === true) {
    $ERROR('#1: Value Property E of the Math Object hasn\'t attribute DontDelete: \'Math.E === true\'');
}


 }
});

