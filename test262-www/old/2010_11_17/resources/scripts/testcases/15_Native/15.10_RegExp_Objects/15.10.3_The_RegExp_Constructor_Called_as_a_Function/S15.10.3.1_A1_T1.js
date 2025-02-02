// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.3.1_A1_T1;
* @section: 15.10.3.1;
* @assertion: If pattern is an object R whose [[Class]] property is "RegExp" and flags is undefined, then return R unchanged;
* @description: R is /x/i and instance is RegExp(R);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.3.1_A1_T1",

path: "15.10.3.1",

description: "R is /x/i and instance is RegExp(R)",

test: function testcase() {
   __re = /x/i;
__instance = RegExp(__re);
__re.indicator = 1;

//CHECK#1
if (__instance.indicator !== 1) {
	$ERROR('#1: __re = /x/i; __instance = RegExp(__re); __re.indicator = 1; __instance.indicator === 1. Actual: ' + (__instance.indicator));
}


 }
});

