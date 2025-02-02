// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A9.1_T1;
* @section: 13.2.1;
* @assertion: When the [[Call]] property for a Function object is called,
* the body is evaluated and if evaluation result has type "normal", then "undefined" is returned;
* @description: Declaring a function with "function __func()" and no "return" in the function body;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A9.1_T1",

path: "13.2.1",

description: "Declaring a function with \"function __func()\" and no \"return\" in the function body",

test: function testcase() {
   var x;

function __func(){
    x = true;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func() !== undefined) {
	$ERROR('#1: __func() === undefined. Actual: __func() ==='+__func());
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!x) {
	$ERROR('#2: x === true. Actual: x === '+x);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

