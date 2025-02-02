// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.15_A3_T6;
* @section: 15.5.4.15;
* @assertion: String.prototype.substring (start, end) can be applied to non String object instance and 
* returns a string value(not object);
* @description: Apply String.prototype.substring to Object instance. Start is 8, end is length of object.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.15_A3_T6",

path: "15.5.4.15",

description: "Apply String.prototype.substring to Object instance. Start is 8, end is length of object.toString",

test: function testcase() {
   var __instance = new Object(); 
__instance.substring = String.prototype.substring;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.substring(8, __instance.toString().length) !== "Object]") {
  $ERROR('#1: __instance = new Object(); __instance.substring = String.prototype.substring; __instance.substring(8, __instance.toString().length) === "Object]". Actual: '+__instance.substring(8, __instance.toString().length) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

