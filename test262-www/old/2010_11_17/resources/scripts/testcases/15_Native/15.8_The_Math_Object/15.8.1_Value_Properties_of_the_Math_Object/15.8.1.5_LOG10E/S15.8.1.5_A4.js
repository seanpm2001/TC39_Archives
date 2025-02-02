// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.5_A4;
 * @section: 15.8.1.5;
 * @assertion: Value Property LOG10E of the Math Object has the attribute ReadOnly;
 * @description: Checking if Math.LOG10E property has the attribute ReadOnly;
 * @strict_mode_negative
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.5_A4",

path: "15.8.1.5",

description: "Checking if Math.LOG10E property has the attribute ReadOnly",

test: function testcase() {
   // CHECK#1
var x = Math.LOG10E;
Math.LOG10E = 1;
if (Math.LOG10E !== x) {
  $ERROR('#1: Math.LOG10E hasn\'t ReadOnly: \'x = Math.LOG10E;Math.LOG10E = 1;Math.LOG10E === x\'');
}

 }
});

