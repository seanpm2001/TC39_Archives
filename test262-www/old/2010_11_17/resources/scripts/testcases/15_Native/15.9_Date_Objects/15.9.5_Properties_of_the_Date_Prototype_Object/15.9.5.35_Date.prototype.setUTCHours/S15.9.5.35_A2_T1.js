// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.35_A2_T1;
 * @section: 15.9.5.35;
 * @assertion: The "length" property of the "setUTCHours" is 4;
 * @description: The "length" property of the "setUTCHours" is 4;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.35_A2_T1",

path: "15.9.5.35",

description: "The \"length\" property of the \"setUTCHours\" is 4",

test: function testcase() {
   if(Date.prototype.setUTCHours.hasOwnProperty("length") !== true){
  $ERROR('#1: The setUTCHours has a "length" property');
}

if(Date.prototype.setUTCHours.length !== 4){
  $ERROR('#2: The "length" property of the setUTCHours is 4');
}


 }
});

