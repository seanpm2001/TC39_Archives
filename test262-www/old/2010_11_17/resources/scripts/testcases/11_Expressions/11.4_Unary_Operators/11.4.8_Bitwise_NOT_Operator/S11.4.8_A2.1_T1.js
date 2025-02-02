// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.8_A2.1_T1;
* @section: 11.4.8;
* @assertion: Operator ~x uses GetValue;
* @description: Either Type(x) is not Reference or GetBase(x) is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.8_A2.1_T1",

path: "11.4.8",

description: "Either Type(x) is not Reference or GetBase(x) is not null",

test: function testcase() {
   //CHECK#1
if (~0 !== -1) {
  $ERROR('#1: ~0 === -1. Actual: ' + (~0));
}

//CHECK#2
if (~(~0) !== 0) {
  $ERROR('#2: ~(~0) === 0. Actual: ' + (~(~0)));
}

//CHECK#3
var x = 0;
if (~x !== -1) {
  $ERROR('#3: var x = 0; ~x === -1. Actual: ' + (~x));
}

//CHECK#4
var x = 0;
if (~(~x) !== 0) {
  $ERROR('#4: var x = 0; ~(~x) === 0. Actual: ' + (~(~x)));
}

//CHECK#5
var object = new Object();
object.prop = 0;
if (~object.prop !== -1) {
  $ERROR('#5: var object = new Object(); object.prop = 0; ~object.prop === -1. Actual: ' + (~object.prop));
}

 }
});

