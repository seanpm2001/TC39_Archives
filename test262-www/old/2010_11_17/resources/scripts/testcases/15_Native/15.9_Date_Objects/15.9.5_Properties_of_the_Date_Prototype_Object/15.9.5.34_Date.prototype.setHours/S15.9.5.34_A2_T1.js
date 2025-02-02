// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.34_A2_T1;
 * @section: 15.9.5.34;
 * @assertion: The "length" property of the "setHours" is 4;
 * @description: The "length" property of the "setHours" is 4;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.34_A2_T1",

path: "15.9.5.34",

description: "The \"length\" property of the \"setHours\" is 4",

test: function testcase() {
   if(Date.prototype.setHours.hasOwnProperty("length") !== true){
  $ERROR('#1: The setHours has a "length" property');
}

if(Date.prototype.setHours.length !== 4){
  $ERROR('#2: The "length" property of the setHours is 4');
}


 }
});

