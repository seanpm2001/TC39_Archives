// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A2_T43;
* @section: 15.5.4.14;
* @assertion: String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
* been stored. The substrings are determined by searching from left to right for occurrences of
* separator; these occurrences are not part of any substring in the returned array, but serve to divide up
* the string value. The value of separator may be a string of any length or it may be a RegExp object;
* @description: Call split("l",4), instance is String("hello");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A2_T43",

path: "15.5.4.14",

description: "Call split(\"l\",4), instance is String(\"hello\")",

test: function testcase() {
   var __instance = new String("hello");

var __split = __instance.split("l", 4);

var __expected = ["he","","o"];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __instance = new String("hello"); __split = __instance.split("l", 4); __expected = ["he","","o"]; __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== __expected.length) {
  $ERROR('#2: var __instance = new String("hello"); __split = __instance.split("l", 4); __expected = ["he","","o"]; __split.length === __expected.length. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
for(var index=0; index<__expected.length; index++) {
  if (__split[index] !== __expected[index]) {
     $ERROR('#3.'+index+': var __instance = new String("hello"); __split = __instance.split("l", 4); __expected = ["he","","o"]; __split[index] === '+__expected[index]+'. Actual: '+__split[index] );
    }
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

