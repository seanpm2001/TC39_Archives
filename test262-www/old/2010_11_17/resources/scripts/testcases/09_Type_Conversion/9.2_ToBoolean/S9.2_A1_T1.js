// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A1_T1;
 * @section: 9.2, 15.6.1;
 * @assertion: Result of boolean conversion from undefined value is false;
 * @description: Undefined, void and others are converted to Boolean by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A1_T1",

path: "9.2, 15.6.1",

description: "Undefined, void and others are converted to Boolean by explicit transformation",

test: function testcase() {
   // CHECK#1
if (Boolean(undefined) !== false) {
  $ERROR('#1: Boolean(undefined) === false. Actual: ' + (Boolean(undefined)));
}

// CHECK#2
if (Boolean(void 0) !== false) {
  $ERROR('#2: Boolean(undefined) === false. Actual: ' + (Boolean(undefined)));
}

// CHECK#3
if (Boolean(eval("var x")) !== false) {
  $ERROR('#3: Boolean(eval("var x")) === false. Actual: ' + (Boolean(eval("var x"))));
}

// CHECK#4
if (Boolean() !== false) {
  $ERROR('#4: Boolean() === false. Actual: ' + (Boolean()));
}

 }
});

