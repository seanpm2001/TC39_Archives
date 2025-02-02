// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.1_A3.1_T2.2;
 * @section: 11.8.1;
 * @assertion: If Type(Primitive(x)) is not String or Type(Primitive(y)) is not String, then operator x < y returns ToNumber(x) < ToNumber(y);
 * @description: Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and String (primitive and object);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A3.1_T2.2",

path: "11.8.1",

description: "Type(Primitive(x)) is different from Type(Primitive(y)) and both types vary between Number (primitive or object) and String (primitive and object)",

test: function testcase() {
   //CHECK#1
if ("1" < 1 !== false) {
  $ERROR('#1: "1" < 1 === false');
}

//CHECK#2
if (1 < "1" !== false) {
  $ERROR('#2: 1 < "1" === false');
}

//CHECK#3
if (new String("1") < 1 !== false) {
  $ERROR('#3: new String("1") < 1 === false');
}

//CHECK#4
if (1 < new String("1") !== false) {
  $ERROR('#4: 1 < new String("1") === false');
}

//CHECK#5
if ("1" < new Number(1) !== false) {
  $ERROR('#5: "1" < new Number(1) === false');
}

//CHECK#6
if (new Number(1) < "1" !== false) {
  $ERROR('#6: new Number(1) < "1" === false');
}

//CHECK#7
if (new String("1") < new Number(1) !== false) {
  $ERROR('#7: new String("1") < new Number(1) === false');
}

//CHECK#8
if (new Number(1) < new String("1") !== false) {
  $ERROR('#8: new Number(1) < new String("1") === false');
}

//CHECK#9
if ("x" < 1 !== false) {
  $ERROR('#9: "x" < 1 === false');
}

//CHECK#10
if (1 < "x" !== false) {
  $ERROR('#10: 1 < "x" === false');
}

 }
});

