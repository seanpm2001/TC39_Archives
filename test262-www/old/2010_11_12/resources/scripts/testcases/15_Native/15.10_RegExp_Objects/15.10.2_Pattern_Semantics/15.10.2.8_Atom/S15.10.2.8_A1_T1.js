// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A1_T1;
* @section: 15.10.2.8;
* @assertion: The form (?= Disjunction ) specifies a zero-width positive lookahead. 
* In order for it to succeed, the pattern inside Disjunction must match at the current position, but the current position is not advanced before matching the sequel. 
* If Disjunction can match at the current position in several ways, only the first one is tried;
* @description: Execute /(?=(a+))/.exec("baaabac") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A1_T1",

path: "15.10.2.8",

description: "Execute /(?=(a+))/.exec(\"baaabac\") and check results",

test: function testcase() {
   __executed = /(?=(a+))/.exec("baaabac");

__expected = ["", "aaa"];
__expected.index = 1;
__expected.input = "baaabac";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(?=(a+))/.exec("baaabac"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(?=(a+))/.exec("baaabac"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(?=(a+))/.exec("baaabac"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(?=(a+))/.exec("baaabac"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

