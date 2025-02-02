// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.1.2_A1_T2;
 * @section: 11.1.2;
 * @assertion: The result of evaluating an Identifier is always a value of type Reference;
 * @description: Trying to generate ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.2_A1_T2",

path: "11.1.2",

description: "Trying to generate ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    this.S11_1_2_A1_T2_z;
    S11_1_2_A1_T2_z;
    $ERROR('#1.1: this.S11_1_2_A1_T2_z; S11_1_2_A1_T2_z === undefined throw ReferenceError. Actual: ' + (S11_1_2_A1_T2_z));
} catch(e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: this.S11_1_2_A1_T2_z; S11_1_2_A1_T2_z === undefined throw ReferenceError. Actual: ' + (e));
  }
}

 }
});

