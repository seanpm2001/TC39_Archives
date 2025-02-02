// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.7_A3;
 * @section: 15.8.2.7;
 * @assertion: If x is -0, Math.cos(x) is 1;
 * @description: Checking if Math.cos(-0) is 1;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.7_A3",

path: "15.8.2.7",

description: "Checking if Math.cos(-0) is 1",

test: function testcase() {
   // CHECK#1
var x = -0;
if (Math.cos(x) !== 1)
{
	$ERROR("#1: 'var x = -0; Math.cos(x) !== 1'");
}

 }
});

