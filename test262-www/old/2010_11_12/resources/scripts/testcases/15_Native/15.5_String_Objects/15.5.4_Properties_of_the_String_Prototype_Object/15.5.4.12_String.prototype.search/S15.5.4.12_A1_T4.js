// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T4;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Call search (regexp) without arguments;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T4",

path: "15.5.4.12",

description: "Call search (regexp) without arguments",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString() evaluates to "" search() evaluates to search("")
if ("".search() !== 0) {
  $ERROR('#1: "".search() === 0. Actual: '+("".search()) );
}

if ("--undefined--".search() != 0) {
  $ERROR('#1: "--undefined--".search() === 0. Actual: '+("--undefined--".search()) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

