// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.6_A2_T3;
 * @section: 15.4.4.6;
 * @assertion: The pop function is intentionally generic. 
 * It does not require that its this value be an Array object;
 * @description: The last element ToUint32(length) - 1 of the array is removed from the array 
 * and returned;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.6_A2_T3",

path: "15.4.4.6",

description: "The last element ToUint32(length) - 1 of the array is removed from the array",

test: function testcase() {
   var obj = {};
obj.pop = Array.prototype.pop;

//CHECK#1
obj.length = 2.5;
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#1: var obj = {}; obj.length = 2.5; obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#2
if (obj.length !== 1) {
  $ERROR('#2: var obj = {}; obj.length = 2.5; obj.pop = Array.prototype.pop; obj.pop(); obj.length === 1. Actual: ' + (obj.length));
} 

//CHECK#3
obj.length = new Number(2);
var pop = obj.pop();
if (pop !== undefined) {
  $ERROR('#11: var obj = {}; obj.length = new Number(2); obj.pop = Array.prototype.pop; obj.pop() === undefined. Actual: ' + (pop));
}

//CHECK#3
if (obj.length !== 1) {
  $ERROR('#12: var obj = {}; obj.length = new Number(2); obj.pop = Array.prototype.pop; obj.pop(); obj.length === 1. Actual: ' + (obj.length));
} 

 }
});

