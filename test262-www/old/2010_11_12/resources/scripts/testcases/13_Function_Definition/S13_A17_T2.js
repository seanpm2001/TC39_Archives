// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A17_T2;
* @section: 13;
* @assertion: Function call cannot appear in the program before the FunctionExpression appears;
* @description: Trying to call a function before the FunctionExpression appears and then using the FunctionExpression one more time; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A17_T2",

path: "13",

description: "Trying to call a function before the FunctionExpression appears and then using the FunctionExpression one more time",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
    var __result = __func();
	$ERROR("#1: var __result = __func() lead to throwing exception");
} catch(e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: func should throw a TypeError  Actual: ' + (e));  
  }
}
//
//////////////////////////////////////////////////////////////////////////////

// now we reach the __func overwriting by new expression
var __func = function __func(){return "ONE";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
var __result = __func();
if (__result !== "ONE") {
	$ERROR('#2: __result === "ONE". Actual: __result ==='+__result);
}
//
//////////////////////////////////////////////////////////////////////////////

__func = function __func(){return "TWO";};

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
var __result = __func();
if (__result !== "TWO") {
	$ERROR('#3: __result === "TWO". Actual: __result ==='+__result);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

