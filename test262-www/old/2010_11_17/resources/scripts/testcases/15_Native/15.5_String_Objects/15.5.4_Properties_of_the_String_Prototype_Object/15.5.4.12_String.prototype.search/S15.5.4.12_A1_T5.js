// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T5;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is null, and instance is function call, that return string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T5",

path: "15.5.4.12",

description: "Argument is null, and instance is function call, that return string",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(null) evaluates to "null" search(null) evaluates to search("null")
if (function(){return "gnulluna"}().search(null) !== 1) {
  $ERROR('#1: function(){return "gnulluna"}().search(null) === 1. Actual: '+function(){return "gnulluna"}().search(null) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

