// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.16_A4;
 * @section: 15.8.2.16;
 * @assertion: If x is +Infinity, Math.sin(x) is NaN;
 * @description: Checking if Math.sin(+Infinity) is NaN;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.16_A4",

path: "15.8.2.16",

description: "Checking if Math.sin(+Infinity) is NaN",

test: function testcase() {
   // CHECK#1
var x = +Infinity;
if (!isNaN(Math.sin(x)))
{
	$ERROR("#1: 'var x = +Infinity; isNaN(Math.sin(x)) === false'");
}

 }
});

