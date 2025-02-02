// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.15_A5;
 * @section: 15.8.2.15;
 * @assertion: If x is -Infinity, Math.round(x) is -Infinity;
 * @description: Checking if Math.round(x) is -Infinity, where x is -Infinity;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.15_A5",

path: "15.8.2.15",

description: "Checking if Math.round(x) is -Infinity, where x is -Infinity",

test: function testcase() {
   // CHECK#1
var x = -Infinity;
if (Math.round(x) !== -Infinity)
{
	$ERROR("#1: 'var x=-Infinity; Math.round(x) !== -Infinity'");
}

 }
});

