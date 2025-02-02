// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S14_A5_T1;
* @section: 14;
* @assertion: The Identifer within a FunctionDeclaration can be written in both letters and unicode;
* @description: Declaring a function with "function __\u0066\u0075\u006e\u0063(){return "both"}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S14_A5_T1",

path: "14",

description: "Declaring a function with \"function __\\u0066\\u0075\\u006e\\u0063(){return \"both\"}\"",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func() !== "both") {
	$ERROR('#1: __func() === "both". Actual:  __func() ==='+ __func()  );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){return "ascii"};
function \u005f\u005f\u0066\u0075\u006e\u0063(){return "unicode"};//__func in unicode
function __\u0066\u0075\u006e\u0063(){return "both"};//__func in unicode

 }
});

