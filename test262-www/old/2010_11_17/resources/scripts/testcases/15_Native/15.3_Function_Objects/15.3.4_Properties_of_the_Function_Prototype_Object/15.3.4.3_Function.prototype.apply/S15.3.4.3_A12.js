// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A12;
* @section: 15.3.4.3, 13.2;
* @assertion: Function.prototype.apply has not prototype property;
* @description: Checking if obtaining the prototype property of Function.prototype.apply fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A12",

path: "15.3.4.3, 13.2",

description: "Checking if obtaining the prototype property of Function.prototype.apply fails",

test: function testcase() {
   //CHECK#1
if (Function.prototype.apply.prototype !== undefined) {
  $ERROR('#1: Function.prototype.apply has not prototype property'+Function.prototype.apply.prototype);
}

 }
});

