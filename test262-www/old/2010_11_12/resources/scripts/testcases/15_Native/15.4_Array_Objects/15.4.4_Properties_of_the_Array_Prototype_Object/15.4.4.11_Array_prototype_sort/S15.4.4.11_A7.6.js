// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.11_A7.6;
* @section: 15.4.4.11;
* @assertion: The sort property of Array has not prototype property;
* @description: Checking Array.prototype.sort.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A7.6",

path: "15.4.4.11",

description: "Checking Array.prototype.sort.prototype",

test: function testcase() {
   //CHECK#1
if (Array.prototype.sort.prototype !== undefined) {
  $ERROR('#1: Array.prototype.sort.prototype === undefined. Actual: ' + (Array.prototype.sort.prototype));
}

 }
});

