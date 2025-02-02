// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.5_A20;
 * @section: 15.8.2.5;
 * @assertion: If y is equal to +Infinity and x is equal to +Infinity, Math.atan2(y,x) is an implementation-dependent approximation to +PI/4;
 * @description: Checking if Math.atan2(y,x) is an approximation to +PI/4, where y is equal to +Infinity and x is equal to +Infinity;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.5_A20",

path: "15.8.2.5",

description: "Checking if Math.atan2(y,x) is an approximation to +PI/4, where y is equal to +Infinity and x is equal to +Infinity",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js"); 

// CHECK#1
//prec = 0.00000000000001;
y = +Infinity;
x = +Infinity;

if (!isEqual(Math.atan2(y,x),(Math.PI)/4))
	$ERROR("#1: Math.abs(Math.atan2(" + y + ", " + x + ") - (Math.PI/4)) >= " + prec);

 }
});

