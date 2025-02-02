// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.1_A3_T1;
* @section: 11.2.1, 9.9, 11.2.3, 15.6.4.2;
* @assertion: MemberExpression calls ToObject(MemberExpression) and ToString(Expression). CallExpression calls ToObject(CallExpression) and ToString(Expression);
* @description: Checking Boolean case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.1_A3_T1",

path: "11.2.1, 9.9, 11.2.3, 15.6.4.2",

description: "Checking Boolean case",

test: function testcase() {
   //CHECK#1
if (true.toString() !== "true") {
  $ERROR('#1: true.toString() === "true". Actual: ' + (true.toString()));
}

//CHECK#2
if (false["toString"]() !== "false") {
  $ERROR('#2: false["toString"]() === "false". Actual: ' + (false["toString"]()));
}

//CHECK#3
if (new Boolean(true).toString() !== "true") {
  $ERROR('#3: new Boolean(true).toString() === "true". Actual: ' + (new Boolean(true).toString()));
}

//CHECK#4
if (new Boolean(false)["toString"]() !== "false") {
  $ERROR('#4: new Boolean(false)["toString"]() === "false". Actual: ' + (new Boolean(false)["toString"]()));
}  

 }
});

