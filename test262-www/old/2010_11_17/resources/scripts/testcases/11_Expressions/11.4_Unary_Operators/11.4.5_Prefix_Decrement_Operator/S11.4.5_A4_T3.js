// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.5_A4_T3;
* @section: 11.4.5, 11.6.3;
* @assertion: Operator --x returns ToNumber(x) - 1;
* @description: Type(x) is string primitive or String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.5_A4_T3",

path: "11.4.5, 11.6.3",

description: "Type(x) is string primitive or String object",

test: function testcase() {
   //CHECK#1
var x = "1";
if (--x !== 1 - 1) {
  $ERROR('#1: var x = "1"; --x === 1 - 1. Actual: ' + (--x));
}

//CHECK#2
var x = "x";
if (isNaN(--x) !== true) {
  $ERROR('#2: var x = "x"; --x === Not-a-Number. Actual: ' + (--x));
}

//CHECK#3
var x = new String("-1"); 
if (--x !== -1 - 1) {
  $ERROR('#3: var x = new String("-1"); --x === -1 - 1. Actual: ' + (--x));
}

 }
});

