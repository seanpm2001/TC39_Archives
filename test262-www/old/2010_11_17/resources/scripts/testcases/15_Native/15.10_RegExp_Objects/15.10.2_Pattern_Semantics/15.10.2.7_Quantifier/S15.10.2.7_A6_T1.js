// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.7_A6_T1;
* @section: 15.10.2.7;
* @assertion: The production QuantifierPrefix :: { DecimalDigits , }evaluates as follows: 
* i) Let i be the MV of DecimalDigits 
* ii) Return the two results i and \infty;
* @description: Execute /b{2,}c/.exec("aaabbbbcccddeeeefffff") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.7_A6_T1",

path: "15.10.2.7",

description: "Execute /b{2,}c/.exec(\"aaabbbbcccddeeeefffff\") and check results",

test: function testcase() {
   __executed = /b{2,}c/.exec("aaabbbbcccddeeeefffff");

__expected = ["bbbbc"];
__expected.index = 3;
__expected.input = "aaabbbbcccddeeeefffff";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /b{2,}c/.exec("aaabbbbcccddeeeefffff"); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /b{2,}c/.exec("aaabbbbcccddeeeefffff"); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /b{2,}c/.exec("aaabbbbcccddeeeefffff"); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /b{2,}c/.exec("aaabbbbcccddeeeefffff"); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

