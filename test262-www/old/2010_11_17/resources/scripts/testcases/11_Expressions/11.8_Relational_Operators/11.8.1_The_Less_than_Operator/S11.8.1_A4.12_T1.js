// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A4.12_T1;
* @section: 11.8.1, 11.8.5;
* @assertion: If neither x, nor y is a prefix of each other, returned result of strings comparison applies a simple lexicographic ordering to the sequences of code point value values;
* @description: x and y are string primitives;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A4.12_T1",

path: "11.8.1, 11.8.5",

description: "x and y are string primitives",

test: function testcase() {
   //CHECK#1
if (("xx" < "xy") !== true) {
  $ERROR('#1: ("xx" < "xy") === true');
}

//CHECK#2
if (("xy" < "xx") !== false) {
  $ERROR('#2: ("xy" < "xx") === false');
}

//CHECK#3
if (("x" < "y") !== true) {
  $ERROR('#3: ("x" < y") === true');
}

//CHECK#4
if (("aab" < "aba") !== true) {
  $ERROR('#4: ("aab" < aba") === true');
}

//CHECK#5
if (("\u0061\u0061\u0061\u0062" < "\u0061\u0061\u0061\u0061") !== false) {
  $ERROR('#5: ("\\u0061\\u0061\\u0061\\u0062" < \\u0061\\u0061\\u0061\\u0061") === false');
}

//CHECK#6
if (("a\u0000a" < "a\u0000b") !== true) {
  $ERROR('#6: ("a\\u0000a" < "a\\u0000b") === true');
}

//CHECK#7
if (("aB" < "aa") !== true) {
  $ERROR('#7: ("aB" < aa") === true');
}

 }
});

