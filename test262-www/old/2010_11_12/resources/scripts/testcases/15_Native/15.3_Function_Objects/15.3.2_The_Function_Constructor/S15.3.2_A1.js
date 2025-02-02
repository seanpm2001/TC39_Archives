// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.2_A1;
* @section: 15.3.2;
* @assertion: When Function is called as part of a new expression, it is a constructor: it initialises the newly created object;
* @description: Checking the constuctor of the object that is created as a new Function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.2_A1",

path: "15.3.2",

description: "Checking the constuctor of the object that is created as a new Function",

test: function testcase() {
   var f = new Function;

//CHECK#1
if (f.constructor !== Function) {
  $ERROR('#1: When Function is called as part of a new expression, it is a constructor: it initialises the newly created object');
}

//CHECK#2
if (f === undefined) {
  $ERROR('#2: When Function is called as part of a new expression, it is a constructor: it initialises the newly created object');
}

 }
});

