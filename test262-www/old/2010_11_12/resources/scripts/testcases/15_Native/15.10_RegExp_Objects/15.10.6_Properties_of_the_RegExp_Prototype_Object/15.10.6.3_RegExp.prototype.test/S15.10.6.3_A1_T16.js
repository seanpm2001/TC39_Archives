// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T16;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /undefined/ and call test() without arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T16",

path: "15.10.6.3",

description: "RegExp is /undefined/ and call test() without arguments",

test: function testcase() {
   __re = /undefined/;

//CHECK#0
if (__re.test() !== (__re.exec() !== null)) {
	$ERROR('#0: __re = /undefined/; __re.test() === (__re.exec() !== null)');
}


 }
});

