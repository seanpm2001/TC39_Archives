// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T5;
 * @section: 15.1.2.2, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for Number object;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T5",

path: "15.1.2.2, 9.8",

description: "Checking for Number object",

test: function testcase() {
   //CHECK#1
if (parseInt(new Number(-1)) !== parseInt("-1")) {
  $ERROR('#1: parseInt(new Number(-1)) === parseInt("-1"). Actual: ' + (parseInt(new Number(-1))));
}

//CHECK#2
if (String(parseInt(new Number(Infinity))) !== "NaN") {
  $ERROR('#2: String(parseInt(new Number(Infinity))) === "NaN". Actual: ' + (String(parseInt(new Number(Infinity)))));
}

//CHECK#3
if (String(parseInt(new Number(NaN))) !== "NaN") {
  $ERROR('#3: String(parseInt(new Number(NaN))) === "NaN". Actual: ' + (String(parseInt(new Number(NaN)))));
}

 }
});

