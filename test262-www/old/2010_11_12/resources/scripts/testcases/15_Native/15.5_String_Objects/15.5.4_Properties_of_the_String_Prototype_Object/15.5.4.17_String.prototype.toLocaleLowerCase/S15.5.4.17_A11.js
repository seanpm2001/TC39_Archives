// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A11;
* @section: 15.5.4.17;
* @assertion: The length property of the toLocaleLowerCase method is 0;
* @description: Checking String.prototype.toLocaleLowerCase.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A11",

path: "15.5.4.17",

description: "Checking String.prototype.toLocaleLowerCase.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLocaleLowerCase.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.toLocaleLowerCase.hasOwnProperty("length") return true. Actual: '+String.prototype.toLocaleLowerCase.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLocaleLowerCase.length !== 0) {
  $ERROR('#2: String.prototype.toLocaleLowerCase.length === 0. Actual: '+String.prototype.toLocaleLowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

