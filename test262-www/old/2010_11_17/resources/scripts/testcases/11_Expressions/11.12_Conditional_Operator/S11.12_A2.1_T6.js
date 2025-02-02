// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.12_A2.1_T6;
* @section: 11.12, 8.7.1, 16;
* @assertion: Operator x ? y : z uses GetValue;
* @description: If ToBoolean(x) is false and GetBase(y) is null, return z;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.12_A2.1_T6",

path: "11.12, 8.7.1, 16",

description: "If ToBoolean(x) is false and GetBase(y) is null, return z",

test: function testcase() {
   //CHECK#1
var z = new Object();
if ((false ? y : z) !== z) {
  $ERROR('#1: var z = new Object(); (false ? y : z) === z');
}

 }
});

