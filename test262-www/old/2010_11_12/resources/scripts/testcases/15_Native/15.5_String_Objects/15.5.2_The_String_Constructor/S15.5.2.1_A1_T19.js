// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.2.1_A1_T19;
* @section: 15.5.2.1;
* @assertion: When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
* The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied;
* @description: Creating string object with "new String()" initialized with Array of numbers;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.2.1_A1_T19",

path: "15.5.2.1",

description: "Creating string object with \"new String()\" initialized with Array of numbers",

test: function testcase() {
   var __str = new String(new Array(1,2,3));
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "object") {
  $ERROR('#1: __str = new String(new Array(1,2,3)); typeof __str === "object". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1.5
if (__str.constructor !== String) {
  $ERROR('#1.5: __str = new String(new Array(1,2,3)); __str.constructor === String. Actual: __str.constructor ==='+__str.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !="1,2,3") {
  $ERROR('#2: __str = new String(new Array(1,2,3)); __str =="1,2,3". Actual: __str =='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

