// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.18_A2;
 * @section: 15.8.2.18;
 * @assertion: If x is +0, Math.tan(x) is +0;
 * @description: Checking if Math.tan(+0) equals to +0;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.18_A2",

path: "15.8.2.18",

description: "Checking if Math.tan(+0) equals to +0",

test: function testcase() {
   // CHECK#1
var x = +0;
if (Math.tan(x) !== +0)
{
	$ERROR("#1: 'var x=+0; Math.tan(x) !== +0'");
}

 }
});

