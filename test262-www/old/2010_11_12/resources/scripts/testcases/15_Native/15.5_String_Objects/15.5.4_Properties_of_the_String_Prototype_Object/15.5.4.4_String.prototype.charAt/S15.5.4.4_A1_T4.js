// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.4_A1_T4;
* @section: 15.5.4.4;
* @assertion: String.prototype.charAt(pos);
* @description: Call charAt() function without argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.4_A1_T4",

path: "15.5.4.4",

description: "Call charAt() function without argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger() evaluates to 0 charAt() evaluates to charAt(0)
if ("lego".charAt() !== "l") {
  $ERROR('#1: "lego".charAt() === "l". Actual: "lego".charAt() ==='+("lego".charAt()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

