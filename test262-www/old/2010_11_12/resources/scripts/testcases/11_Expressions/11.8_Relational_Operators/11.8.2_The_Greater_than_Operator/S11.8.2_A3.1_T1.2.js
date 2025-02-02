// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A3.1_T1.2;
 * @section: 11.8.2;
 * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x > y returns ToNumber(x) > ToNumber(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between primitive number and Number object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A3.1_T1.2",

path: "11.8.2",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between primitive number and Number object",

test: function testcase() {
   //CHECK#1
if (1 > 1 !== false) {
  $ERROR('#1: 1 > 1 === false');
}

//CHECK#2
if (new Number(1) > 1 !== false) {
  $ERROR('#2: new Number(1) > 1 === false');
}

//CHECK#3
if (1 > new Number(1) !== false) {
  $ERROR('#3: 1 > new Number(1) === false');
}

//CHECK#4
if (new Number(1) > new Number(1) !== false) {
  $ERROR('#4: new Number(1) > new Number(1) === false');
}


 }
});

