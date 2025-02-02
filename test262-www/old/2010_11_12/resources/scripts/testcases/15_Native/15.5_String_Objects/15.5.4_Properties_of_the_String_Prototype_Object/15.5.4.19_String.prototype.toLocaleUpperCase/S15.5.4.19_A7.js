// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A7;
* @section: 15.5.4.19, 13.2;
* @assertion: String.prototype.toLocaleUpperCase can't be used as constructor;
* @description: Checking if creating the String.prototype.toLocaleUpperCase object fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A7",

path: "15.5.4.19, 13.2",

description: "Checking if creating the String.prototype.toLocaleUpperCase object fails",

test: function testcase() {
   var __FACTORY = String.prototype.toLocaleUpperCase;

try {
  var __instance = new __FACTORY;
  $FAIL('#1: __FACTORY = String.prototype.toLocaleUpperCase; "__instance = new __FACTORY" lead to throwing exception');
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.1:  var __instance = new __FACTORY;  Object has no construct lead  a TypeError. Actual: ' + (e));  
  }
}

 }
});

