// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A1_T2;
 * @section: 15.1.2.3, 9.8;
 * @assertion: Operator use ToString;
 * @description: Checking for number primitive;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A1_T2",

path: "15.1.2.3, 9.8",

description: "Checking for number primitive",

test: function testcase() {
   //CHECK#1
if (parseFloat(-1.1) !== parseFloat("-1.1")) {
  $ERROR('#1: parseFloat(-1.1) === parseFloat("-1.1"). Actual: ' + (parseFloat(-1.1)));
}

//CHECK#2
if (parseFloat(Infinity) !== parseFloat("Infinity")) {
  $ERROR('#2: parseFloat(Infinity) === parseFloat("Infinity"). Actual: ' + (parseFloat(Infinity)));
}

//CHECK#3
if (String(parseFloat(NaN)) !== "NaN") {
  $ERROR('#3: String(parseFloat(NaN)) === "NaN". Actual: ' + (String(parseFloat(NaN))));
}

//CHECK#4
if (parseFloat(.01e+2) !== parseFloat(".01e+2")) {
  $ERROR('#4: parseFloat(.01e+2) === parseFloat(".01e+2"). Actual: ' + (parseFloat(.01e+2)));
}

//CHECK#5
if (parseFloat(-0) !== 0) {
  $ERROR('#5: parseFloat(-0) === 0. Actual: ' + (parseFloat(-0)));
} else {
  if (1 / parseFloat(-0) !== Number.POSITIVE_INFINITY) {
    $ERROR('#5: parseFloat(-0) === +0. Actual: ' + (parseFloat(-0)));
  }
}    

 }
});

