// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A11;
* @section: 15.5.4.16;
* @assertion: The length property of the toLowerCase method is 0;
* @description: Checking String.prototype.toLowerCase.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A11",

path: "15.5.4.16",

description: "Checking String.prototype.toLowerCase.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.prototype.toLowerCase.hasOwnProperty("length"))) {
  $ERROR('#1: String.prototype.toLowerCase.hasOwnProperty("length") return true. Actual: '+String.prototype.toLowerCase.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (String.prototype.toLowerCase.length !== 0) {
  $ERROR('#2: String.prototype.toLowerCase.length === 0. Actual: '+String.prototype.toLowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

