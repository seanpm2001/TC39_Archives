// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T7;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Call toLocaleUpperCase() function of NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T7",

path: "15.5.4.19",

description: "Call toLocaleUpperCase() function of NaN",

test: function testcase() {
   Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLocaleUpperCase()!== "NAN") {
  $ERROR('#1: Number.prototype.toLocaleUpperCase = String.prototype.toLocaleUpperCase; NaN.toLocaleUpperCase()=== "NAN". Actual: '+NaN.toLocaleUpperCase());
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

