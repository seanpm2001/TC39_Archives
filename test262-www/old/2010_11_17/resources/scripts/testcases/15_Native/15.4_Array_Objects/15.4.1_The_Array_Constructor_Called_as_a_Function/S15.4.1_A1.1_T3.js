// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.1_A1.1_T3;
 * @section: 15.4.1, 15.2.4.6;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Checking use isPrototypeOf;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.1_A1.1_T3",

path: "15.4.1, 15.2.4.6",

description: "Checking use isPrototypeOf",

test: function testcase() {
   //CHECK#1
if (Array.prototype.isPrototypeOf(Array()) !== true) {
  $ERROR('#1: Array.prototype.isPrototypeOf(Array()) === true. Actual: ' + (Array.prototype.isPrototypeOf(Array())));
}


 }
});

