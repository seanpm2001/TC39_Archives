// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.4_A3;
* @section: 8.6.2.4, 12.6.4;
* @assertion: [[hasProperty]] is sensitive to property existence but [[Get]] is not;
* @description: Use [[hasProperty]] and [[Get]] for existent and not existent properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.4_A3",

path: "8.6.2.4, 12.6.4",

description: "Use [[hasProperty]] and [[Get]] for existent and not existent properties",

test: function testcase() {
   var __obj={}; __obj.hole=undefined;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.hole !== undefined) {
  $ERROR('#1: var __obj={}; __obj.hole=undefined; __obj.hole === undefined. Actual: ' + (__obj.hole));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.notexist !== undefined) {
  $ERROR('#2: var __obj={}; __obj.hole=undefined; __obj.notexist === undefined. Actual: ' + (__obj.notexist));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!("hole" in __obj)) {
  $ERROR('#3: var __obj={}; __obj.hole=undefined; "hole" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (("notexist" in __obj)) {
  $ERROR('#4: var __obj={}; __obj.hole=undefined; "notexist" in __obj');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

