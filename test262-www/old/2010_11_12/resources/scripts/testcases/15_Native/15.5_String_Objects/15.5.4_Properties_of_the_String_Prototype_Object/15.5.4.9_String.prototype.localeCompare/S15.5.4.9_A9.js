// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.9_A9;
* @section: 15.5.4.9;
* @assertion: The String.prototype.localeCompare.length property has the attribute DontDelete;
* @description: Checking if deleting the String.prototype.localeCompare.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.9_A9",

path: "15.5.4.9",

description: "Checking if deleting the String.prototype.localeCompare.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#0: String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (delete String.prototype.localeCompare.length) {
  $ERROR('#1: delete String.prototype.localeCompare.length return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#2: delete String.prototype.localeCompare.length; String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

