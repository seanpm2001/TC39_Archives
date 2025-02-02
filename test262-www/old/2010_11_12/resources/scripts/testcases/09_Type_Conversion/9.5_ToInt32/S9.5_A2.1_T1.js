// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.5_A2.1_T1;
 * @section: 9.5, 11.7.1;
 * @assertion: ToInt32 returns values between -2^31 and 2^31-1; 
 * @description: Converting some numbers, which are in\outside of Int32 scopes, with <<0 operator;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.5_A2.1_T1",

path: "9.5, 11.7.1",

description: "Converting some numbers, which are in\\outside of Int32 scopes, with <<0 operator",

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
if ((-4294967296 << 0) !== 0) {
  $ERROR('#4: (-4294967296 << 0) === 0. Actual: ' + ((-4294967296 << 0)));
}

// CHECK#5
if ((2147483646 << 0) !== 2147483646) {
  $ERROR('#5: (2147483646 << 0) === 2147483646. Actual: ' + ((2147483646 << 0)));
}

// CHECK#6
if ((2147483647 << 0) !== 2147483647) {
  $ERROR('#6: (2147483647 << 0) === 2147483647. Actual: ' + ((2147483647 << 0)));
}

// CHECK#7
if ((2147483648 << 0) !== -2147483648) {
  $ERROR('#7: (2147483648 << 0) === -2147483648. Actual: ' + ((2147483648 << 0)));
}

// CHECK#8
if ((4294967296 << 0) !== 0) {
  $ERROR('#8: (4294967296 << 0) === 0. Actual: ' + ((4294967296 << 0)));
}

 }
});

