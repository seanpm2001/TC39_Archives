// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T12;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is "\u0042" and flags is {toString:void 0, valueOf:function(){throw "invalof";} };
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T12",

path: "15.10.4.1",

description: "Pattern is \"\\u0042\" and flags is {toString:void 0, valueOf:function(){throw \"invalof\";} }",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp("\\u0042", {toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (new RegExp("\u0042", {toString:void 0, valueOf:function(){throw "invalof";}})));
} catch (e) {
	if (e !== "invalof" ) {
		$ERROR('#1.2: new RegExp("\\u0042", {toString:void 0, valueOf:function(){throw "invalof";}}) throw "invalof". Actual: ' + (e));
	}
}


 }
});

