// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5.11_A2_T1;
 * @section: 15.9.5.11;
 * @assertion: The "length" property of the "getUTCFullYear" is 0;
 * @description: The "length" property of the "getUTCFullYear" is 0;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5.11_A2_T1",

path: "15.9.5.11",

description: "The \"length\" property of the \"getUTCFullYear\" is 0",

test: function testcase() {
   if(Date.prototype.getUTCFullYear.hasOwnProperty("length") !== true){
  $ERROR('#1: The getUTCFullYear has a "length" property');
}

if(Date.prototype.getUTCFullYear.length !== 0){
  $ERROR('#2: The "length" property of the getUTCFullYear is 0');
}


 }
});

