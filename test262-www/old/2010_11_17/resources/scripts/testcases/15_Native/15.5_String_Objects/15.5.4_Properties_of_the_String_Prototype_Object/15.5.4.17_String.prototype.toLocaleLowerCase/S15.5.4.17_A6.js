// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A6;
* @section: 15.5.4.17, 13.2;
* @assertion: String.prototype.toLocaleLowerCase has not prototype property;
* @description: Checking String.prototype.toLocaleLowerCase.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A6",

path: "15.5.4.17, 13.2",

description: "Checking String.prototype.toLocaleLowerCase.prototype",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (String.prototype.toLocaleLowerCase.prototype !== undefined) {
  $ERROR('#1: String.prototype.toLocaleLowerCase.prototype === undefined. Actual: '+String.prototype.toLocaleLowerCase.prototype );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

