// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.1.1_A1_T6;
* @section: 15.5.1.1;
* @assertion: When String is called as a function rather than as a constructor, it performs a type conversion;
* @description: Checking by using eval, Call String(eval());;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.1.1_A1_T6",

path: "15.5.1.1",

description: "Checking by using eval, Call String(eval())",

test: function testcase() {
   var __str = String(eval());

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "string") {
  $ERROR('#1: __str = String(eval()); typeof __str === "string". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !== "undefined") {
  $ERROR('#2: __str = String(eval()); __str === "undefined". Actual: __str ==='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

