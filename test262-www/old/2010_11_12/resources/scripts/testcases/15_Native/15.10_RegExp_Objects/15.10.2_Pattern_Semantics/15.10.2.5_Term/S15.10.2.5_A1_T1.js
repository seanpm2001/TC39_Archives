// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.5_A1_T1;
* @section: 15.10.2.5;
* @assertion: An Atom followed by a Quantifier is repeated the number of times specified by the Quantifier;
* @description: Execute /a[a-z]{2,4}/.exec("abcdefghi") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.5_A1_T1",

path: "15.10.2.5",

description: "Execute /a[a-z]{2,4}/.exec(\"abcdefghi\") and check results",

test: function testcase() {
   __executed = /a[a-z]{2,4}/.exec("abcdefghi");

__expected = ["abcde"];
__expected.index = 0;
__expected.input = "abcdefghi";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /a[a-z]{2,4}/.exec("abcdefghi"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /a[a-z]{2,4}/.exec("abcdefghi"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /a[a-z]{2,4}/.exec("abcdefghi"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /a[a-z]{2,4}/.exec("abcdefghi"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

