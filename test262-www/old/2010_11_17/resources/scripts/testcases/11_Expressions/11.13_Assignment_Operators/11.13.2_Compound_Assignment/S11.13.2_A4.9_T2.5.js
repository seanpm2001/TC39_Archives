// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.9_T2.5;
 * @section: 11.13.2, 11.10.1;
 * @assertion: The production x &= y is the same as x = x & y; 
 * @description: Type(x) is different from Type(y) and both types vary between String (primitive or object) and Boolean (primitive and object);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.9_T2.5",

path: "11.13.2, 11.10.1",

description: "Type(x) is different from Type(y) and both types vary between String (primitive or object) and Boolean (primitive and object)",

test: function testcase() {
   //CHECK#1
x = true;
x &= "1";
if (x !== 1) {
  $ERROR('#1: x = true; x &= "1"; x === 1. Actual: ' + (x));
}

//CHECK#2
x = "1";
x &= true;
if (x !== 1) {
  $ERROR('#2: x = "1"; x &= true; x === 1. Actual: ' + (x));
}

//CHECK#3
x = new Boolean(true);
x &= "1";
if (x !== 1) {
  $ERROR('#3: x = new Boolean(true); x &= "1"; x === 1. Actual: ' + (x));
}

//CHECK#4
x = "1";
x &= new Boolean(true);
if (x !== 1) {
  $ERROR('#4: x = "1"; x &= new Boolean(true); x === 1. Actual: ' + (x));
}

//CHECK#5
x = true;
x &= new String("1");
if (x !== 1) {
  $ERROR('#5: x = true; x &= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#6
x = new String("1");
x &= true;
if (x !== 1) {
  $ERROR('#6: x = new String("1"); x &= true; x === 1. Actual: ' + (x));
}

//CHECK#7
x = new Boolean(true);
x &= new String("1");
if (x !== 1) {
  $ERROR('#7: x = new Boolean(true); x &= new String("1"); x === 1. Actual: ' + (x));
}

//CHECK#8
x = new String("1");
x &= new Boolean(true);
if (x !== 1) {
  $ERROR('#8: x = new String("1"); x &= new Boolean(true); x === 1. Actual: ' + (x));
}

 }
});

