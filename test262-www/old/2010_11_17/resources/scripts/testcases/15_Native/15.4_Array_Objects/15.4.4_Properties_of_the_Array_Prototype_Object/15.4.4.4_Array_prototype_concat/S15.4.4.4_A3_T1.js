// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.4_A3_T1;
 * @section: 15.4.4.4, 8.6.2.1, 15.2.4.5;
 * @assertion: [[Get]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.4_A3_T1",

path: "15.4.4.4, 8.6.2.1, 15.2.4.5",

description: "[[Prototype]] of Array instance is Array.prototype, [[Prototype] of Array.prototype is Object.prototype",

test: function testcase() {
   Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var arr = x.concat();

//CHECK#1
if (arr[0] !== 0) {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.concat(); arr[0] === 0. Actual: ' + (arr[0]));    
}

//CHECK#2
if (arr[1] !== 1) {  
  $ERROR('#2: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.concat(); arr[1] === 1. Actual: ' + (arr[1]));    
}

//CHECK#3
if (arr.hasOwnProperty('1') !== true) {  
  $ERROR('#3: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.concat(); arr.hasOwnProperty(\'1\') === true. Actual: ' + (arr.hasOwnProperty('1')));    
}

Object.prototype[1] = 1;
Object.prototype.length = 2;
Object.prototype.concat = Array.prototype.concat;
x = {0:0};
var arr = x.concat();

//CHECK#4
if (arr[0] !== x) {  
  $ERROR('#4: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.concat = Array.prototype.concat; x = {0:0}; var arr = x.concat(); arr[0] === x. Actual: ' + (arr[0]));    
}

//CHECK#5
if (arr[1] !== 1) {  
  $ERROR('#5: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.concat = Array.prototype.concat; x = {0:0}; var arr = x.concat(); arr[1] === 1. Actual: ' + (arr[1]));    
}

//CHECK#6
if (arr.hasOwnProperty('1') !== false) {  
  $ERROR('#6: Object.prototype[1] = 1; Object.prototype.length = 2; Object.prototype.concat = Array.prototype.concat; x = {0:0}; var arr = x.concat(); arr.hasOwnProperty(\'1\') === false. Actual: ' + (arr.hasOwnProperty('1')));    
}

 }
});

