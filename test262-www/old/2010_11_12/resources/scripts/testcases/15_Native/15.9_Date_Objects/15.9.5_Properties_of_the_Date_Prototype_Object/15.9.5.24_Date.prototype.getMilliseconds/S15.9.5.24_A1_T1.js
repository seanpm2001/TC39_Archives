// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.24_A1_T1;
 * @section: 15.9.5.24;
 * @assertion: The Date.prototype property "getMilliseconds" has { DontEnum } attributes;
 * @description: Checking absence of ReadOnly attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.24_A1_T1",

path: "15.9.5.24",

description: "Checking absence of ReadOnly attribute",

test: function testcase() {
   x = Date.prototype.getMilliseconds;
if(x === 1)
  Date.prototype.getMilliseconds = 2;
else
  Date.prototype.getMilliseconds = 1;
if (Date.prototype.getMilliseconds === x) {
  $ERROR('#1: The Date.prototype.getMilliseconds has not the attribute ReadOnly');
}


 }
});

