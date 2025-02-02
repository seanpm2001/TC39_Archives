// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.1_A1_T3;
 * @section: 15.9.4.1;
 * @assertion: The Date property "prototype" has { DontEnum, DontDelete, ReadOnly } attributes;
 * @description: Checking DontEnum attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.1_A1_T3",

path: "15.9.4.1",

description: "Checking DontEnum attribute",

test: function testcase() {
   if (Date.propertyIsEnumerable('prototype')) {
  $ERROR('#1: The Date.prototype property has the attribute DontEnum');
}

for(x in Date) {
  if(x === "prototype") {
    $ERROR('#2: The Date.prototype has the attribute DontEnum');
  }
}


 }
});

