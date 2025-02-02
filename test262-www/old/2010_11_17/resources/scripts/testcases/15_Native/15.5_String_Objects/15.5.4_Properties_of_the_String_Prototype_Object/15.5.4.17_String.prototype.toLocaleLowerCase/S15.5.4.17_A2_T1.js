// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.17_A2_T1;
* @section: 15.5.4.17;
* @assertion: String.prototype.toLocaleLowerCase() return a string, but not a String object;
* @description: Checking returned result;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.17_A2_T1",

path: "15.5.4.17",

description: "Checking returned result",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("Hello, WoRlD!".toLocaleLowerCase() !== "hello, world!") {
  $ERROR('#1: "Hello, WoRlD!".toLocaleLowerCase() === "hello, world!". Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ("Hello, WoRlD!".toLocaleLowerCase() !== String("hello, world!")) {
  $ERROR('#2: "Hello, WoRlD!".toLocaleLowerCase() === String("hello, world!"). Actual: '+("Hello, WoRlD!".toLocaleLowerCase()) );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ("Hello, WoRlD!".toLocaleLowerCase() === new String("hello, world!")) {
  $ERROR('#3: "Hello, WoRlD!".toLocaleLowerCase() !== new String("hello, world!")');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

