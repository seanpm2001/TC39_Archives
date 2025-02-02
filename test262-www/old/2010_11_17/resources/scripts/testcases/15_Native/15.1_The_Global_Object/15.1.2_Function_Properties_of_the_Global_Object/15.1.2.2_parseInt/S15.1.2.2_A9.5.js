// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A9.5;
 * @section: 15.1.2.2, 15.2.4.7, 12.6.4;
 * @assertion: The parseInt property has the attribute DontEnum;
 * @description: Checking use propertyIsEnumerable, for-in;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A9.5",

path: "15.1.2.2, 15.2.4.7, 12.6.4",

description: "Checking use propertyIsEnumerable, for-in",

test: function testcase() {
   //CHECK#1
if (this.propertyIsEnumerable('parseInt') !== false) {
  $ERROR('#1: this.propertyIsEnumerable(\'parseInt\') === false. Actual: ' + (this.propertyIsEnumerable('parseInt')));
}

//CHECK#2
var result = true;
for (var p in this){
  if (p === "parseInt") {
    result = false;
  }  
}

if (result !== true) {
  $ERROR('#2: result = true; for (p in this) { if (p === "parseInt") result = false; }  result === true;');
}

 }
});

