// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.6_A1_T3;
 * @section: 10.1.6;
 * @assertion: The activation object is initialised with a property with name arguments and attributes {DontDelete};
 * @description: Checking function which returns "this";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.6_A1_T3",

path: "10.1.6",

description: "Checking function which returns \"this\"",

test: function testcase() {
   function f1() {
  if (delete arguments) {
    $ERROR("#1: Function parameters have attribute {DontDelete}" + arguments);
  }
  return arguments;
}

f1();

 }
});

