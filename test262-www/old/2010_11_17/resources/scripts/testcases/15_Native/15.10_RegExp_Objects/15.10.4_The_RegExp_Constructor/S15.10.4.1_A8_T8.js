// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T8;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is {toString:function(){throw "intostr";} } and flags is "error";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T8",

path: "15.10.4.1",

description: "Pattern is {toString:function(){throw \"intostr\";} } and flags is \"error\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp({toString:function(){throw "intostr";}}, "error") throw "intostr". Actual: ' + (new RegExp({toString:function(){throw "intostr";}}, "error")));
} catch (e) {
	if (e !== "intostr" ) {
		$ERROR('#1.2: new RegExp({toString:function(){throw "intostr";}}, "error") throw "intostr". Actual: ' + (e));
	}
}


 }
});

