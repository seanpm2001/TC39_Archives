// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.2.1_A2_T2;
* @section: 15.5.2.1, 15.5.3.1;
* @assertion: The [[Prototype]] property of the newly constructed object is set to the original String prototype object;
* @description: Creating string object with "new String(string)" adding custom property;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.2.1_A2_T2",

path: "15.5.2.1, 15.5.3.1",

description: "Creating string object with \"new String(string)\" adding custom property",

test: function testcase() {
   var __str__obj = new String("shocking blue");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str__obj["__custom__prop"]!==undefined) {
  $ERROR('#1: var __str__obj = new String("shocking blue"); __str__obj["__custom__prop"]===undefined. Actual: __str__obj["__custom__prop"]==='+__str__obj["__custom__prop"]); 
}
//
//////////////////////////////////////////////////////////////////////////////

String.prototype.__custom__prop = "bor";

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str__obj["__custom__prop"]!=="bor") {
  $ERROR('#2: var __str__obj = new String("shocking blue"); String.prototype.__custom__prop = "bor"; __str__obj["__custom__prop"]==="bor". Actual: __str__obj["__custom__prop"]==='+__str__obj["__custom__prop"]); 
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

