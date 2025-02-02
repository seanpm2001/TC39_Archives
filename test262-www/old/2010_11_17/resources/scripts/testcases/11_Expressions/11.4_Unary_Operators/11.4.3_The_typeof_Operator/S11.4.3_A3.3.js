// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.3_A3.3;
* @section: 11.4.3;
* @assertion: Result of applying "typeof" operator to boolean is "boolean";
* @description: typeof (boolean value) === "boolean";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.3_A3.3",

path: "11.4.3",

description: "typeof (boolean value) === \"boolean\"",

test: function testcase() {
   //CHECK#1
if (typeof true !== "boolean") {
  $ERROR('#1: typeof true === "boolean". Actual: ' + (typeof true));
}

//CHECK#2
if (typeof false !== "boolean") {
  $ERROR('#2: typeof false === "boolean". Actual: ' + (typeof false));
}

//CHECK#3
if (typeof !-1 !== "boolean") {
  $ERROR('#3: typeof !-1 === "boolean". Actual: ' + (typeof !-1));
}

 }
});

