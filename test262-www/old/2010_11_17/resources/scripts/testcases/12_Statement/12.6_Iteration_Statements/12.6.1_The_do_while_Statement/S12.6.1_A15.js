// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A15;
* @section: 12.6.1;
* @assertion: Block within a "do-while" Expression is not allowed;
* @description: Using "{0}" Block as an Expression;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A15",

path: "12.6.1",

description: "Using \"{0}\" Block as an Expression",

test: function testcase() {
  try {
     (function() {
         eval("//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#\r\ndo{\r\n    ;\r\n}while({0});\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

