// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T10;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is true and flags is "m";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T10",

path: "15.10.4.1",

description: "Pattern is true and flags is \"m\"",

test: function testcase() {
   __re = new RegExp(true,"m");

//CHECK#1
if (__re.ignoreCase !== false) {
	$ERROR('#1: __re = new RegExp(true,"m"); __re.ignoreCase === false. Actual: ' + (__re.ignoreCase));
}

//CHECK#2
if (__re.multiline !== true) {
	$ERROR('#2: __re = new RegExp(true,"m"); __re.multiline === true. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== false) {
	$ERROR('#3: __re = new RegExp(true,"m"); __re.global === false. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.lastIndex !== 0) {
	$ERROR('#4: __re = new RegExp(true,"m"); __re.lastIndex === 0. Actual: ' + (__re.lastIndex));
}

//CHECK#5
if (typeof __re.source === "undefined") {
	$ERROR('#5: __re = new RegExp(true,"m"); typeof __re.source !== "undefined"');
}


 }
});

