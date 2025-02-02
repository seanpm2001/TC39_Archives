// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.5_A2_T1;
* @section: 8.6.2.5, 11.4.1;
* @assertion: When the [[Delete]] method of O is called with property name P, 
* and if O doesn't have a property with name P, return true;
* @description: Try to delete not existent properties; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.5_A2_T1",

path: "8.6.2.5, 11.4.1",

description: "Try to delete not existent properties",

test: function testcase() {
   var __color__map = {};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete __color__map.red !== true){
  $ERROR('#1: var __color__map = {}; delete __color__map.red === true. Actual: ' + (delete __color__map.red));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (delete __color__map["green"] !== true){
  $ERROR('#2: var __color__map = {}; delete __color__map["green"] === true. Actual: ' + (delete __color__map["green"]));
};
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
var blue = 1;
if (delete __color__map[blue] !== true){
  $ERROR('#3: var __color__map = {}; var blue = 1; delete __color__map[blue] === true. Actual: ' + (delete __color__map[blue]));
};
//
//////////////////////////////////////////////////////////////////////////////


 }
});

