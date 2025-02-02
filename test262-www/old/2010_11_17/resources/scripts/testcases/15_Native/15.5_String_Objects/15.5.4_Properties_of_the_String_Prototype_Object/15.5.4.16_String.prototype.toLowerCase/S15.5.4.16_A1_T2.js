// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T2;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Instance is Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T2",

path: "15.5.4.16",

description: "Instance is Boolean object",

test: function testcase() {
   __instance = new Boolean;

__instance.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.toLowerCase() !== "false") {
  $ERROR('#1: __instance = new Boolean; __instance.toLowerCase = String.prototype.toLowerCase;  __instance.toLowerCase() === "false". Actual: '+__instance.toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

