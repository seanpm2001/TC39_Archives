// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4_A1.1_T4;
 * @section: 15.4, 11.2.1;
 * @assertion: A property name P (in the form of a string value) is an array index
 * if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1;
 * @description: Checking for string primitive; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4_A1.1_T4",

path: "15.4, 11.2.1",

description: "Checking for string primitive",

test: function testcase() {
   //CHECK#1
x = [];
x["0"] = 0;
if (x[0] !== 0) {
  $ERROR('#1: x = []; x["0"] = 0; x[0] === 0. Actual: ' + (x[0]));  
} 

//CHECK#2
y = [];
y["1"] = 1;
if (y[1] !== 1) {
  $ERROR('#2: y = []; y["1"] = 1; y[1] === 1. Actual: ' + (y[1]));  
}


 }
});

