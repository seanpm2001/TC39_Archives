// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A6_T6;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: { DecimalDigits , }evaluates as follows: 
* i) Let i be the MV of DecimalDigits 
* ii) Return the two results i and \infty;
* @description: Execute /x{1,2}x{1,}/.exec("xxxxxxx") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A6_T6",

path: "15.10.2.7",

description: "Execute /x{1,2}x{1,}/.exec(\"xxxxxxx\") and check results",

test: function testcase() {
   __executed = /x{1,2}x{1,}/.exec("xxxxxxx");

__expected = ["xxxxxxx"];
__expected.index = 0;
__expected.input = "xxxxxxx";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /x{1,2}x{1,}/.exec("xxxxxxx"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /x{1,2}x{1,}/.exec("xxxxxxx"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /x{1,2}x{1,}/.exec("xxxxxxx"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /x{1,2}x{1,}/.exec("xxxxxxx"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

