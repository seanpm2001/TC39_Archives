// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.4_A10;
* @section: 15.2.4.4;
* @assertion: The Object.prototype.valueOf.length property has the attribute ReadOnly;
* @description: Checking if varying the Object.prototype.valueOf.length property fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.4_A10",

path: "15.2.4.4",

description: "Checking if varying the Object.prototype.valueOf.length property fails",

test: function testcase() {
   //CHECK#1
if (!(Object.prototype.valueOf.hasOwnProperty('length'))) {
  $FAIL('#1: the Object.prototype.valueOf has length property.');
}

var obj = Object.prototype.valueOf.length;

Object.prototype.valueOf.length = function(){return "shifted";};

//CHECK#2
if (Object.prototype.valueOf.length !== obj) {
  $ERROR('#2: the Object.prototype.valueOf length property has the attributes ReadOnly.');
}

 }
});

