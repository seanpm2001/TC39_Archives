// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A2_T5;
* @section: 15.10.6.3;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The tested object is new Boolean(false);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A2_T5",

path: "15.10.6.3",

description: "The tested object is new Boolean(false)",

test: function testcase() {
   __instance = new Boolean(false);

__instance.test = RegExp.prototype.test;

//CHECK#1
with(__instance) {
  try {
   $ERROR('#1.1: __instance = new Boolean(false); __instance.test = RegExp.prototype.test; test("message to investigate"). Actual: ' + (test("message to investigate")));
  } catch (e) {
    if ((e instanceof TypeError !== true)) {
      $ERROR('#1.2: __instance = new Boolean(false); __instance.test = RegExp.prototype.test; test("message to investigate"). Actual: ' + (e));
    }
  }  
}

 }
});

