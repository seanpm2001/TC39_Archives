// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A1_T4;
* @section: 15.10.6.3;
* @assertion: Equivalent to the expression RegExp.prototype.exec(string) != null;
* @description: RegExp is /a[a-z]{2,4}?/ and tested string is {toString:function(){return "abcdefghi";}};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A1_T4",

path: "15.10.6.3",

description: "RegExp is /a[a-z]{2,4}?/ and tested string is {toString:function(){return \"abcdefghi\";}}",

test: function testcase() {
   var __string = {toString:function(){return "abcdefghi";}};
__re = /a[a-z]{2,4}?/;

//CHECK#0
if (__re.test(__string) !== (__re.exec(__string) !== null)) {
	$ERROR('#0: var __string = {toString:function(){return "abcdefghi";}}; __re = /a[a-z]{2,4}?/; __re.test(__string) === (__re.exec(__string) !== null)');
}


 }
});

