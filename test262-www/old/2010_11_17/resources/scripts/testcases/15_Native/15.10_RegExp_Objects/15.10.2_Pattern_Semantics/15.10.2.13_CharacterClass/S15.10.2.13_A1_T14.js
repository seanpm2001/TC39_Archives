// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A1_T14;
* @section: 15.10.2.13;
* @assertion: The production CharacterClass :: [ [lookahead \notin {^}] ClassRanges ] evaluates by evaluating ClassRanges to obtain a CharSet and returning that CharSet and the boolean false;
* @description: Execute /[*&$]{3}/.exec("123*&$abc") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A1_T14",

path: "15.10.2.13",

description: "Execute /[*&$]{3}/.exec(\"123*&$abc\") and check results",

test: function testcase() {
   __executed = /[*&$]{3}/.exec("123*&$abc");

__expected = ["*&$"];
__expected.index = 3;
__expected.input = "123*&$abc";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /[*&$]{3}/.exec("123*&$abc"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /[*&$]{3}/.exec("123*&$abc"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /[*&$]{3}/.exec("123*&$abc"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /[*&$]{3}/.exec("123*&$abc"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

