// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.5.1_A2;
* @section: 15.5.5.1;
* @assertion: length property has the attributes {DontEnum};
* @description: Checking if enumerating the length property of String fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.5.1_A2",

path: "15.5.5.1",

description: "Checking if enumerating the length property of String fails",

test: function testcase() {
   var __str__instance = new String("globglob");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__str__instance.hasOwnProperty("length"))) {
  $ERROR('#1: var __str__instance = new String("globglob"); __str__instance.hasOwnProperty("length") return true. Actual: '+__str__instance.hasOwnProperty("length"));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
for(prop in __str__instance){
    if (prop === "length") {
      $ERROR('#2: length property has the attributes {DontEnum}');
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

