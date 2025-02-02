// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.3_A4.12_T2;
* @section: 11.8.3, 11.8.5;
* @assertion: If neither x, nor y is a prefix of each other, returned result of strings comparison applies a simple lexicographic ordering to the sequences of code point value values;
* @description: x and y are string primitives;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.3_A4.12_T2",

path: "11.8.3, 11.8.5",

description: "x and y are string primitives",

test: function testcase() {
   //CHECK#1
if (("0" <= "x") !== true) {
  $ERROR('#1: ("0" <= "x") !== true');
}

//CHECK#2
if (("-" <= "0") !== true) {
  $ERROR('#2: ("-" <= "0") !== true');
}

//CHECK#3
if (("." <= "0") !== true) {
  $ERROR('#3: ("." <= "0") !== true');
}

//CHECK#4
if (("+" <= "-") !== true) {
  $ERROR('#4: ("+" <= "-") !== true');
}

//CHECK#5
if (("-0" <= "-1") !== true) {
  $ERROR('#5: ("-0" <= "-1") !== true');
}

//CHECK#6
if (("+1" <= "-1") !== true) {
  $ERROR('#6: ("+1" <= "-1") !== true');
}

//CHECK#7
if (("1" <= "1e-10") !== true) {
$ERROR('#7: ("1" <= "1e-10") !== true');
}

 }
});

