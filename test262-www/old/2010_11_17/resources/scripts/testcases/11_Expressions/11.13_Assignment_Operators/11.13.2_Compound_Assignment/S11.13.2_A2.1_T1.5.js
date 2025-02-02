// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T1.5;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: Either Type is not Reference or GetBase is not null, check opeartor is "x -= y";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.1_T1.5",

path: "11.13.2",

description: "Either Type is not Reference or GetBase is not null, check opeartor is \"x -= y\"",

test: function testcase() {
   //CHECK#1
var x = 1;
var z = (x -= 1);
if (z !== 0) {
  $ERROR('#1: var x = 1; var z = (x -= 1); z === 0. Actual: ' + (z));
}

//CHECK#2
var x = 1;
var y = 1;
var z = (x -= y);
if (z !== 0) {
  $ERROR('#2: var x = 1; var y = 1; var z = (x -= y); z === 0. Actual: ' + (z));
}


 }
});

