// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.2.1_A2_T1;
* @section: 15.11.2.1, 16;
* @assertion: The [[Prototype]] property of the newly constructed object is set to the original Error prototype 
* object, the one that is the initial value of Error.prototype (15.11.3.1);
* @description: Checking prototype of the newly constructed Error object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.2.1_A2_T1",

path: "15.11.2.1, 16",

description: "Checking prototype of the newly constructed Error object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
var err1=new Error('msg1');
if(!Error.prototype.isPrototypeOf(err1)){
  $ERROR('#1: Error.prototype.isPrototypeOf(err1) return true. Actual: '+Error.prototype.isPrototypeOf(err1));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

