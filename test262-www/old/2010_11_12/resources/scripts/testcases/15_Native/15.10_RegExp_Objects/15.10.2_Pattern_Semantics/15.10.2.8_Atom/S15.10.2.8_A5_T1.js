// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.8_A5_T1;
* @section: 15.10.2.8;
* @assertion: In case-insignificant matches all characters are implicitly converted to upper case immediately before they are compared;
* @description: Execute /[a-z]+/ig.exec("ABC def ghi") and check results;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.8_A5_T1",

path: "15.10.2.8",

description: "Execute /[a-z]+/ig.exec(\"ABC def ghi\") and check results",

test: function testcase() {
   __string = "ABC def ghi";
__executed = /[a-z]+/ig.exec(__string);

__expected = ["ABC"];
__expected.index = 0;
__expected.input = __string;

//CHECK#1
if (__executed.length !== __expected.length) {
	$ERROR('#1: __string = "ABC def ghi"; __executed = /[a-z]+/ig.exec(__string); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
	$ERROR('#2: __string = "ABC def ghi"; __executed = /[a-z]+/ig.exec(__string); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
	$ERROR('#3: __string = "ABC def ghi"; __executed = /[a-z]+/ig.exec(__string); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
	if (__executed[index] !== __expected[index]) {
		$ERROR('#4: __string = "ABC def ghi"; __executed = /[a-z]+/ig.exec(__string); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
	}
}


 }
});

