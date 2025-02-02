// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.2_A4.5;
* @section: 11.8.2, 11.8.5;
* @assertion: If x is +Infinity and x !== y, return true;
* @description: y is number primitive;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A4.5",

path: "11.8.2, 11.8.5",

description: "y is number primitive",

test: function testcase() {
   //CHECK#1
if ((Number.POSITIVE_INFINITY > 0) !== true) {
  $ERROR('#1: (+Infinity > 0) === true');
}

//CHECK#2
if ((Number.POSITIVE_INFINITY > 1.1) !== true) {
  $ERROR('#2: (+Infinity > 1.1) === true');
}

//CHECK#3
if ((Number.POSITIVE_INFINITY > -1.1) !== true) {
  $ERROR('#3: (+Infinity > -1.1) === true');
}

//CHECK#4
if ((Number.POSITIVE_INFINITY > Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#4: (+Infinity > -Infinity) === true');
}

//CHECK#5
if ((Number.POSITIVE_INFINITY > Number.MAX_VALUE) !== true) {
  $ERROR('#5: (+Infinity > Number.MAX_VALUE) === true');
}

//CHECK#6
if ((Number.POSITIVE_INFINITY > Number.MIN_VALUE) !== true) {
  $ERROR('#6: (+Infinity > Number.MIN_VALUE) === true');
}


 }
});

