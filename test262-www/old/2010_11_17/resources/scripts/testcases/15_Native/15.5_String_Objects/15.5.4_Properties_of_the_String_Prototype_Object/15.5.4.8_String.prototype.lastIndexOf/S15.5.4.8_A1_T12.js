// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A1_T12;
* @section: 15.5.4.8;
* @assertion: String.prototype.lastIndexOf(searchString, position);
* @description: Argument is string, and instance is array of strings;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A1_T12",

path: "15.5.4.8",

description: "Argument is string, and instance is array of strings",

test: function testcase() {
   var __instance = new Array('new','zoo','revue');

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__instance.lastIndexOf('new') !== 0) {
  $ERROR('#1: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.lastIndexOf(\'new\') === 0. Actual: '+__instance.lastIndexOf('new') );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__instance.lastIndexOf('zoo') !== 1) {
  $ERROR('#2: __instance = new Array(\'new\',\'zoo\',\'revue\'); __instance.lastIndexOf(\'zoo\') === 1. Actual: '+__instance.lastIndexOf('zoo') );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

