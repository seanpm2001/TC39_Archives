// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.3_A3_T1.4;
 * @section: 11.10.3;
 * @assertion: Operator x | y returns ToNumber(x) | ToNumber(y); 
 * @description: Type(x) and Type(y) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.3_A3_T1.4",

path: "11.10.3",

description: "Type(x) and Type(y) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
if ((null | undefined) !== 0) {
  $ERROR('#1: (null | undefined) === 0. Actual: ' + ((null | undefined)));
}

//CHECK#2
if ((undefined | null) !== 0) {
  $ERROR('#2: (undefined | null) === 0. Actual: ' + ((undefined | null)));
}

//CHECK#3
if ((undefined | undefined) !== 0) {
  $ERROR('#3: (undefined | undefined) === 0. Actual: ' + ((undefined | undefined)));
}

//CHECK#4
if ((null | null) !== 0) {
  $ERROR('#4: (null | null) === 0. Actual: ' + ((null | null)));
}

 }
});

