// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.8_A3;
 * @section: 15.8.1.8;
 * @assertion: Value Property SQRT2 of the Math Object has the attribute DontDelete;
 * @description: Checking if Math.SQRT2 property has the attribute DontDelete;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.8_A3",

path: "15.8.1.8",

description: "Checking if Math.SQRT2 property has the attribute DontDelete",

test: function testcase() {
   // CHECK#1
if (delete Math.SQRT2 === true) {
    $ERROR('#1: Value Property SQRT2 of the Math Object hasn\'t attribute DontDelete: \'Math.SQRT2 === true\'');
}


 }
});

