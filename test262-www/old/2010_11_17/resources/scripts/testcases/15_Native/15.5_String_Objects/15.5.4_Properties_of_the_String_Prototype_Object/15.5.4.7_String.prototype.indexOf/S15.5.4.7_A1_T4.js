// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T4;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function without arguments of string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T4",

path: "15.5.4.7",

description: "Call indexOf(searchString, position) function without arguments of string",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" indexOf() evaluates to indexOf("",0)
if ("".indexOf() !== -1) {
  $ERROR('#1: "".indexOf() === -1. Actual: '+("".indexOf()) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

