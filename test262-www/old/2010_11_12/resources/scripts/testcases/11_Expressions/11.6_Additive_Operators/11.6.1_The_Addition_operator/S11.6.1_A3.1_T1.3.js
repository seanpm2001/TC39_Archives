// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.6.1_A3.1_T1.3;
 * @section: 11.6.1;
 * @assertion: If Type(Primitive(x)) is not String and Type(Primitive(y)) is not String, then operator x + y returns ToNumber(x) + ToNumber(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A3.1_T1.3",

path: "11.6.1",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
if (isNaN(null + undefined) !== true) {
  $ERROR('#1: null + undefined === Not-a-Number. Actual: ' + (null + undefined));
}

//CHECK#2
if (isNaN(undefined + null) !== true) {
  $ERROR('#2: undefined + null === Not-a-Number. Actual: ' + (undefined + null));
}

//CHECK#3
if (isNaN(undefined + undefined) !== true) {
  $ERROR('#3: undefined + undefined === Not-a-Number. Actual: ' + (undefined + undefined));
}

//CHECK#4
if (null + null !== 0) {
  $ERROR('#4: null + null === 0. Actual: ' + (null + null));
}

 }
});

