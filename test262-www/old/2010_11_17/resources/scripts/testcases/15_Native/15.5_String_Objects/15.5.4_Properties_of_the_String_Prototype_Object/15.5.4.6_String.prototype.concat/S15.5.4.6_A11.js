// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.6_A11;
* @section: 15.5.4.6;
* @assertion: The length property of the concat method is 1;
* @description: Checking String.prototype.concat.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.6_A11",

path: "15.5.4.6",

description: "Checking String.prototype.concat.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.concat.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.concat.hasOwnProperty("length") return true. Actual: '+String.prototype.concat.hasOwnProperty("length")); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.concat.length !== 1) {
  $ERROR('#2: String.prototype.concat.length === 1. Actual: '+String.prototype.concat.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

