// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.11.3_A1_T1;
* @section: 15.11.3, 16;
* @assertion: The value of the internal [[Prototype]] property of the Error constructor is the Function prototype object(15.3.4);
* @description: Checking prototype of constructor of the newly constructed Error object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.11.3_A1_T1",

path: "15.11.3, 16",

description: "Checking prototype of constructor of the newly constructed Error object",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
var err1=Error("err");
if(!Function.prototype.isPrototypeOf(err1.constructor)){
  $ERROR('#1: var err1=Error("err"); Function.prototype.isPrototypeOf(err1.constructor) return true. Actual:'+Function.prototype.isPrototypeOf(err1.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!Function.prototype.isPrototypeOf(Error.constructor)){
  $ERROR('#2: Function.prototype.isPrototypeOf(Error.constructor) return true. Actual:'+Function.prototype.isPrototypeOf(Error.constructor));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

