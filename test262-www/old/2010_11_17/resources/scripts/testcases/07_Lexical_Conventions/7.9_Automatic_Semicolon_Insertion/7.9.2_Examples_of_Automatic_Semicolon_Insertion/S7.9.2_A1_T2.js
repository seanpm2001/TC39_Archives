// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9.2_A1_T2;
 * @section: 7.9.2;
 * @assertion: Check examples for automatic semicolon insertion from the Standart;
 * @description: { 1 \n 2 } 3 is a valid sentence in the ECMAScript grammar with automatic semicolon insertion;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9.2_A1_T2",

path: "7.9.2",

description: "{ 1 \\n 2 } 3 is a valid sentence in the ECMAScript grammar with automatic semicolon insertion",

test: function testcase() {
   //CHECK#1
{ 1
2 } 3

 }
});

