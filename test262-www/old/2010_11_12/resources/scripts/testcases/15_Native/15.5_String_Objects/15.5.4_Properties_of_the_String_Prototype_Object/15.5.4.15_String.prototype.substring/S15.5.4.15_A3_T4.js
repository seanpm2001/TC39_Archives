// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A3_T4;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end) can be applied to non String object instance and 
* returns a string value(not object);
* @description: Apply String.prototype.substring to Array instance. Start is '4', end is '5';
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A3_T4",

path: "15.5.4.15",

description: "Apply String.prototype.substring to Array instance. Start is \'4\', end is \'5\'",

test: function testcase() {
   var __instance = new Array(1,2,3,4,5); 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring('4', '5') !== "3") {
  $ERROR('#1: __instance = new Array(1,2,3,4,5); __instance.substring = String.prototype.substring; __instance.substring(\'4\', \'5\') === "3". Actual: '+__instance.substring('4', '5') );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

