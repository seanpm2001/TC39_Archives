// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2_A4;
* @section: 8.6.2, 11.8.6;
* @assertion: [[HasInstance]] returns a boolean value indicating whether Value delegates behaviour to this object;
* @description: Check that the obj instance of Object, but not instance
*  of Function, String, Number, Array;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2_A4",

path: "8.6.2, 11.8.6",

description: "Check that the obj instance of Object, but not instance",

test: function testcase() {
   var __obj={};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__obj instanceof Object)) {
  $ERROR('#1: var __obj={}; (__obj instanceof Object) === true. Actual: ' + ((__obj instanceof Object)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj instanceof Function) {
  $ERROR('#2: var __obj={}; (__obj instanceof Function) === false. Actual: ' + ((__obj instanceof Function)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__obj instanceof String) {
  $ERROR('#3: var __obj={}; (__obj instanceof String) === false. Actual: ' + ((__obj instanceof String)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__obj instanceof Number) {
  $ERROR('#4: var __obj={}; (__obj instanceof Number) === false. Actual: ' + ((__obj instanceof Number)));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__obj instanceof Array) {
  $ERROR('#5: var __obj={}; (__obj instanceof Array) === false. Actual: ' + ((__obj instanceof Array)));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

