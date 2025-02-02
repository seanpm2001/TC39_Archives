// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T3;
 * @section: 15.1.2.2, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for undefined and null;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T3",

path: "15.1.2.2, 9.8",

description: "Checking for undefined and null",

test: function testcase() {
   //CHECK#1
if (!(isNaN(parseInt(undefined)) && isNaN(parseInt("NaN")))) {
  $ERROR('#1: parseInt(undefined) === Not-a-Number; parseInt("NaN") === Not-a-Number. Actual: ' + (parseInt("NaN")));
}

//CHECK#2
if (!(isNaN(parseInt(null)) && isNaN(parseInt("NaN")))) {
  $ERROR('#2: parseInt(null) === Not-a-Number; parseInt("NaN") === Not-a-Number. Actual: ' + (parseInt("NaN")));
}

//CHECK#3
if (String(parseInt(undefined)) !== "NaN") {
  $ERROR('#3: String(parseInt(undefined)) === "NaN". Actual: ' + (String(parseInt(undefined))));
}

//CHECK#4
if (String(parseInt(null)) !== "NaN") {
  $ERROR('#4: String(parseInt(null)) === "NaN". Actual: ' + (String(parseInt(null))));
}

 }
});

