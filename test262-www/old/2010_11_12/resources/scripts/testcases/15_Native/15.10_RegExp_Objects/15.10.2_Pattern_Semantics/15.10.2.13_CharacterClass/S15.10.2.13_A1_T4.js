// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.13_A1_T4;
* @section: 15.10.2.13;
* @assertion: The production CharacterClass :: [ [lookahead \notin {^}] ClassRanges ] evaluates by evaluating ClassRanges to obtain a CharSet and returning that CharSet and the boolean false;
* @description: Execute /q[ax-zb](?=\s+)/.exec("tqaqy ") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.13_A1_T4",

path: "15.10.2.13",

description: "Execute /q[ax-zb](?=\\s+)/.exec(\"tqaqy \") and check results",

test: function testcase() {
   __executed = /q[ax-zb](?=\s+)/.exec("tqaqy ");

__expected = ["qy"];
__expected.index = 3;
__expected.input = "tqaqy ";

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __executed = /q[ax-zb](?=\\s+)/.exec("tqaqy "); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __executed = /q[ax-zb](?=\\s+)/.exec("tqaqy "); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __executed = /q[ax-zb](?=\\s+)/.exec("tqaqy "); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __executed = /q[ax-zb](?=\\s+)/.exec("tqaqy "); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

