// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A3.1_T2.4;
 * @section: 11.8.2;
 * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x > y returns ToNumber(x) > ToNumber(y); 
 * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A3.1_T2.4",

path: "11.8.2",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (1 > undefined !== false) {
  $ERROR('#1: 1 > undefined === false');
}

//CHECK#2
if (undefined > 1 !== false) {
  $ERROR('#2: undefined > 1 === false');
}

//CHECK#3
if (new Number(1) > undefined !== false) {
  $ERROR('#3: new Number(1) > undefined === false');
}

//CHECK#4
if (undefined > new Number(1) !== false) {
  $ERROR('#4: undefined > new Number(1) === false');
}

 }
});

