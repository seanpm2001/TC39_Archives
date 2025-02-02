// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.1_A3.1_T2;
 * @section: 15.1.2.1, 12.4;
 * @assertion: If Result(3).type is normal and its completion value is a value V, 
 * then return the value V;
 * @description: Expression statement. Eval return object value;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.1_A3.1_T2",

path: "15.1.2.1, 12.4",

description: "Expression statement. Eval return object value",

test: function testcase() {
   //CHECK#1
var x = {};
var y;
if (eval("y = x") !== x) {
  $ERROR('#1: var x = {}; eval("y = x") === x. Actual: ' + (eval("y = x")));
}    


//CHECK#2
if (eval("x") !== x) {
  $ERROR('#2: var x = {}; eval("x") === x. Actual: ' + (eval("x")));
}    


 }
});

