// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A1_T2;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: { DecimalDigits , DecimalDigits } evaluates as ...;
* @description: Execute /\d{2,4}/.test("the 7 movie") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A1_T2",

path: "15.10.2.7",

description: "Execute /\\d{2,4}/.test(\"the 7 movie\") and check results",

test: function testcase() {
   __executed = /\d{2,4}/.test("the 7 movie");

//CHECK#1
if (__executed) {
	$ERROR('#1: /\\d{2,4}/.test("the 7 movie") === false');
}


 }
});

