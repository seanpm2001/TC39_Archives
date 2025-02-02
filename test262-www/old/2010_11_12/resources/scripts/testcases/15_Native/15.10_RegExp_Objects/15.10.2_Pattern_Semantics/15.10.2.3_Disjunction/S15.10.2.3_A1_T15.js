// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.3_A1_T15;
* @section: 15.10.2.3;
* @assertion: The | regular expression operator separates two alternatives. 
* The pattern first tries to match the left Alternative (followed by the sequel of the regular expression).
* If it fails, it tries to match the right Disjunction (followed by the sequel of the regular expression);
* @description: Execute /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.3_A1_T15",

path: "15.10.2.3",

description: "Execute /(Rob)|(Bob)|(Robert)|(Bobby)/.exec(\"Hi Bob\") and check results",

test: function testcase() {
   __executed = /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob");

__expected = ["Bob",undefined,"Bob", undefined, undefined];
__expected.index = 3;
__expected.input = "Hi Bob";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /(Rob)|(Bob)|(Robert)|(Bobby)/.exec("Hi Bob"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

