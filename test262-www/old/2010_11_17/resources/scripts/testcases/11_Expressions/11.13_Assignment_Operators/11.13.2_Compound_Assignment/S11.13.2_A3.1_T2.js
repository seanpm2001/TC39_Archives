// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A3.1_T2;
 * @section: 11.13.2;
 * @assertion: Operator x @= y uses PutValue(x, x @ y);
 * @description: Checking Expression and Variable statements for x /= y;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A3.1_T2",

path: "11.13.2",

description: "Checking Expression and Variable statements for x /= y",

test: function testcase() {
   //CHECK#1
var x = 1;
x /= -1; 
if (x !== -1) {
  $ERROR('#1: var x = 1; x /= -1; x === -1. Actual: ' + (x));
}

//CHECK#2
y = 1;
y /= -1;
if (y !== -1) {
  $ERROR('#2: y = 1; y /= -1; y === -1. Actual: ' + (y));
}

 }
});

