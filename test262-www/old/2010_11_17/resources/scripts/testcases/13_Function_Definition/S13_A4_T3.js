// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A4_T3;
* @section: 13;
* @assertion: The production FunctionDeclaration: "function Identifier ( FormalParameterList_opt ) { FunctionBody }" is processed by function declarations;
* @description: Declaring a function that uses arithmetical operators within its "return" Expression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A4_T3",

path: "13",

description: "Declaring a function that uses arithmetical operators within its \"return\" Expression",

test: function testcase() {
   function __func(arg1, arg2, arg3){return arg1+=(arg2+=arg3);};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1 
if (typeof __func !== "function") {
	$ERROR('#1: typeof __func === "function". Actual: typeof __func ==='+typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__func(10, 20, 30) !== 60) {
	$ERROR('#2: __func(10, 20, 30) === 60. Actual: __func(10,20,30) ==='+__func(10,20,30));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

