// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A7.6;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(x) is Object and Type(y) is String, 
 * return ToPrimitive(x) == y;
 * @description: x is object, y is primitive string;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A7.6",

path: "11.9.1, 11.9.3",

description: "x is object, y is primitive string",

test: function testcase() {
   //CHECK#1
if ((new Boolean(true) == "1") !== true) {
  $ERROR('#1: (new Boolean(true) == "1") === true');
}

//CHECK#2
if ((new Number(-1) == "-1") !== true) {
  $ERROR('#2: (new Number(-1) == "-1") === true');
}

//CHECK#3
if ((new String("x") == "x") !== true) {
  $ERROR('#3: (new String("x") == "x") === true');
}

 }
});

