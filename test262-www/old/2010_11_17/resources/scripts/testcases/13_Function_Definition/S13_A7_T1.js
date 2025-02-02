// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A7_T1;
* @section: 13;
* @assertion: The FunctionBody must be SourceElements;
* @description: Using only SourceElements within the FunctionBody;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A7_T1",

path: "13",

description: "Using only SourceElements within the FunctionBody",

test: function testcase() {
   function __func(){'ground control to major tom'};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __func !== "function") {
	$ERROR('#1: typeof __func === "function". Actual: typeof __func ==='+typeof __func);
}
//
//////////////////////////////////////////////////////////////////////////////

function __func__2(){b};
//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof __func__2 !== "function") {
	$ERROR('#2: typeof __func__2 === "function". Actual: typeof __func__2 ==='+typeof __func__2);
}
//
//////////////////////////////////////////////////////////////////////////////

function __func__3(){1};
//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __func__3 !== "function") {
	$ERROR('#3: typeof __func__3 === "function". Actual: typeof __func__3 ==='+typeof __func__3);
}
//
//////////////////////////////////////////////////////////////////////////////

function __func__4(){1+c};
//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (typeof __func__4 !== "function") {
	$ERROR('#4: typeof __func__4 === "function". Actual: typeof __func__4 ==='+typeof __func__4);
}
//
//////////////////////////////////////////////////////////////////////////////

function __func__5(){inc(d)};
//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (typeof __func__5 !== "function") {
	$ERROR('#5: typeof __func__5 === "function". Actual: typeof __func__5 ==='+typeof __func__5);
}
//
//////////////////////////////////////////////////////////////////////////////

function __func__6(){var \u0042 = 1;};
//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (typeof __func__6 !== "function") {
	$ERROR('#6: typeof __func__6 === "function". Actual: typeof __func__6 ==='+typeof __func__6);
}
//
//////////////////////////////////////////////////////////////////////////////

//function __func__7(){var \u003d = 1;};
////////////////////////////////////////////////////////////////////////////////
////CHECK#7
//if (typeof __func__7 !== "function") {
//	$ERROR('#7: The FunctionBody must be SourceElements');
//}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

