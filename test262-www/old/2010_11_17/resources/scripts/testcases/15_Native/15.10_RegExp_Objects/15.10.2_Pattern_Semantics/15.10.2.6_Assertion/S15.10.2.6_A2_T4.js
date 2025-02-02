// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A2_T4;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: ^ evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /^p[a-z]/m.exec("pairs\nmakes\tdouble\npesos") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A2_T4",

path: "15.10.2.6",

description: "Execute /^p[a-z]/m.exec(\"pairs\\nmakes\\tdouble\\npesos\") and check results",

test: function testcase() {
   __executed = /^p[b-z]/m.exec("pairs\nmakes\tdouble\npesos");

__expected = ["pe"];
__expected.index = 19;
__expected.input = "pairs\nmakes\tdouble\npesos";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /^p[b-z]/m.exec("pairs\\nmakes\\tdouble\\npesos"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /^p[b-z]/m.exec("pairs\\nmakes\\tdouble\\npesos"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /^p[b-z]/m.exec("pairs\\nmakes\\tdouble\\npesos"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /^p[b-z]/m.exec("pairs\\nmakes\\tdouble\\npesos"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

