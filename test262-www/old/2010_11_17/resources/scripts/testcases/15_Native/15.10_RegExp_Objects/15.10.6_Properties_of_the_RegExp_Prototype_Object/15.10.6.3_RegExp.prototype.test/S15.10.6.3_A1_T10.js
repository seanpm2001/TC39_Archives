// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T10;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /1|12/ and tested string is 1.01;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T10",

path: "15.10.6.3",

description: "RegExp is /1|12/ and tested string is 1.01",

test: function testcase() {
   var __string = 1.01;
__re = /1|12/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = 1.01;__re = /1|12/; __re.test(__string) === (__re.exec(__string) !== null)');
}


 }
});

