// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.2_A5_T4;
 * @section: 9.2, 11.4.9;
 * @assertion: Result of boolean conversion from nonempty string value (length is not zero) is true; from empty String (length is zero) is false;
 * @description: Any nonempty string convert to Boolean by implicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.2_A5_T4",

path: "9.2, 11.4.9",

description: "Any nonempty string convert to Boolean by implicit transformation",

test: function testcase() {
   // CHECK#1
if (!(" ") !== false) {
  $ERROR('#1: !(" ") === false. Actual: ' + (!(" ")));	
}

// CHECK#2
if (!("Nonempty String") !== false) {
  $ERROR('#2: !("Nonempty String") === false. Actual: ' + (!("Nonempty String")));	
}

 }
});

