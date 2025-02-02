// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.2_A3_T2.8;
 * @section: 11.6.2;
 * @assertion: Operator x - y returns ToNumber(x) - ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.2_A3_T2.8",

path: "11.6.2",

description: "Type(x) is different from Type(y) and both types vary between Boolean (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (isNaN(true - undefined) !== true) {
  $ERROR('#1: true - undefined === Not-a-Number. Actual: ' + (true - undefined));
}

//CHECK#2
if (isNaN(undefined - true) !== true) {
  $ERROR('#2: undefined - true === Not-a-Number. Actual: ' + (undefined - true));
}

//CHECK#3
if (isNaN(new Boolean(true) - undefined) !== true) {
  $ERROR('#3: new Boolean(true) - undefined === Not-a-Number. Actual: ' + (new Boolean(true) - undefined));
}

//CHECK#4
if (isNaN(undefined - new Boolean(true)) !== true) {
  $ERROR('#4: undefined - new Boolean(true) === Not-a-Number. Actual: ' + (undefined - new Boolean(true)));
}

 }
});

