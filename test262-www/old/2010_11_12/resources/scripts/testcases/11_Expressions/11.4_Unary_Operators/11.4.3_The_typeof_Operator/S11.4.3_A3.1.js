// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.3_A3.1;
* @section: 11.4.3;
* @assertion: Result of applying "typeof" operator to undefined is "undefined";
* @description: typeof undefined === "undefined";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.3_A3.1",

path: "11.4.3",

description: "typeof undefined === \"undefined\"",

test: function testcase() {
   //CHECK#1
if (typeof undefined !== "undefined") {
  $ERROR('#1: typeof undefined === "undefined". Actual: ' + (typeof undefined));
}

//CHECK#2
if (typeof void 0 !== "undefined") {
  $ERROR('#2: typeof void 0 === "undefined". Actual: ' + (typeof void 0));
}

 }
});

