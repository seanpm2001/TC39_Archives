// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.6_A3_T14;
* @section: 15.10.2.6;
* @assertion: The production Assertion :: \b evaluates by returning an internal AssertionTester closure that takes a State argument x and performs the ...;
* @description: Execute /e\b/.exec("pilot\nsoviet robot\topenoffic\u0065") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.6_A3_T14",

path: "15.10.2.6",

description: "Execute /e\\b/.exec(\"pilot\\nsoviet robot\\topenoffic\\u0065\") and check results",

test: function testcase() {
   __executed = /e\b/.exec("pilot\nsoviet robot\topenoffic\u0065");

__expected = ["e"];
__expected.index = 28;
__expected.input = "pilot\nsoviet robot\topenoffice";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /e\\b/.exec("pilot\\nsoviet robot\\topenoffic\\u0065"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /e\\b/.exec("pilot\\nsoviet robot\\topenoffic\\u0065"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /e\\b/.exec("pilot\\nsoviet robot\\topenoffic\\u0065"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /e\\b/.exec("pilot\\nsoviet robot\\topenoffic\\u0065"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

