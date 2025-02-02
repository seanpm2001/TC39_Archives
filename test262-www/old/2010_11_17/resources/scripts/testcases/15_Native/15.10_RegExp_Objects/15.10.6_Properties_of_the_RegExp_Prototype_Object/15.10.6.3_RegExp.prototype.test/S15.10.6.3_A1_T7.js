// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T7;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /[a-z]/ and tested string is {toString:function(){throw "intostr";}};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T7",

path: "15.10.6.3",

description: "RegExp is /[a-z]/ and tested string is {toString:function(){throw \"intostr\";}}",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: /[a-z]/.test({toString:function(){throw "intostr";}}) throw "intostr". Actual: ' + (/[a-z]/.test({toString:function(){throw "intostr";}})));
} catch (e) {
	if (e !== "intostr") {
		$ERROR('#1.2: /[a-z]/.test({toString:function(){throw "intostr";}}) throw "intostr". Actual: ' + (e));
	}
}


 }
});

