// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A2.3_T5;
 * @section: 15.4.2.2;
 * @assertion: If the argument len is not a Number, then the length property of 
 * the newly constructed object is set to 1 and the 0 property of 
 * the newly constructed object is set to len;
 * @description: Checking for Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A2.3_T5",

path: "15.4.2.2",

description: "Checking for Number object",

test: function testcase() {
   var obj = new Number(-1);
var x = new Array(obj);

//CHECK#1 
if (x.length !== 1) {
  $ERROR('#1: var obj = new Number(-1); var x = new Array(obj); x.length === 1. Actual: ' + (x.length));
}

//CHECK#2
if (x[0] !== obj) {
  $ERROR('#2: var obj = new Number(-1); var x = new Array(obj); x[0] === obj. Actual: ' + (x[0]));
}

var obj = new Number(4294967296);
var x = new Array(obj);

//CHECK#3 
if (x.length !== 1) {
  $ERROR('#3: var obj = new Number(4294967296); var x = new Array(obj); x.length === 1. Actual: ' + (x.length));
}

//CHECK#4
if (x[0] !== obj) {
  $ERROR('#4: var obj = new Number(4294967296); var x = new Array(obj); x[0] === obj. Actual: ' + (x[0]));
}

var obj = new Number(4294967297);
var x = new Array(obj);

//CHECK#5 
if (x.length !== 1) {
  $ERROR('#5: var obj = new Number(4294967297); var x = new Array(obj); x.length === 1. Actual: ' + (x.length));
}

//CHECK#6
if (x[0] !== obj) {
  $ERROR('#6: var obj = new Number(4294967297); var x = new Array(obj); x[0] === obj. Actual: ' + (x[0]));
}


 }
});

