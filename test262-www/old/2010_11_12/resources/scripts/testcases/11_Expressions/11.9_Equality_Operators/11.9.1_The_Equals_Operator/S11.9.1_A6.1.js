// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.1_A6.1;
 * @section: 11.9.1, 11.9.3;
 * @assertion: If Type(x) as well as Type(y) is undefined or null, return true;
 * @description: Checking all combinations;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.1_A6.1",

path: "11.9.1, 11.9.3",

description: "Checking all combinations",

test: function testcase() {
   //CHECK#1
if ((undefined == undefined) !== true) {
  $ERROR('#1: (undefined == undefined) === true');
}

//CHECK#2
if ((void 0 == undefined) !== true) {
  $ERROR('#2: (void 0 == undefined) === true');
}

//CHECK#3
if ((undefined == eval("var x")) !== true) {
  $ERROR('#3: (undefined == eval("var x")) === true');
}

//CHECK#4
if ((undefined == null) !== true) {
  $ERROR('#4: (undefined == null) === true');
}

//CHECK#5
if ((null == void 0) !== true) {
  $ERROR('#5: (null == void 0) === true');
}

//CHECK#6
if ((null == null) !== true) {
  $ERROR('#6: (null == null) === true');
}

 }
});

