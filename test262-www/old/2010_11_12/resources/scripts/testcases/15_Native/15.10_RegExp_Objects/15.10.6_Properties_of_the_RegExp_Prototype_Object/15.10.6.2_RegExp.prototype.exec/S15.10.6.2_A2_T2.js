// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A2_T2;
* @section: 15.10.6.2;
* @assertion: A TypeError exception is thrown if the this value is not an object for which the value of the internal [[Class]] property is "RegExp";
* @description: The tested object is Math;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A2_T2",

path: "15.10.6.2",

description: "The tested object is Math",

test: function testcase() {
   __instance = Math;

__instance.exec = RegExp.prototype.exec;

//CHECK#1
try { 
  with(__instance) exec("message to investigate");
	$ERROR('#1.1: __instance = Math; __instance.exec = RegExp.prototype.exec;  with(__instance) exec("message to investigate")');
} catch (e) {
	if ((e instanceof TypeError) !== true) {
		$ERROR('#1.2: __instance = Math; __instance.exec = RegExp.prototype.exec;  with(__instance) exec("message to investigate"). Actual: ' + (e));
	}
}


 }
});

