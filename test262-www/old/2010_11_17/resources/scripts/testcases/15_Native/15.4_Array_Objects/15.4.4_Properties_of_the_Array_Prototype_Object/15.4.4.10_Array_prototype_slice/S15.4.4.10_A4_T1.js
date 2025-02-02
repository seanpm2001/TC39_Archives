// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.10_A4_T1;
 * @section: 15.4.4.10, 8.6.2.1, 15.2.4.5;
 * @assertion: [[Get]] from not an inherited property;
 * @description: [[Prototype]] of Array instance is Array.prototype; 
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A4_T1",

path: "15.4.4.10, 8.6.2.1, 15.2.4.5",

description: "[[Prototype]] of Array instance is Array.prototype",

test: function testcase() {
   Array.prototype[1] = 1;
var x = [0];
x.length = 2;
var arr = x.slice();

//CHECK#1
if (arr[0] !== 0) {  
  $ERROR('#1: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr[0] === 0. Actual: ' + (arr[0]));    
}

//CHECK#2
if (arr[1] !== 1) {  
  $ERROR('#2: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr[1] === 1. Actual: ' + (arr[1]));    
}

//CHECK#3
if (arr.hasOwnProperty('1') !== true) {  
  $ERROR('#3: Array.prototype[1] = 1; x = [0]; x.length = 2; var arr = x.slice(); arr.hasOwnProperty(\'1\') === true. Actual: ' + (arr.hasOwnProperty('1')));    
}

 }
});

