// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T4;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Arguments are null and number, and instance is function call, that returned string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T4",

path: "15.5.4.13",

description: "Arguments are null and number, and instance is function call, that returned string",

test: function testcase() {
   //since ToInteger(null) yelds 0
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (function(){return "gnulluna"}().slice(null, -3) !== "gnull") {
  $ERROR('#1: function(){return "gnulluna"}().slice(null, -3) === "gnull". Actual: '+function(){return "gnulluna"}().slice(null, -3) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

