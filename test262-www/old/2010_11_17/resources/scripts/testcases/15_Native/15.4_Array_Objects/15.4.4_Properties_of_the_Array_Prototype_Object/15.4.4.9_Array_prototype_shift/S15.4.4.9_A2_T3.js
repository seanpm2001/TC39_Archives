// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.9_A2_T3;
 * @section: 15.4.4.9;
 * @assertion: The shift function is intentionally generic. 
 * It does not require that its this value be an Array object;
 * @description: The first element of the array is removed from the array and 
 * returned; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.9_A2_T3",

path: "15.4.4.9",

description: "The first element of the array is removed from the array and",

test: function testcase() {
   var obj = {};
obj.shift = Array.prototype.shift;

//CHECK#1
obj.length = 2.5;
var shift = obj.shift();
if (shift !== undefined) {
  $ERROR('#1: var obj = {}; obj.length = 2.5; obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

//CHECK#2
if (obj.length !== 1) {
  $ERROR('#2: var obj = {}; obj.length = 2.5; obj.shift = Array.prototype.shift; obj.shift(); obj.length === 1. Actual: ' + (obj.length));
} 

//CHECK#3
obj.length = new Number(2);
var shift = obj.shift();
if (shift !== undefined) {
  $ERROR('#11: var obj = {}; obj.length = new Number(2); obj.shift = Array.prototype.shift; obj.shift() === undefined. Actual: ' + (shift));
}

//CHECK#3
if (obj.length !== 1) {
  $ERROR('#12: var obj = {}; obj.length = new Number(2); obj.shift = Array.prototype.shift; obj.shift(); obj.length === 1. Actual: ' + (obj.length));
} 

 }
});

