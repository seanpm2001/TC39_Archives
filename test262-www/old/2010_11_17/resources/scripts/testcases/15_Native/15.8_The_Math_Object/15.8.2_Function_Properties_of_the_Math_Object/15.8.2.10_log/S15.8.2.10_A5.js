// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.2.10_A5;
 * @section: 15.8.2.10;
 * @assertion: If x is +Infinity, Math.log(x) is +Infinity;
 * @description: Checking if Math.log(+Infinity) equals to +Infinity;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.10_A5",

path: "15.8.2.10",

description: "Checking if Math.log(+Infinity) equals to +Infinity",

test: function testcase() {
   // CHECK#1
var x = +Infinity;
if (Math.log(x) !== +Infinity)
{
	$ERROR("#1: 'var x=+Infinity; Math.log(x) !== +Infinity'");
}

 }
});

