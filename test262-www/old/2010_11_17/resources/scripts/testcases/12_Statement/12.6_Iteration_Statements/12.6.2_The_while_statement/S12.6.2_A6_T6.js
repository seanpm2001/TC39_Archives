// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A6_T6;
* @section: 12.6.2;
* @assertion: Expression in "while" IterationStatement is bracketed with braces;
* @description: Checking if execution of "while 'hood' break" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A6_T6",

path: "12.6.2",

description: "Checking if execution of \"while \'hood\' break\" fails",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nwhile \'hood\' break;\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

