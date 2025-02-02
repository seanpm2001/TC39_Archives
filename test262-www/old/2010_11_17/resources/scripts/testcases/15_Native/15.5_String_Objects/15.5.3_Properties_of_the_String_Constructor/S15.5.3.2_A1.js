// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3.2_A1;
* @section: 15.5.3.2;
* @assertion: The length property of the fromCharCode function is 1;
* @description: Checking String.fromCharCode.length;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3.2_A1",

path: "15.5.3.2",

description: "Checking String.fromCharCode.length",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof String.fromCharCode !== "function") {
  $ERROR('#1: typeof String.fromCharCode === "function". Actual: typeof String.fromCharCode ==='+typeof String.fromCharCode ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.hasOwnProperty("fromCharCode"))) {
  $ERROR('#2: String.hasOwnProperty("fromCharCode") return true. Actual: '+String.hasOwnProperty("fromCharCode"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (String.fromCharCode.length !== 1) {
  $ERROR('#3: String.fromCharCode.length === 1. Actual: String.fromCharCode.length ==='+String.fromCharCode.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

