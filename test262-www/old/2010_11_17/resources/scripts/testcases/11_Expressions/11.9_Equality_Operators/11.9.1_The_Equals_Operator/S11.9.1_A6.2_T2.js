// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A6.2_T2;
 * @section: 11.9.1, 11.9.3;
* @assertion: If one expression is undefined or null and another is not, return false;
 * @description: y is null or undefined, x is not;   
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A6.2_T2",

path: "11.9.1, 11.9.3",

description: "y is null or undefined, x is not",

test: function testcase() {
   //CHECK#1
if ((false == undefined) !== false) {
  $ERROR('#1: (false == undefined) === false');
}

//CHECK#2
if ((Number.NaN == undefined) !== false) {
  $ERROR('#2: (Number.NaN == undefined) === false');
}

//CHECK#3
if (("undefined" == undefined) !== false) {
  $ERROR('#3: ("undefined" == undefined) === false');
}

//CHECK#4
if (({} == undefined) !== false) {
  $ERROR('#4: ({} == undefined) === false');
}

//CHECK#5
if ((false == null) !== false) {
  $ERROR('#5: (false == null) === false');
}

//CHECK#6
if ((0 == null) !== false) {
  $ERROR('#6: (0 == null) === false');
}

//CHECK#7
if (("null" == null) !== false) {
  $ERROR('#7: ("null" == null) === false');
}

//CHECK#8
if (({} == null) !== false) {
  $ERROR('#8: ({} == null) === false');
}

 }
});

