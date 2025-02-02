// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A2_T1;
* @section: 15.3.4.4;
* @assertion: The length property of the call method is 1;
* @description: Checking Function.prototype.call.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A2_T1",

path: "15.3.4.4",

description: "Checking Function.prototype.call.length",

test: function testcase() {
   //CHECK#1
if (typeof Function.prototype.call !== "function") {
  $ERROR('#1: call method defined');
}

//CHECK#2
if (typeof Function.prototype.call.length === "undefined") {
  $ERROR('#2: length property of call method defined');
}

//CHECK#3
if (Function.prototype.call.length !== 1) {
  $ERROR('#3: The length property of the call method is 1');
}

 }
});

