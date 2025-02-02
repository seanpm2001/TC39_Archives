// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A11;
* @section: 12.6.1;
* @assertion: Block "{}" in a "do-while" Expression is evaluated to true;
* @description: Checking if execution of "do {} while({})" passes;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A11",

path: "12.6.1",

description: "Checking if execution of \"do {} while({})\" passes",

test: function testcase() {
   do {
    var __in__do=1;
    if(__in__do)break;
} while({});

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__in__do !== 1) {
	$ERROR('#1: "{}" in do-while expression evaluates to true');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

