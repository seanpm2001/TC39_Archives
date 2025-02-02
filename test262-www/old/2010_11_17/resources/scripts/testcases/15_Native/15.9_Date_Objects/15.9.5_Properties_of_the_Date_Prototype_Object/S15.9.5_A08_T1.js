// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.9.5_A08_T1;
 * @section: 15.9.5;
 * @assertion: The Date.prototype has the property "valueOf";
 * @description: The Date.prototype has the property "valueOf";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.9.5_A08_T1",

path: "15.9.5",

description: "The Date.prototype has the property \"valueOf\"",

test: function testcase() {
   if(Date.prototype.hasOwnProperty("valueOf") !== true){
  $ERROR('#1: The Date.prototype has the property "valueOf"');
}


 }
});

