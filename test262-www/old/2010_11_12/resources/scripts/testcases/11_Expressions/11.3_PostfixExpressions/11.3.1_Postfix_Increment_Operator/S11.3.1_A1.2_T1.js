// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.3.1_A1.2_T1;
* @section: 11.3.1, 11.6.3, 7.2;
* @assertion: White Space between LeftHandSideExpression and "++" are allowed;
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.3.1_A1.2_T1",

path: "11.3.1, 11.6.3, 7.2",

description: "Checking by using eval",

test: function testcase() {
   //CHECK#1
if (eval("var x = 0; x\u0009++; x") !== 1) {
	$ERROR('#1: var x = 0; x\\u0009++; x === 1. Actual: ' + (x));
}

//CHECK#2
if (eval("var x = 0; x\u000B++; x") !== 1) {
	$ERROR('#2: var x = 0; x\\u000B++; x === 1. Actual: ' + (x));	
}

//CHECK#3
if (eval("var x = 0; x\u000C++; x") !== 1) {
	$ERROR('#3: var x = 0; x\\u000C++; x === 1. Actual: ' + (x));
}

//CHECK#4
if (eval("var x = 0; x\u0020++; x") !== 1) {
	$ERROR('#4: var x = 0; x\\u0020++; x === 1. Actual: ' + (x));
}

//CHECK#5
if (eval("var x = 0; x\u00A0++; x") !== 1) {
	$ERROR('#5: var x = 0; x\\u00A0++; x === 1. Actual: ' + (x));
}

//CHECK#6
if (eval("var x = 0; x\u0009\u000B\u000C\u0020\u00A0++; x") !== 1) {
    $ERROR('#6: var x = 0; x\\u0009\\u000B\\u000C\\u0020\\u00A0++; x === 1. Actual: ' + (x));
}

 }
});

