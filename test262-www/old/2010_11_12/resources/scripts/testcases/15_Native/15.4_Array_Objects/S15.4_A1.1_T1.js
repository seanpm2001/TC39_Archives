// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4_A1.1_T1;
 * @section: 15.4, 11.2.1;
 * @assertion: A property name P (in the form of a string value) is an array index
 * if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1;
 * @description: Checking for boolean primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4_A1.1_T1",

path: "15.4, 11.2.1",

description: "Checking for boolean primitive",

test: function testcase() {
   //CHECK#1
x = [];
x[true] = 1;
if (x[1] !== undefined) {
  $ERROR('#1: x = []; x[true] = 1; x[1] === undefined. Actual: ' + (x[1]));  
}

//CHECK#2
if (x["true"] !== 1) {
  $ERROR('#2: x = []; x[true] = 1; x["true"] === 1. Actual: ' + (x["true"]));  
}

//CHECK#3
x[false] = 0;
if (x[0] !== undefined) {
  $ERROR('#3: x = []; x[true] = 1; x[false] = 0; x[0] === undefined. Actual: ' + (x[0]));  
}

//CHECK#4
if (x["false"] !== 0) {
  $ERROR('#4: x = []; x[false] = 1; x["false"] === 0. Actual: ' + (x["false"]));  
}

 }
});

