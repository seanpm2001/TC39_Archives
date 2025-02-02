// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A4_T6;
 * @section: 15.1.2.3, 9.3.1;
 * @assertion: Compute the longest prefix of Result(2), which might be Result(2) itself, 
 * which satisfies the syntax of a StrDecimalLiteral;
 * @description: Checking . DecimalDigits ExponentPart_opt;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A4_T6",

path: "15.1.2.3, 9.3.1",

description: "Checking . DecimalDigits ExponentPart_opt",

test: function testcase() {
   //CHECK#1
if (parseFloat("+.1string") !== 0.1) {
  $ERROR('#1: parseFloat("+.1string") === 0.1. Actual: ' + (parseFloat("+.1string")));
}

//CHECK#2
if (parseFloat(".01string") !== 0.01) {
  $ERROR('#2: parseFloat(".01string") === 0.01. Actual: ' + (parseFloat(".01string")));
}

//CHECK#3
if (parseFloat("+.22e-1string") !== 0.022) {
  $ERROR('#3: parseFloat("+.22e-1string") === 0.022. Actual: ' + (parseFloat("+.22e-1string")));
}

 }
});

