// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A8;
* @section: 15.5.4.19;
* @assertion: The String.prototype.toLocaleUpperCase.length property has the attribute DontEnum;
* @description: Checking if enumerating the String.prototype.toLocaleUpperCase.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A8",

path: "15.5.4.19",

description: "Checking if enumerating the String.prototype.toLocaleUpperCase.length property fails",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#0
if (!(String.prototype.toLocaleUpperCase.hasOwnProperty('length'))) {
  $FAIL('#0: String.prototype.toLocaleUpperCase.hasOwnProperty(\'length\') return true. Actual: '+String.prototype.toLocaleUpperCase.hasOwnProperty('length'));
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
// CHECK#1
if (String.prototype.toLocaleUpperCase.propertyIsEnumerable('length')) {
  $ERROR('#1: String.prototype.toLocaleUpperCase.propertyIsEnumerable(\'length\') return false');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
// CHECK#2
var count=0;

for (var p in String.prototype.toLocaleUpperCase){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count=0; for (p in String.prototype.toLocaleUpperCase){if (p==="length") count++;}; count === 0. Actual: '+count );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

