// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A2_T9;
* @section: 15.10.6.3;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The tested object is 1.0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A2_T9",

path: "15.10.6.3",

description: "The tested object is 1.0",

test: function testcase() {
   __instance = 1.0;

Object.prototype.test = RegExp.prototype.test;

//CHECK#1
try {
  $ERROR('#1.1: __instance = 1.0; Object.prototype.test = RegExp.prototype.test; __instance.test("message to investigate"). Actual: ' + (__instance.test("message to investigate")));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: __instance = 1.0; Object.prototype.test = RegExp.prototype.test; __instance.test("message to investigate"). Actual: ' + (e));
  }
}


 }
});

