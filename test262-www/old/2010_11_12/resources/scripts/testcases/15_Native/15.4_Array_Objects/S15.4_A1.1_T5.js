// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4_A1.1_T5;
 * @section: 15.4, 11.2.1;
 * @assertion: A property name P (in the form of a string value) is an array index
 * if and only if ToString(ToUint32(P)) is equal to P and ToUint32(P) is not equal to 2^32 - 1;
  * @description: Checking for null and undefined; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4_A1.1_T5",

path: "15.4, 11.2.1",

description: "Checking for null and undefined",

test: function testcase() {
   //CHECK#1
x = [];
x[null] = 0;
if (x[0] !== undefined) {
  $ERROR('#1: x = []; x[null] = 1; x[0] === undefined. Actual: ' + (x[0]));  
}

//CHECK#2
if (x["null"] !== 0) {
  $ERROR('#2: x = []; x[null] = 1; x["null"] === 0. Actual: ' + (x["null"]));  
}

//CHECK#3
y = [];
y[undefined] = 0;
if (y[0] !== undefined) {
  $ERROR('#3: y = []; y[undefined] = 0; y[0] === undefined. Actual: ' + (y[0]));  
}

//CHECK#4
if (y["undefined"] !== 0) {
  $ERROR('#4: y = []; y[undefined] = 1; y["undefined"] === 0. Actual: ' + (y["undefined"]));  
}

 }
});

