// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.4.1_A1_T2;
 * @section: 15.9.4.1;
 * @assertion: The Date property "prototype" has { DontEnum, DontDelete, ReadOnly } attributes;
 * @description: Checking DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.4.1_A1_T2",

path: "15.9.4.1",

description: "Checking DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype !== false) {
  $ERROR('#1: The Date.prototype property has the attributes DontDelete');
}

if (!Date.hasOwnProperty('prototype')) {
  $FAIL('#2: The Date.prototype property has the attributes DontDelete');
}


 }
});

