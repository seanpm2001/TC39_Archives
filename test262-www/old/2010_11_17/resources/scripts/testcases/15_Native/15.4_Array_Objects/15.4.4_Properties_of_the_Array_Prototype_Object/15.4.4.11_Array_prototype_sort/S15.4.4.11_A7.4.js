// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.4.4.11_A7.4;
* @section: 15.4.4.11;
* @assertion: The length property of sort is 1;
* @description: sort.length === 1;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.11_A7.4",

path: "15.4.4.11",

description: "sort.length === 1",

test: function testcase() {
   //CHECK#1
if (Array.prototype.sort.length !== 1) {
  $ERROR('#1: Array.prototype.sort.length === 1. Actual: ' + (Array.prototype.sort.length));
}


 }
});

