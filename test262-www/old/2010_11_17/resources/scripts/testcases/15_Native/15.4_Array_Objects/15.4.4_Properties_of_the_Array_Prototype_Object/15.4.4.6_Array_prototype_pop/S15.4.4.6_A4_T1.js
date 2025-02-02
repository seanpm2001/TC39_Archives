// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.6_A4_T1;
 * @section: 15.4.4.6, 8.6.2.1, 8.6.2.5;
 * @assertion: [[Get]], [[Delete]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.6_A4_T1",

path: "15.4.4.6, 8.6.2.1, 8.6.2.5",

description: "[[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype",

test: function testcase() {
   Array.prototype[1] = 1;
var x = [0];
x.length = 2;

//CHECK#1
var pop = x.pop();
if (pop !== 1) {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; x.pop() === 1. Actual: ' + (pop));    
}

//CHECK#2
if (x[1] !== 1) {  
  $ERROR('#2: Array.prototype[1] = 1; x = [0]; x.length = 2; x.pop(); x[1] === 1. Actual: ' + (x[1]));    
}

Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.pop = Array.prototype.pop;
x = {0:0};

//CHECK#3
var pop = x.pop();
if (pop !== 1) {  
  $ERROR('#3: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0}; x.pop() === 1. Actual: ' + (pop));    
}

//CHECK#4
if (x[1] !== 1) {  
  $ERROR('#4: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0}; x.pop(); x[1] === 1. Actual: ' + (x[1]));    
}

//CHECK#6
if (x.length !== 1) {  
  $ERROR('#6: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0}; x.pop(); x.length === 1. Actual: ' + (x.length));    
}

//CHECK#7
delete x.length;
if (x.length !== 2) {  
  $ERROR('#7: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.pop = Array.prototype.pop; x = {0:0}; x.pop(); delete x; x.length === 2. Actual: ' + (x.length));    
}

 }
});

