// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T14;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Call toLocaleUpperCase() function for RegExp object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T14",

path: "15.5.4.19",

description: "Call toLocaleUpperCase() function for RegExp object",

test: function testcase() {
   var __reg = new RegExp("abc");
__reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__reg.toLocaleUpperCase() !== "/ABC/") {
  $ERROR('#1: var __reg = new RegExp("abc"); __reg.toLocaleUpperCase = String.prototype.toLocaleUpperCase; __reg.toLocaleUpperCase() === "/ABC/". Actual: '+__reg.toLocaleUpperCase() );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

