// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T1;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: Not any arguments at call function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A3_T1",

path: "15.3.4.4",

description: "Not any arguments at call function",

test: function testcase() {
   Function("this.field=\"strawberry\"").call();

//CHECK#1
if (this["field"] !== "strawberry") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});

