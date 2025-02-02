// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A15_T2;
* @section: 13;
* @assertion:  ''arguments'' variable overrides ActivationObject.arguments;
* @description: Overriding arguments within functions body; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A15_T2",

path: "13",

description: "Overriding arguments within functions body",

test: function testcase() {
   THE_ANSWER="Answer to Life, the Universe, and Everything";

function __func(){
    var arguments = THE_ANSWER;
    return arguments;
};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(42,42,42) !== THE_ANSWER) {
	$ERROR('#1:  "arguments" variable overrides ActivationObject.arguments');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

