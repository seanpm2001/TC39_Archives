// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A1_T14;
* @section: 15.5.1.1;
* @assertion: When String is called as a function rather than as a constructor, it performs a type conversion;
* @description: Call String(0) and String(-0);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A1_T14",

path: "15.5.1.1",

description: "Call String(0) and String(-0)",

test: function testcase() {
   var __str = String(0);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(0); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "0") {
  $ERROR('#2: __str = String(0); __str === "0". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str = String(-0);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#3: __str = String(-0); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "0") {
  $ERROR('#4: __str = String(-0); __str === "0". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

