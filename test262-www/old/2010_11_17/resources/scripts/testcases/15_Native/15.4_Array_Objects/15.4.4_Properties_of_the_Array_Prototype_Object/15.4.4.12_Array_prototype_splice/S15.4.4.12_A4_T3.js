// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.12_A4_T3;
 * @section: 15.4.4.12, 8.6.2.1;
 * @assertion: [[Get]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.12_A4_T3",

path: "15.4.4.12, 8.6.2.1",

description: "[[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype",

test: function testcase() {
   Array.prototype[0] = -1;
var x = [];
x.length = 1;
var arr = x.splice(0,1);

//CHECK#1
if (arr.length !== 1) {  
  $ERROR('#1: Array.prototype[0] = -1; x = []; x.length = 1; var arr = x.splice(0,1); arr.length === 1. Actual: ' + (arr.length));    
}

//CHECK#2
if (arr[0] !== -1) {  
  $ERROR('#2: Array.prototype[0] = -1; x = []; x.length = 1; var arr = x.splice(0,1); arr[0] === -1. Actual: ' + (arr[0]));    
}

delete arr[0];

//CHECK#3
if (arr[0] !== -1) {  
  $ERROR('#3: Array.prototype[0] = -1; x = []; x.length = 1; var arr = x.splice(0,1); delete arr[0]; arr[0] === -1. Actual: ' + (arr[0]));    
}

//CHECK#4
if (x.length !== 0) {  
  $ERROR('#4: Array.prototype[0] = -1; x = []; x.length = 1; var arr = x.splice(0,1); x.length === 0. Actual: ' + (x.length));    
}

//CHECK#5
if (x[0] !== -1) {  
  $ERROR('#5: Array.prototype[0] = -1; x = []; x.length = 1; var arr = x.splice(0,1); x[0] === -1. Actual: ' + (x[0]));    
}

Object.prototype[0] = -1;
Object.prototype.length = 1;
Object.prototype.splice = Array.prototype.splice;
x = {};
var arr = x.splice(0,1);

//CHECK#6
if (arr.length !== 1) {  
  $ERROR('#6: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.splice = Array.prototype.splice; x = {}; var arr = x.splice(0,1); arr.length === 1. Actual: ' + (arr.length));    
}

//CHECK#7
if (arr[0] !== -1) {  
  $ERROR('#7: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.splice = Array.prototype.splice; x = {}; var arr = x.splice(0,1); arr[0] === -1. Actual: ' + (arr[0]));    
}

delete arr[0];

//CHECK#8
if (arr[0] !== -1) {  
  $ERROR('#8: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.splice = Array.prototype.splice; x = {}; var arr = x.splice(0,1); delete arr[0]; arr[0] === -1. Actual: ' + (arr[0]));    
}

//CHECK#9
if (x.length !== 0) {  
  $ERROR('#9: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.splice = Array.prototype.splice; x = {}; var arr = x.splice(0,1); x.length === 0. Actual: ' + (x.length));    
}

//CHECK#10
if (x[0] !== -1) {  
  $ERROR('#10: Object.prototype[0] = -1; Object.prototype.length = 1; Object.prototype.splice = Array.prototype.splice; x = {}; var arr = x.splice(0,1); x[0] === -1. Actual: ' + (x[0]));    
}

 }
});

