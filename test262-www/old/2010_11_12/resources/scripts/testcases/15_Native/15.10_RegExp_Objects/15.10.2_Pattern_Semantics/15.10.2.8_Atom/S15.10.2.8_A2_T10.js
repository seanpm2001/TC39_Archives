// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A2_T10;
* @section: 15.10.2.8;
* @assertion: The form (?! Disjunction ) specifies a zero-width negative lookahead. 
* In order for it to succeed, the pattern inside Disjunction must fail to match at the current position. 
* The current position is not advanced before matching the sequel;
* @description: Execute /(?!a|b)|c/.exec("bc") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A2_T10",

path: "15.10.2.8",

description: "Execute /(?!a|b)|c/.exec(\"bc\") and check results",

test: function testcase() {
   __executed = /(?!a|b)|c/.exec("bc");

__expected = [""];
__expected.index = 1;
__expected.input = "bc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(?!a|b)|c/.exec("bc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(?!a|b)|c/.exec("bc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(?!a|b)|c/.exec("bc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(?!a|b)|c/.exec("bc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

