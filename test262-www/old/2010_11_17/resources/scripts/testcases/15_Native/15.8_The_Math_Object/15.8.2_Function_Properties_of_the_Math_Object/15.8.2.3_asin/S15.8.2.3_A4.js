// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.3_A4;
 * @section: 15.8.2.3;
 * @assertion: If x is +0, Math.asin(x) is +0;
 * @description: Checking if Math.asin(+0) equals +0;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.3_A4",

path: "15.8.2.3",

description: "Checking if Math.asin(+0) equals +0",

test: function testcase() {
   // CHECK#1
var x = +0;
if (Math.asin(x) !== +0)
{
	$ERROR("#1: 'var x = +0; Math.asin(x) !== +0'");
}

 }
});

