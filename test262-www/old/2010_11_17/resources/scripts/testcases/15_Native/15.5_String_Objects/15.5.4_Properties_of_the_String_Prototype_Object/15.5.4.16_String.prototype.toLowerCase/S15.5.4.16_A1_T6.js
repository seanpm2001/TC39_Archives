// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A1_T6;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase();
* @description: Call toLowerCase() function of Number.NEGATIVE_INFINITY;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A1_T6",

path: "15.5.4.16",

description: "Call toLowerCase() function of Number.NEGATIVE_INFINITY",

test: function testcase() {
   Number.prototype.toLowerCase = String.prototype.toLowerCase;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((Number.NEGATIVE_INFINITY).toLowerCase() !== "-infinity") {
  $ERROR('#1: Number.prototype.toLowerCase = String.prototype.toLowerCase; (Number.NEGATIVE_INFINITY).toLowerCase() === "-infinity". Actual: '+(Number.NEGATIVE_INFINITY).toLowerCase() );
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

