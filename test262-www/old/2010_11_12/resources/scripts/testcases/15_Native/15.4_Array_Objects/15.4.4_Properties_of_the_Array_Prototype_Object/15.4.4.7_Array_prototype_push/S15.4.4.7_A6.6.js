// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.7_A6.6;
* @section: 15.4.4.7;
* @assertion: The push property of Array has not prototype property;
* @description: Checking Array.prototype.push.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.7_A6.6",

path: "15.4.4.7",

description: "Checking Array.prototype.push.prototype",

test: function testcase() {
   //CHECK#1
if (Array.prototype.push.prototype !== undefined) {
  $ERROR('#1: Array.prototype.push.prototype === undefined. Actual: ' + (Array.prototype.push.prototype));
}

 }
});

