// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.9_A3;
 * @section: 15.8.2.9;
 * @assertion: If x is -0, Math.floor(x) is -0;
 * @description: Checking if Math.floor(x) is -0, where x is -0; 
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.9_A3",

path: "15.8.2.9",

description: "Checking if Math.floor(x) is -0, where x is -0",

test: function testcase() {
   // CHECK#1
var x = -0;
if (Math.floor(x) !== -0)
{
	$ERROR("#1: 'var x = -0; Math.floor(x) !== -0'");
}

 }
});

