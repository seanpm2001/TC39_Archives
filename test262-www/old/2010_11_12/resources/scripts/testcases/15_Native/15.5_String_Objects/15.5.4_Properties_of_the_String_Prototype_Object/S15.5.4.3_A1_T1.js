// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.3_A1_T1;
* @section: 15.5.4.3;
* @assertion: String.prototype.valueOf() returns this string value;
* @description: Create String object as new String(1) and check it`s valueOf();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.3_A1_T1",

path: "15.5.4.3",

description: "Create String object as new String(1) and check it`s valueOf()",

test: function testcase() {
   var __string__obj = new String(1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__string__obj.valueOf() !== ""+1) {
  $ERROR('#1: __string__obj = new String(1); __string__obj.valueOf() === ""+1. Actual: __string__obj.valueOf() ==='+__string__obj.valueOf() ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

