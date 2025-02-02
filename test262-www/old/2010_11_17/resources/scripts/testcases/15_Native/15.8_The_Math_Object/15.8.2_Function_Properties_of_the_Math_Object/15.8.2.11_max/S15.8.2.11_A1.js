// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.11_A1;
 * @section: 15.8.2.11;
 * @assertion: If no arguments are given, Math.max() is -Infinity;
 * @description: Checking if Math.max() equals to -Infinity;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.11_A1",

path: "15.8.2.11",

description: "Checking if Math.max() equals to -Infinity",

test: function testcase() {
   // CHECK#1
if (Math.max() != -Infinity)
{
	$ERROR("#1: 'Math.max() != -Infinity'");
}

 }
});

