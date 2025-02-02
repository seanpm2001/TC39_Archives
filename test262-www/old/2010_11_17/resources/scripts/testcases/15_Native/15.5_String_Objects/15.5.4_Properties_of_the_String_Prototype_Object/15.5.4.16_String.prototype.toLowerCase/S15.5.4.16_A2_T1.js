// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.16_A2_T1;
* @section: 15.5.4.16;
* @assertion: String.prototype.toLowerCase() return a string, but not a String object;
* @description: Checking returned result;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.16_A2_T1",

path: "15.5.4.16",

description: "Checking returned result",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("Hello, WoRlD!".toLowerCase() !== "hello, world!") {
  $ERROR('#1: "Hello, WoRlD!".toLowerCase() === "hello, world!". Actual: '+("Hello, WoRlD!".toLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ("Hello, WoRlD!".toLowerCase() !== String("hello, world!")) {
  $ERROR('#2: "Hello, WoRlD!".toLowerCase() === String("hello, world!"). Actual: '+("Hello, WoRlD!".toLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("Hello, WoRlD!".toLowerCase() ===new String("hello, world!")) {
  $ERROR('#3: "Hello, WoRlD!".toLowerCase() !== new String("hello, world!")');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

