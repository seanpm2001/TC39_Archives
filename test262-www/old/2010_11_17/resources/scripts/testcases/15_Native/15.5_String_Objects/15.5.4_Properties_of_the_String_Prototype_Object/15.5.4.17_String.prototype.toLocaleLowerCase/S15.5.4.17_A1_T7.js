// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A1_T7;
* @section: 15.5.4.17;
* @assertion: String.prototype.toLocaleLowerCase();
* @description: Call toLocaleLowerCase() function of NaN;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A1_T7",

path: "15.5.4.17",

description: "Call toLocaleLowerCase() function of NaN",

test: function testcase() {
   Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (NaN.toLocaleLowerCase()!== "nan") {
  $ERROR('#1: Number.prototype.toLocaleLowerCase = String.prototype.toLocaleLowerCase; NaN.toLocaleLowerCase()=== "nan". Actual: '+NaN.toLocaleLowerCase());
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

