// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.2_T2;
 * @section: 7.8.5;
 * @assertion: RegularExpressionFirstChar :: * or \ or / or [empty] is incorrect; 
 * @description: \;  
 * @negative
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A1.2_T2",

path: "7.8.5",

description: "\\",

test: function testcase() {
  try {
     (function() {
         eval("//CHECK#1\r\n/\\/\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

