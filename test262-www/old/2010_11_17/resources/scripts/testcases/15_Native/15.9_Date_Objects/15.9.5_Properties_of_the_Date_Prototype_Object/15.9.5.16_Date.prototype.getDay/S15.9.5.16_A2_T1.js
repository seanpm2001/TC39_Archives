// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.16_A2_T1;
 * @section: 15.9.5.16;
 * @assertion: The "length" property of the "getDay" is 0;
 * @description: The "length" property of the "getDay" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.16_A2_T1",

path: "15.9.5.16",

description: "The \"length\" property of the \"getDay\" is 0",

test: function testcase() {
   if(Date.prototype.getDay.hasOwnProperty("length") !== true){
  $ERROR('#1: The getDay has a "length" property');
}

if(Date.prototype.getDay.length !== 0){
  $ERROR('#2: The "length" property of the getDay is 0');
}


 }
});

