// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A1_T6;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf(searchString, position);
* @description: Call indexOf(searchString, position) function with x argument of new String object, where x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A1_T6",

path: "15.5.4.7",

description: "Call indexOf(searchString, position) function with x argument of new String object, where x is undefined variable",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(undefined) evaluates to "" indexOf(undefined) evaluates to indexOf("",0)
if (new String("undefined").indexOf(x) !== 0) {
  $ERROR('#1: var x; new String("undefined").indexOf(x) === 0. Actual: '+new String("undefined").indexOf(x) ); 
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

