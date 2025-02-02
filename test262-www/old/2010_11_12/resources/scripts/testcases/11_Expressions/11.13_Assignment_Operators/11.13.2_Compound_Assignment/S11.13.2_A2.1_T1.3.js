// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T1.3;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: Either Type is not Reference or GetBase is not null, check opeartor is "x %= y";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.1_T1.3",

path: "11.13.2",

description: "Either Type is not Reference or GetBase is not null, check opeartor is \"x %= y\"",

test: function testcase() {
   //CHECK#1
var x = -1;
var z = (x %= 2);
if (z !== -1) {
  $ERROR('#1: var x = -1; var z = (x %= 2); z === -1. Actual: ' + (z));
}

//CHECK#2
var x = -1;
var y = 2;
var z = (x %= y);
if (z !== -1) {
  $ERROR('#2: var x = -1; var y = 2; var z = (x %= y); z === -1. Actual: ' + (z));
}


 }
});

