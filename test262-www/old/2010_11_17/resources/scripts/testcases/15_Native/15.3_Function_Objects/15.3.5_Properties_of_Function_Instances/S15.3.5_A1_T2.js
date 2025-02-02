// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5_A1_T2;
* @section: 15.3.5;
* @assertion: The value of the [[Class]] property is "Function" ;
* @description: We delete Function.prototype.toString method to access Object.prototype.toString method 
* For testing use variable f = Function();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5_A1_T2",

path: "15.3.5",

description: "We delete Function.prototype.toString method to access Object.prototype.toString method",

test: function testcase() {
   f = Function();

delete Function.prototype.toString;

//CHECK#1
if (f.toString() !== "[object "+"Function"+"]") {
  $ERROR('#1: The value of the [[Class]] property is "Function"');
}
 

 }
});

