// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.18_A1_T14;
* @section: 15.5.4.18;
* @assertion: String.prototype.toUpperCase();
* @description: Call toUpperCase() function of RegExp object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.18_A1_T14",

path: "15.5.4.18",

description: "Call toUpperCase() function of RegExp object",

test: function testcase() {
   var __reg = new RegExp("abc");
__reg.toUpperCase = String.prototype.toUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__reg.toUpperCase() !== "/ABC/") {
  $ERROR('#1: var __reg = new RegExp("abc"); __reg.toUpperCase = String.prototype.toUpperCase; __reg.toUpperCase() === "/ABC/". Actual: '+__reg.toUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

