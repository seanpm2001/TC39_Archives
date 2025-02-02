// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.14_A1;
 * @section: 15.8.2.14;
 * @assertion: Math.random() returns a number value with positive sign, greater than or equal to 0 but less than 1;
 * @description: Checking if Math.random() is a number between 0 and 1, calling Math.random() 100 times;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.14_A1",

path: "15.8.2.14",

description: "Checking if Math.random() is a number between 0 and 1, calling Math.random() 100 times",

test: function testcase() {
   // CHECK#1
for (i = 0; i < 100; i++)
{
	val = Math.random();
	if (val < 0 || val >= 1)
	{
		$ERROR("#1: Math.random() = " + val);
	}
}

 }
});

