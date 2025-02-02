// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.8_A1_T2;
* @section: 12.8;
* @assertion: Appearing of break without an IterationStatement leads to syntax error;
* @description: Checking if break Identifier with no loop fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.8_A1_T2",

path: "12.8",

description: "Checking if break Identifier with no loop fails",

test: function testcase() {
  try {
     (function() {
         eval("LABEL : x=3.14;\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nvar x=1;\r\nbreak LABEL;\r\nvar y=2;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

