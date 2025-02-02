// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.3.1_A1;
* @section: 15.5.3.1, 15.5.4;
* @assertion: The String has property prototype;
* @description: Checking String.hasOwnProperty('prototype');
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.3.1_A1",

path: "15.5.3.1, 15.5.4",

description: "Checking String.hasOwnProperty(\'prototype\')",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(String.hasOwnProperty('prototype'))) {
  $ERROR('#1: String.hasOwnProperty(\'prototype\') return true. Actual: '+String.hasOwnProperty('prototype'));
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

