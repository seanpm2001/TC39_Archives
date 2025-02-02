// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.3_A2_T1;
* @section: 11.4.3;
* @assertion: Operator "typeof" uses GetValue;
* @description: Either Type(x) is not Reference or GetBase(x) is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.3_A2_T1",

path: "11.4.3",

description: "Either Type(x) is not Reference or GetBase(x) is not null",

test: function testcase() {
   //CHECK#1
if (typeof 0 !== "number") {
  $ERROR('#1: typeof 0 === "number". Actual: ' + (typeof 0));
}

//CHECK#2
var x = 0;
if (typeof x !== "number") {
  $ERROR('#2: typeof x === "number". Actual: ' + (typeof x));
}

//CHECK#3
var x = new Object();
if (typeof x !== "object") {
  $ERROR('#3: var x = new Object(); typeof x === "object". Actual: ' + (typeof x));
}

 }
});

