// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.7_A1;
 * @section: 15.8.2.7;
 * @assertion: If x is NaN, Math.cos(x) is NaN;
 * @description: Checking if Math.cos(NaN) is NaN;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.7_A1",

path: "15.8.2.7",

description: "Checking if Math.cos(NaN) is NaN",

test: function testcase() {
   // CHECK#1
var x = NaN;
if (!isNaN(Math.cos(x)))
{
	$ERROR("#1: 'var x=NaN; isNaN(Math.cos(x)) === false'");
}

 }
});

