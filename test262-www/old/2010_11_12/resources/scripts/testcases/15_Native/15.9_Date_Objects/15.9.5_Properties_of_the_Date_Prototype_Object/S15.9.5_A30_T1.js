// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5_A30_T1;
 * @section: 15.9.5;
 * @assertion: The Date.prototype has the property "setSeconds";
 * @description: The Date.prototype has the property "setSeconds";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5_A30_T1",

path: "15.9.5",

description: "The Date.prototype has the property \"setSeconds\"",

test: function testcase() {
   if(Date.prototype.hasOwnProperty("setSeconds") !== true){
  $ERROR('#1: The Date.prototype has the property "setSeconds"');
}


 }
});

