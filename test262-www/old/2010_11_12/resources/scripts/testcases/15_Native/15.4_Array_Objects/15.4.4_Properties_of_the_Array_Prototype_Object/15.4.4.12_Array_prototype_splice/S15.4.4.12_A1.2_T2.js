// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.12_A1.2_T2;
 * @section: 15.4.4.12;
 * @assertion: If start is negative, use max(start + length, 0). 
 * If deleteCount is negative, use 0;
 * @description: -length < start = deleteCount < 0, itemCount = 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.12_A1.2_T2",

path: "15.4.4.12",

description: "-length < start = deleteCount < 0, itemCount = 0",

test: function testcase() {
   var x = [0,1];
var arr = x.splice(-1,-1);

//CHECK#0
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#0: var x = [0,1]; var arr = x.splice(-1,-1); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#1
if (arr.length !== 0) {
  $ERROR('#1: var x = [0,1]; var arr = x.splice(-1,-1); arr.length === 0. Actual: ' + (arr.length));
}   

//CHECK#2
if (x.length !== 2) {
  $ERROR('#2: var x = [0,1]; var arr = x.splice(-1,-1); x.length === 2. Actual: ' + (x.length));
}      

//CHECK#3
if (x[0] !== 0) {
  $ERROR('#3: var x = [0,1]; var arr = x.splice(-1,-1); x[0] === 0. Actual: ' + (x[0]));
}

//CHECK#4
if (x[1] !== 1) {
  $ERROR('#4: var x = [0,1]; var arr = x.splice(-1,-1); x[1] === 1. Actual: ' + (x[1]));
}  

 }
});

