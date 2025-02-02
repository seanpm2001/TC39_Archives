// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.5_A1_T7;
* @section: 15.5.4.5;
* @assertion: String.prototype.charCodeAt(pos);
* @description: Call charCodeAt() function with undefined argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.5_A1_T7",

path: "15.5.4.5",

description: "Call charCodeAt() function with undefined argument of string object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToInteger(undefined) evaluates to 0 charCodeAt() evaluates to charCodeAt(0)
if (String("lego").charCodeAt(undefined) !== 0x6C) {
  $ERROR('#1: String("lego").charCodeAt(undefined) === 0x6C. Actual: String("lego").charCodeAt(undefined) ==='+String("lego").charCodeAt(undefined) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

