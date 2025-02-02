// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A6.2_T2;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If one expression is undefined or null and another is not, return false;
 * @description: y is null or undefined, x is not;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A6.2_T2",

path: "11.9.2, 11.9.3",

description: "y is null or undefined, x is not",

test: function testcase() {
   //CHECK#1
if ((false != undefined) !== true) {
  $ERROR('#1: (false != undefined) === true');
}

//CHECK#2
if ((Number.NaN != undefined) !== true) {
  $ERROR('#2: (Number.NaN != undefined) === true');
}

//CHECK#3
if (("undefined" != undefined) !== true) {
  $ERROR('#3: ("undefined" != undefined) === true');
}

//CHECK#4
if (({} != undefined) !== true) {
  $ERROR('#4: ({} != undefined) === true');
}

//CHECK#5
if ((false != null) !== true) {
  $ERROR('#5: (false != null) === true');
}

//CHECK#6
if ((0 != null) !== true) {
  $ERROR('#6: (0 != null) === true');
}

//CHECK#7
if (("null" != null) !== true) {
  $ERROR('#7: ("null" != null) === true');
}

//CHECK#8
if (({} != null) !== true) {
  $ERROR('#8: ({} != null) === true');
}

 }
});

