// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.2_A4_T1;
* @section: 11.4.2;
* @assertion: Operator "void" evaluates UnaryExpression and returns undefined;
* @description: Type(x) is boolean primitive or Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.2_A4_T1",

path: "11.4.2",

description: "Type(x) is boolean primitive or Boolean object",

test: function testcase() {
   //CHECK#1
var x = false; 
if (void x !== undefined) {
  $ERROR('#1: var x = false; void x === undefined. Actual: ' + (void x));
}

//CHECK#2
var x = new Boolean(true);
if (void x !== undefined) {
  $ERROR('#2: var x = new Boolean(true); void x === undefined. Actual: ' + (void x));
}

 }
});

