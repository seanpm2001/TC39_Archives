// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.6_A2.4_T1;
 * @section: 11.8.6;
 * @assertion: First expression is evaluated first, and then second expression;
 * @description: Checking with "=";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A2.4_T1",

path: "11.8.6",

description: "Checking with \"=\"",

test: function testcase() {
   //CHECK#1 
var OBJECT = 0;
if ((OBJECT = Object, {}) instanceof OBJECT !== true) {
  $ERROR('#1: var OBJECT = 0; (OBJECT = Object, {}) instanceof OBJECT === true');
}

//CHECK#2
var object = {}; 
if (object instanceof (object = 0, Object) !== true) {
  $ERROR('#2: var object = {};  object instanceof (object = 0, Object) === true');
}


 }
});

