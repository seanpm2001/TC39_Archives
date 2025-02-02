// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A5.1;
 * @section: 11.9.1, 11.9.3;
 * @assertion: Type(x) and Type(y) are String-s. 
 * Return true, if x and y are exactly the same sequence of characters; otherwise, return false;
 * @description: x and y are primitive string;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A5.1",

path: "11.9.1, 11.9.3",

description: "x and y are primitive string",

test: function testcase() {
   //CHECK#1
if (("" == "") !== true) {
  $ERROR('#1: ("" == "") === true');
}

//CHECK#2
if ((" " == " ") !== true) {
  $ERROR('#2: " (" == " ") === true');
}

//CHECK#3
if ((" " == "") !== false) {
  $ERROR('#3: " (" == "") === false');
}

//CHECK#4
if (("string" == "string") !== true) {
  $ERROR('#4: ("string" == "string") === true');
}

//CHECK#5
if ((" string" == "string ") !== false) {
  $ERROR('#5: (" string" == "string ") === false');
}

//CHECK#6
if (("1.0" == "1") !== false) {
  $ERROR('#6: ("1.0" == "1") === false');
}

//CHECK#7
if (("0xff" == "255") !== false) {
  $ERROR('#7: ("0xff" == "255") === false');
}

 }
});

