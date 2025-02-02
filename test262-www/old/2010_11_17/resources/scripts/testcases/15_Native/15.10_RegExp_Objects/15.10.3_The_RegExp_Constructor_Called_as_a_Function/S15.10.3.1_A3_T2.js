// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.3.1_A3_T2;
* @section: 15.10.3.1;
* @assertion: If pattern and flags are defined, then 
* call the RegExp constructor (15.10.4.1), passing it the pattern and flags arguments and return the object constructed by that constructor;
* @description: R is {toString:function(){return "[a-c]*";}} and instance is RegExp(R,"gm");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.3.1_A3_T2",

path: "15.10.3.1",

description: "R is {toString:function(){return \"[a-c]*\";}} and instance is RegExp(R,\"gm\")",

test: function testcase() {
   __instance = RegExp({toString:function(){return "[a-c]*";}}, "gm");

//CHECK#1
if (__instance.constructor !== RegExp) {
	$ERROR('#1: __instance = RegExp({toString:function(){return "[a-c]*";}}, "gm"); __instance.constructor === RegExp. Actual: ' + (__instance.constructor));
}

//CHECK#2
if (__instance.source !== "[a-c]*") {
	$ERROR('#2: __instance = RegExp({toString:function(){return "[a-c]*";}}, "gm"); __instance.source === "[a-c]*". Actual: '+ (__instance.source));
}


 }
});

