// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.3_A8;
* @section: 15.10.6.3;
* @assertion: The RegExp.prototype.test.length property has the attribute DontEnum;
* @description: Checking if enumerating the RegExp.prototype.test.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.3_A8",

path: "15.10.6.3",

description: "Checking if enumerating the RegExp.prototype.test.length property fails",

test: function testcase() {
   //CHECK#0
if (RegExp.prototype.test.hasOwnProperty('length') !== true) {
  $ERROR('#0: RegExp.prototype.test.hasOwnProperty(\'length\') === true');
}

 //CHECK#1
if (RegExp.prototype.test.propertyIsEnumerable('length') !== false) {
  $ERROR('#1: RegExp.prototype.test.propertyIsEnumerable(\'length\') === true');
}

 //CHECK#2
count=0;

for (p in RegExp.prototype.test){
  if (p==="length") count++;
}

if (count !== 0) {
  $ERROR('#2: count = 0; for (p in RegExp.prototype.test){ if (p==="length") count++; } count === 0. Actual: ' + (count));
}


 }
});

