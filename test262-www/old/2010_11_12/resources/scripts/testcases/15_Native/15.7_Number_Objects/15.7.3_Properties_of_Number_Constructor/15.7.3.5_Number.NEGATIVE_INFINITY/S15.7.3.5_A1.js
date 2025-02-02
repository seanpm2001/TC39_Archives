// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3.5_A1;
 * @section: 15.7.3.5;
 * @assertion: Number.NEGATIVE_INFINITY is -Infinity;
 * @description: Checking sign and finiteness of Number.NEGATIVE_INFINITY;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3.5_A1",

path: "15.7.3.5",

description: "Checking sign and finiteness of Number.NEGATIVE_INFINITY",

test: function testcase() {
   // CHECK#1
if (isFinite(Number.NEGATIVE_INFINITY) !== false) {
  $ERROR('#1: Number.NEGATIVE_INFINITY === Not-a-Finite');
} else {
  if ((Number.NEGATIVE_INFINITY < 0) !== true) {
    $ERROR('#1: Number.NEGATIVE_INFINITY === -Infinity');
  }
}

 }
});

