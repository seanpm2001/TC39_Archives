// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.3_A3_T2.9;
 * @section: 11.5.3;
 * @assertion: Operator x % y returns ToNumber(x) % ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.3_A3_T2.9",

path: "11.5.3",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Null",

test: function testcase() {
   //CHECK#1
if (isNaN(true % null) !== true) {
  $ERROR('#1: true % null === Not-a-Number. Actual: ' + (true % null));
}

//CHECK#2
if (null % true !== 0) {
  $ERROR('#2: null % true === 0. Actual: ' + (null % true));
}

//CHECK#3
if (isNaN(new Boolean(true) % null) !== true) {
  $ERROR('#3: new Boolean(true) % null === Not-a-Number. Actual: ' + (new Boolean(true) % null));
}

//CHECK#4
if (null % new Boolean(true) !== 0) {
  $ERROR('#4: null % new Boolean(true) === 0. Actual: ' + (null % new Boolean(true)));
}

 }
});

