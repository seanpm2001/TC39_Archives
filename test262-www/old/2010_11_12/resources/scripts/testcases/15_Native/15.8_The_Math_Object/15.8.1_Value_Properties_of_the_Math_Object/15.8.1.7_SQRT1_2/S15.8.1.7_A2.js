// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.7_A2;
 * @section: 15.8.1.7;
 * @assertion: Value Property SQRT1_2 of the Math Object has the attribute DontEnum;
 * @description: Checking if Math.SQRT1_2 property has the attribute DontEnum;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.7_A2",

path: "15.8.1.7",

description: "Checking if Math.SQRT1_2 property has the attribute DontEnum",

test: function testcase() {
   // CHECK#1
for(x in Math) {
  if(x === "SQRT1_2") {
    $ERROR('#1: Value Property SQRT1_2 of the Math Object hasn\'t attribute DontEnum: \'for(x in Math) {x==="SQRT1_2"}\'');
  }
}


 }
});

