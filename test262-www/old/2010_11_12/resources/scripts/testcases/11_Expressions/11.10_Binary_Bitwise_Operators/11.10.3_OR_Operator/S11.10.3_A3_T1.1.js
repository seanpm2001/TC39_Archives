// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.3_A3_T1.1;
 * @section: 11.10.3;
 * @assertion: Operator x | y returns ToNumber(x) | ToNumber(y); 
 * @description: Type(x) and Type(y) vary between primitive boolean and Boolean object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.3_A3_T1.1",

path: "11.10.3",

description: "Type(x) and Type(y) vary between primitive boolean and Boolean object",

test: function testcase() {
   //CHECK#1
if ((true | true) !== 1) {
  $ERROR('#1: (true | true) === 1. Actual: ' + ((true | true)));
}

//CHECK#2
if ((new Boolean(true) | true) !== 1) {
  $ERROR('#2: (new Boolean(true) | true) === 1. Actual: ' + ((new Boolean(true) | true)));
}

//CHECK#3
if ((true | new Boolean(true)) !== 1) {
  $ERROR('#3: (true | new Boolean(true)) === 1. Actual: ' + ((true | new Boolean(true))));
}

//CHECK#4
if ((new Boolean(true) | new Boolean(true)) !== 1) {
  $ERROR('#4: (new Boolean(true) | new Boolean(true)) === 1. Actual: ' + ((new Boolean(true) | new Boolean(true))));
}

 }
});

