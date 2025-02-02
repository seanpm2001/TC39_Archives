// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.5_A2.2_T1;
 * @section: 9.5, 11.7.1;
 * @assertion: Compute result modulo 2^32; 
 * @description: Use operator <<0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.5_A2.2_T1",

path: "9.5, 11.7.1",

description: "Use operator <<0",

test: function testcase() {
   // CHECK#1
if ((-2147483647 << 0) !== -2147483647) {
  $ERROR('#1: (-2147483647 << 0) === -2147483647. Actual: ' + ((-2147483647 << 0)));
}

// CHECK#2
if ((-2147483648 << 0) !== -2147483648) {
  $ERROR('#2: (-2147483648 << 0) === -2147483648. Actual: ' + ((-2147483648 << 0)));
}

// CHECK#3
if ((-2147483649 << 0) !== 2147483647) {
  $ERROR('#3: (-2147483649 << 0) === 2147483647. Actual: ' + ((-2147483649 << 0)));
}

// CHECK#4
if ((4294967295 << 0) !== -1) {
  $ERROR('#4: (4294967295 << 0) === -1. Actual: ' + ((4294967295 << 0)));
}

// CHECK#5
if ((4294967296 << 0) !== 0) {
  $ERROR('#5: (4294967296 << 0) === 0. Actual: ' + ((4294967296 << 0)));
}

// CHECK#6
if ((4294967297 << 0) !== 1) {
  $ERROR('#6: (4294967297 << 0) === 1. Actual: ' + ((4294967297 << 0)));
}

// CHECK#7
if ((-4294967295 << 0) !== 1) {
  $ERROR('#7: (-4294967295 << 0) === 1. Actual: ' + ((-4294967295 << 0)));
}

// CHECK#8
if ((-4294967296 << 0) !== 0) {
  $ERROR('#8: (-4294967296 << 0) === 0. Actual: ' + ((-4294967296 << 0)));
}

// CHECK#9
if ((-4294967297 << 0) !== -1) {
  $ERROR('#9: (-4294967297 << 0) === -1. Actual: ' + ((-4294967297 << 0)));
}

// CHECK#10
if ((8589934591 << 0) !== -1) {
  $ERROR('#10: (8589934591 << 0) === -1. Actual: ' + ((8589934591 << 0)));
}

// CHECK#11
if ((8589934592 << 0) !== 0) {
  $ERROR('#11: (8589934592 << 0) === 0. Actual: ' + ((8589934592 << 0)));
}

// CHECK#12
if ((8589934593 << 0) !== 1) {
  $ERROR('#12: (8589934593 << 0) === 1. Actual: ' + ((8589934593 << 0)));
}

 }
});

