// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.31_A1_T3;
 * @section: 15.9.5.31;
 * @assertion: The Date.prototype property "setUTCSeconds" has { DontEnum } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.31_A1_T3",

path: "15.9.5.31",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.prototype.propertyIsEnumerable('setUTCSeconds')) {
  $ERROR('#1: The Date.prototype.setUTCSeconds property has the attribute DontEnum');
}

for(x in Date.prototype) {
  if(x === "setUTCSeconds") {
    $ERROR('#2: The Date.prototype.setUTCSeconds has the attribute DontEnum');
  }
}


 }
});

