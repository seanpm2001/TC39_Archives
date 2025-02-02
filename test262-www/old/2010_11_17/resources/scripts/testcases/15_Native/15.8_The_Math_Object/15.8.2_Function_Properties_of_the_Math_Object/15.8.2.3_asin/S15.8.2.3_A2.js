// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.3_A2;
 * @section: 15.8.2.3;
 * @assertion: If x is greater than 1, Math.asin(x) is NaN;
 * @description: Checking if Math.asin(x) is NaN, where x is greater than 1;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.3_A2",

path: "15.8.2.3",

description: "Checking if Math.asin(x) is NaN, where x is greater than 1",

test: function testcase() {
   // CHECK#1
var x = 1.000000000000001;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#1: 'var x = 1.000000000000001; isNaN(Math.asin(x)) === false'");
}

// CHECK#2
x = 2;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#2: 'x = 2; isNaN(Math.asin(x)) === false'");
}

// CHECK#3
x = +Infinity;
if (!isNaN(Math.asin(x)))
{
	$ERROR("#3: 'x = +Infinity; isNaN(Math.asin(x)) === false'");
}

 }
});

