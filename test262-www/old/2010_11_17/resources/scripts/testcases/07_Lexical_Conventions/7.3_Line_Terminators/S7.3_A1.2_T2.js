// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A1.2_T2;
 * @section: 7.3;
 * @assertion: CARRIAGE RETURN (U+000D) may occur between any two tokens;
 * @description: Insert real CARRIAGE RETURN between tokens of var x=1;  
*/

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A1.2_T2",

path: "7.3",

description: "Insert real CARRIAGE RETURN between tokens of var x=1",

test: function testcase() {
   //CHECK#1varx
=1;if (x !== 1) {  $ERROR('#1: var\\nx\\n=\\n1\\n; x === 1. Actual: ' + (x));}

 }
});

