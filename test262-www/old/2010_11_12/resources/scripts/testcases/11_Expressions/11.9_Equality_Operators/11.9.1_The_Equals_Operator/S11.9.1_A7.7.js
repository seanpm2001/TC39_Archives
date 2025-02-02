// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A7.7;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(x) is String and Type(y) is Object, 
 * return x == ToPrimitive(y);
 * @description: y is object, x is primitive string;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A7.7",

path: "11.9.1, 11.9.3",

description: "y is object, x is primitive string",

test: function testcase() {
   //CHECK#1
if (("1" == new Boolean(true)) !== true) {
  $ERROR('#1: ("1" == new Boolean(true)) === true');
}

//CHECK#2
if (("-1" == new Number(-1)) !== true) {
  $ERROR('#2: ("-1" == new Number(-1)) === true');
}

//CHECK#3
if (("x" == new String("x")) !== true) {
  $ERROR('#3: ("x" == new String("x")) === true');
}

 }
});

