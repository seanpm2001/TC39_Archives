// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A3.1_T1.1;
 * @section: 11.8.2;
 * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x > y returns ToNumber(x) > ToNumber(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between primitive boolean and Boolean object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A3.1_T1.1",

path: "11.8.2",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between primitive boolean and Boolean object",

test: function testcase() {
   //CHECK#1
if (true > true !== false) {
  $ERROR('#1: true > true === false');
}

//CHECK#2
if (new Boolean(true) > true !== false) {
  $ERROR('#2: new Boolean(true) > true === false');
}

//CHECK#3
if (true > new Boolean(true) !== false) {
  $ERROR('#3: true > new Boolean(true) === false');
}

//CHECK#4
if (new Boolean(true) > new Boolean(true) !== false) {
  $ERROR('#4: new Boolean(true) > new Boolean(true) === false');
}

 }
});

