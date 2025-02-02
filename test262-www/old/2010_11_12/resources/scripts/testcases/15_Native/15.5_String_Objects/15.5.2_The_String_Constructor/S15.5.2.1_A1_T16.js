// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.2.1_A1_T16;
* @section: 15.5.2.1;
* @assertion: When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
* The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied;
* @description: Creating string object with "new String()" initialized with .12345 and other numbers;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.2.1_A1_T16",

path: "15.5.2.1",

description: "Creating string object with \"new String()\" initialized with .12345 and other numbers",

test: function testcase() {
   __str =new String(.12345);
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __str !== "object") {
  $ERROR('#1: __str =new String(.12345); typeof __str === "object". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1.5
if (__str.constructor !== String) {
  $ERROR('#1.5: __str =new String(.12345); __str.constructor === String. Actual: __str.constructor ==='+__str.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str !="0.12345") {
  $ERROR('#2: __str =new String(.12345); __str =="0.12345". Actual: __str =='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str =new  String(.012345);
//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __str !== "object") {
  $ERROR('#3: __str =new  String(.012345); typeof __str === "object". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2.5
if (__str.constructor !== String) {
  $ERROR('#3.5: __str =new  String(.012345); __str.constructor === String. Actual: __str.constructor ==='+__str.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__str !="0.012345") {
  $ERROR('#4: __str =new  String(.012345); __str =="0.012345". Actual: __str =='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str =new  String(.0012345);
//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (typeof __str !== "object") {
  $ERROR('#5: __str =new  String(.0012345); typeof __str === "object". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5.5
if (__str.constructor !== String) {
  $ERROR('#5.5: __str =new  String(.0012345); __str.constructor === String. Actual: __str.constructor ==='+__str.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#6
if (__str !="0.0012345") {
  $ERROR('#6: __str =new  String(.0012345); __str =="0.0012345". Actual: __str =='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str =new  String(.00000012345);
//////////////////////////////////////////////////////////////////////////////
//CHECK#7
if (typeof __str !== "object") {
  $ERROR('#7: __str =new  String(.00000012345); typeof __str === "object". Actual: typeof __str ==='+typeof __str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#7.5
if (__str.constructor !== String) {
  $ERROR('#7.5: __str =new  String(.00000012345); __str.constructor === String. Actual: __str.constructor ==='+__str.constructor ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#8
if (__str !="1.2345e-7") {
  $ERROR('#8: __str =new  String(.00000012345); __str =="1.2345e-7". Actual: __str =='+__str ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

