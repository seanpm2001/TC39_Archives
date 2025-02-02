// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A3_T21;
* @section: 15.10.2.8;
* @assertion: Parentheses of the form ( Disjunction ) serve both to group the components of the Disjunction pattern together and to save the result of the match. 
* The result can be used either in a backreference (\ followed by a nonzero decimal number), 
* referenced in a replace string, 
* or returned as part of an array from the regular expression matching function;
* @description: Execute /^(A)?(A.*)$/.exec("AA") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A3_T21",

path: "15.10.2.8",

description: "Execute /^(A)?(A.*)$/.exec(\"AA\") and check results",

test: function testcase() {
   __executed = /^(A)?(A.*)$/.exec("AA");

__expected = ["AA","A","A"];
__expected.index = 0;
__expected.input = "AA";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /^(A)?(A.*)$/.exec("AA"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /^(A)?(A.*)$/.exec("AA"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /^(A)?(A.*)$/.exec("AA"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /^(A)?(A.*)$/.exec("AA"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

