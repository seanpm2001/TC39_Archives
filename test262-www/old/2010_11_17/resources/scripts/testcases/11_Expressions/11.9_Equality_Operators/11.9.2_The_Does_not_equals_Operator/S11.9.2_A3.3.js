// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.2_A3.3;
 * @section: 11.9.2, 11.9.3;
 * @assertion: If Type(y) is Number and Type(y) is Boolean, 
 * return the result of comparison x != ToNumber(y);
 * @description: x is primitive number, y is primitive boolean;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.2_A3.3",

path: "11.9.2, 11.9.3",

description: "x is primitive number, y is primitive boolean",

test: function testcase() {
   //CHECK#1
if ((0 != false) !== false) {
  $ERROR('#1: (0 != false) === false');
}

//CHECK#2
if (("1" != true) !== false) {
  $ERROR('#2: ("1" != true) === false');
}

//CHECK#3
if ((new Boolean(false) != false) !== false) {
  $ERROR('#3: (new Boolean(false) != false) === false');
}

//CHECK#4
if (({valueOf: function () {return "0"}} != false) !== false) {
  $ERROR('#4: ({valueOf: function () {return "0"}} != false) === false');
}

 }
});

