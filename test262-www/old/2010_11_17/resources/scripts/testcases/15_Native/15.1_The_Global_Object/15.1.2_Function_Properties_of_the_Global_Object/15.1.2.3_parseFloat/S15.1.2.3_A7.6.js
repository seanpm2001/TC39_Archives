// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.2.3_A7.6;
* @section: 15.1.2.3;
* @assertion: The parseFloat property has not prototype property;
* @description: Checking parseFloat.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A7.6",

path: "15.1.2.3",

description: "Checking parseFloat.prototype",

test: function testcase() {
   //CHECK#1
if (parseFloat.prototype !== undefined) {
  $ERROR('#1: parseFloat.prototype === undefined. Actual: ' + (parseFloat.prototype));
}

 }
});

