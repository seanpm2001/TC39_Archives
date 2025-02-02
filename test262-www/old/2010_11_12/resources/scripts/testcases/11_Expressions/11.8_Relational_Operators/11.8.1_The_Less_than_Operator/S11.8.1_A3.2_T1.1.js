// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.1_A3.2_T1.1;
 * @section: 11.8.1;
 * @assertion: Operator x < y returns ToString(x) < ToString(y), if Type(Primitive(x)) is String and Type(Primitive(y)) is String;
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between primitive string and String object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A3.2_T1.1",

path: "11.8.1",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between primitive string and String object",

test: function testcase() {
   //CHECK#1
if ("1" < "1" !== false) {
  $ERROR('#1: "1" < "1" === false');
}

//CHECK#2
if (new String("1") < "1" !== false) {
  $ERROR('#2: new String("1") < "1" === false');
}

//CHECK#3
if ("1" < new String("1") !== false) {
  $ERROR('#3: "1" < new String("1") === false');
}

//CHECK#4
if (new String("1") < new String("1") !== false) {
  $ERROR('#4: new String("1") < new String("1") === false');
}

//CHECK#5
if ("x" < "1" !== false) {
  $ERROR('#5: "x" < "1" === false');
}

//CHECK#6
if ("1" < "x" !== true) {
  $ERROR('#6: "1" < "x" === true');
}

 }
});

