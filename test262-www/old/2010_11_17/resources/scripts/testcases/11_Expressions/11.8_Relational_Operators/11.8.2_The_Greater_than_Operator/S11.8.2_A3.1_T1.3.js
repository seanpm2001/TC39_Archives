// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A3.1_T1.3;
 * @section: 11.8.2;
 * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x > y returns ToNumber(x) > ToNumber(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between Null and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A3.1_T1.3",

path: "11.8.2",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between Null and Undefined",

test: function testcase() {
   //CHECK#1
if (null > undefined !== false) {
  $ERROR('#1: null > undefined === false');
}

//CHECK#2
if (undefined > null !== false) {
  $ERROR('#2: undefined > null === false');
}

//CHECK#3
if (undefined > undefined !== false) {
  $ERROR('#3: undefined > undefined === false');
}

//CHECK#4
if (null > null !== false) {
  $ERROR('#4: null > null === false');
}

 }
});

