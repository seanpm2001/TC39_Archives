// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.25_A1_T2;
 * @section: 15.9.5.25;
 * @assertion: The Date.prototype property "getUTCMilliseconds" has { DontEnum } attributes;
 * @description: Checking absence of DontDelete attribute;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.25_A1_T2",

path: "15.9.5.25",

description: "Checking absence of DontDelete attribute",

test: function testcase() {
   if (delete Date.prototype.getUTCMilliseconds  === false) {
  $ERROR('#1: The Date.prototype.getUTCMilliseconds property has not the attributes DontDelete');
}

if (Date.prototype.hasOwnProperty('getUTCMilliseconds')) {
  $FAIL('#2: The Date.prototype.getUTCMilliseconds property has not the attributes DontDelete');
}


 }
});

