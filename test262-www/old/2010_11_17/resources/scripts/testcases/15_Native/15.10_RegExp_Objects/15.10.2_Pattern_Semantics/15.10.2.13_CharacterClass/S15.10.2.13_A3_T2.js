// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A3_T2;
* @section: 15.10.2.13;
* @assertion: Inside a CharacterClass, \b means the backspace character;
* @description: Execute /c[\b]{3}d/.exec("abc\b\b\bdef") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A3_T2",

path: "15.10.2.13",

description: "Execute /c[\\b]{3}d/.exec(\"abc\\b\\b\\bdef\") and check results",

test: function testcase() {
   __executed = /c[\b]{3}d/.exec("abc\b\b\bdef");

__expected = ["c\b\b\bd"];
__expected.index = 2;
__expected.input = "abc\b\b\bdef";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /c[\\b]{3}d/.exec("abc\\b\\b\\bdef"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

