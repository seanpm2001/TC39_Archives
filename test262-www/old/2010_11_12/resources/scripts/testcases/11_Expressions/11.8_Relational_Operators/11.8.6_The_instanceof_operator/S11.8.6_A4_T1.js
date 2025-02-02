// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A4_T1;
* @section: 11.8.6;
* @assertion: Only constructor call (with "new" keyword) makes instance;
* @description: Checking Boolean case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A4_T1",

path: "11.8.6",

description: "Checking Boolean case",

test: function testcase() {
   //CHECK#1
if (false instanceof Boolean) {
	$ERROR('#1: false is not instanceof Boolean');
}

//CHECK#2
if (Boolean(false) instanceof Boolean) {
	$ERROR('#2: Boolean(false) is not instanceof Boolean');
}

//CHECK#3
if (new Boolean instanceof Boolean !== true) {
	$ERROR('#3: new Boolean instanceof Boolean');
}


 }
});

