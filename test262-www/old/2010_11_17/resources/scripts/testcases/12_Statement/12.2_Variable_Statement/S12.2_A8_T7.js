// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A8_T7;
* @section: 12.2;
* @assertion: Only AssignmentExpression is admitted when variable is initialized;
* @description: Checking if execution of "var x>>1" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A8_T7",

path: "12.2",

description: "Checking if execution of \"var x>>1\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nvar x>>1;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

