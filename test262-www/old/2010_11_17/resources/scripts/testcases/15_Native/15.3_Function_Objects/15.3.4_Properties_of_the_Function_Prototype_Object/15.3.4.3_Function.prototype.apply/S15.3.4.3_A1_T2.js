// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A1_T2;
* @section: 15.3.4.3;
* @assertion: The apply method performs a function call using the [[Call]] property of the object. If the object does not have a [[Call]] property, a TypeError exception is thrown;
* @description: Calling "apply" method of the object that does not have a [[Call]] property. 
* Prototype of the object is Function.prototype;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A1_T2",

path: "15.3.4.3",

description: "Calling \"apply\" method of the object that does not have a [[Call]] property.",

test: function testcase() {
   function FACTORY(){};

FACTORY.prototype=Function.prototype;

var obj = new FACTORY;

//CHECK#1
if (typeof obj.apply !== "function") {
  $ERROR('#1: apply method accessed');
}

//CHECK#2
try {
  obj.apply();
  $FAIL('#2: If the object does not have a [[Call]] property, a TypeError exception is thrown');
} catch (e) {
  if (!(e instanceof TypeError)) {
  	$ERROR('#2.1: If the object does not have a [[Call]] property, a TypeError exception is thrown');
  }
}

 }
});

