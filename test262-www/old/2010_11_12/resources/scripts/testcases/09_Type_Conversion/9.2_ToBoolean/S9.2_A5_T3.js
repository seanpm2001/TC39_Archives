// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A5_T3;
 * @section: 9.2, 15.6.1;
 * @assertion: Result of boolean conversion from nonempty string value (length is not zero) is true; from empty String (length is zero) is false;
 * @description: Any nonempty string convert to Boolean by explicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A5_T3",

path: "9.2, 15.6.1",

description: "Any nonempty string convert to Boolean by explicit transformation",

test: function testcase() {
   // CHECK#1
if (Boolean(" ") !== true) {
  $ERROR('#1: Boolean(" ") === true. Actual: ' + (Boolean(" ")));	
}

// CHECK#2
if (Boolean("Nonempty String") !== true) {
  $ERROR('#2: Boolean("Nonempty String") === true. Actual: ' + (Boolean("Nonempty String")));	
}

 }
});

