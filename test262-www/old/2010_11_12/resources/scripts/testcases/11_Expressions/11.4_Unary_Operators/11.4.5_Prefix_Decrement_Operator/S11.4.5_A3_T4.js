// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.5_A3_T4;
* @section: 11.4.5, 11.6.3;
* @assertion: Operator --x returns x = ToNumber(x) - 1;
* @description: Type(x) is undefined or null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.5_A3_T4",

path: "11.4.5, 11.6.3",

description: "Type(x) is undefined or null",

test: function testcase() {
   //CHECK#1
var x; 
--x;
if (isNaN(x) !== true) {
  $ERROR('#1: var x; --x; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
var x = null; 
--x;
if (x !== -1) {
  $ERROR('#2: var x = null; --x; x === -1. Actual: ' + (x));
}

 }
});

