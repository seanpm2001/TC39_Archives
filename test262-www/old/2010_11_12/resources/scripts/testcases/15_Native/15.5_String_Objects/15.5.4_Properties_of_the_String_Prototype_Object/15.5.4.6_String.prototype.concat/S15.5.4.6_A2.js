// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A2;
* @section: 15.5.4.6;
* @assertion: String.prototype.concat([,[...]]) can accept at least 128;
* @description: Call concat([,[...]]) function with 128 arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A2",

path: "15.5.4.6",

description: "Call concat([,[...]]) function with 128 arguments",

test: function testcase() {
   var __instance = new Number();

__instance.concat = String.prototype.concat;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.concat(
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF,
0,1,2,3,4,5,6,7,8,9,0xA,0xB,0xC,0xD,0xE,0xF
) !== "001234567891011121314150123456789101112131415012345678910111213141501234567891011121314150123456789101112131415012345678910111213141501234567891011121314150123456789101112131415") {
  $ERROR('#1: Call concat([,[...]]) function with 128 arguments does not lead to throwing any errors');
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

