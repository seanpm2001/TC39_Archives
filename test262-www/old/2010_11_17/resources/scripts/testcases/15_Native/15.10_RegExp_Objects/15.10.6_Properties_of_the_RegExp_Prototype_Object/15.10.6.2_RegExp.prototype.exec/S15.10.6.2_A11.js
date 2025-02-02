// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A11;
* @section: 15.10.6.2;
* @assertion: The length property of the exec method is 1;
* @description: Checking RegExp.prototype.exec.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A11",

path: "15.10.6.2",

description: "Checking RegExp.prototype.exec.length",

test: function testcase() {
   //CHECK#1
if (RegExp.prototype.exec.hasOwnProperty("length") !== true) {
  $FAIL('#1: RegExp.prototype.exec.hasOwnProperty(\'length\') === true');
}

//CHECK#2
if (RegExp.prototype.exec.length !== 1) {
  $ERROR('#2: RegExp.prototype.exec.length === 1. Actual: ' + (RegExp.prototype.exec.length));
}


 }
});

