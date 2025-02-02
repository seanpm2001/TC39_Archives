// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.7_A1_T1;
 * @section: 10.1.7;
 * @assertion: The this value associated with an executioncontext is immutable;
 * @description: Checking if deleting "this" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.7_A1_T1",

path: "10.1.7",

description: "Checking if deleting \"this\" fails",

test: function testcase() {
   //CHECK#1
if (delete this !== true)
  $ERROR('#1: The this value associated with an executioncontext is immutable. Actual: this was deleted');
  

 }
});

