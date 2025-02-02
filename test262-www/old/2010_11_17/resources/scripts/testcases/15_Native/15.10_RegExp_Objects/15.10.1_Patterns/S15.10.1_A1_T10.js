// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.1_A1_T10;
* @section: 15.10.1;
* @assertion: RegExp syntax errors must be caught when matcher(s) compiles;
* @description: Tested RegExp is "++a";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.1_A1_T10",

path: "15.10.1",

description: "Tested RegExp is \"++a\"",

test: function testcase() {
   //CHECK#1
try {
	$ERROR('#1.1: new RegExp("++a") throw SyntaxError. Actual: ' + (new RegExp("++a")));
} catch (e) {
	if ((e instanceof SyntaxError) !== true) {
		$ERROR('#1.2: new RegExp("++a") throw SyntaxError. Actual: ' + (e));
	}
}


 }
});

