// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.9_A8;
* @section: 15.5.4.9;
* @assertion: The String.prototype.localeCompare.length property has the attribute DontEnum;
* @description: Checking if enumerating the String.prototype.localeCompare.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.9_A8",

path: "15.5.4.9",

description: "Checking if enumerating the String.prototype.localeCompare.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.localeCompare.hasOwnProperty('length'))) {
  $ERROR('#0: String.prototype.localeCompare.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.localeCompare.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.localeCompare.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.localeCompare.propertyIsEnumerable(\'length\') return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (p in String.prototype.localeCompare){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.localeCompare){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

