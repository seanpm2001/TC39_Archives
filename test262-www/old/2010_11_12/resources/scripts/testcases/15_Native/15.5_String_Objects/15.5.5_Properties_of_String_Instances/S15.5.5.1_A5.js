// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.5.1_A5;
* @section: 15.5.5.1;
* @assertion: Once a String object is created, the length property is unchanging;
* @description: Change valueOf and toString of String object and check length property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.5.1_A5",

path: "15.5.5.1",

description: "Change valueOf and toString of String object and check length property",

test: function testcase() {
   var __str__instance = new String("ABC\u0041\u0042\u0043");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str__instance.length !== 6) {
  $ERROR('#1: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.length === 6. Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

__str__instance.valueOf = function(){return "ed"};
__str__instance.toString = function(){return "ed"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__str__instance !="ed") {
  $ERROR('#2: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.valueOf = function(){return "ed"}; __str__instance.toString = function(){return "ed"}; __str__instance =="ed". Actual: __str__instance =='+__str__instance ); 
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__str__instance.length !== 6) {
  $ERROR('#3: var __str__instance = new String("ABC\\u0041\\u0042\\u0043"); __str__instance.valueOf = function(){return "ed"}; __str__instance.toString = function(){return "ed"}; __str__instance.length === 6. Actual: __str__instance.length ==='+__str__instance.length ); 
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

