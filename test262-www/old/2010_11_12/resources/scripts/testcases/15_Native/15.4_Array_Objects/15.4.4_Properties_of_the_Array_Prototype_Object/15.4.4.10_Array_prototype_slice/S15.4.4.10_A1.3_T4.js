// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.10_A1.3_T4;
 * @section: 15.4.4.10;
 * @assertion: If start is positive, use min(start, length). 
 * If end is negative, use max(end + length, 0);
 * @description: abs(end) > length > start > 0, end < 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.10_A1.3_T4",

path: "15.4.4.10",

description: "abs(end) > length > start > 0, end < 0",

test: function testcase() {
   var x = [0,1,2,3,4];
var arr = x.slice(4,-9);

//CHECK#1
arr.getClass = Object.prototype.toString;
if (arr.getClass() !== "[object " + "Array" + "]") {
  $ERROR('#1: var x = [0,1,2,3,4]; var arr = x.slice(4,-9); arr is Array object. Actual: ' + (arr.getClass()));
}

//CHECK#2
if (arr.length !== 0) {
  $ERROR('#2: var x = [0,1,2,3,4]; var arr = x.slice(4,-9); arr.length === 0. Actual: ' + (arr.length));
}      

//CHECK#3
if (arr[0] !== undefined) {
  $ERROR('#3: var x = [0,1,2,3,4]; var arr = x.slice(4,-9); arr[0] === undefined. Actual: ' + (arr[0]));
}

 }
});

