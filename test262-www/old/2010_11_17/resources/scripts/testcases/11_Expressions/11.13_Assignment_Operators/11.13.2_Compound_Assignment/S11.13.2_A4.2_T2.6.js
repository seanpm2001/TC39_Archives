// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A4.2_T2.6;
 * @section: 11.13.2, 11.5.2;
 * @assertion: The production x /= y is the same as x = x / y; 
 * @description: Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A4.2_T2.6",

path: "11.13.2, 11.5.2",

description: "Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
x = "1";
x /= undefined;
if (isNaN(x) !== true) {
  $ERROR('#1: x = "1"; x /= undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#2
x = undefined;
x /= "1";
if (isNaN(x) !== true) {
  $ERROR('#2: x = undefined; x /= "1"; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#3
x = new String("1");
x /= undefined;
if (isNaN(x) !== true) {
  $ERROR('#3: x = new String("1"); x /= undefined; x === Not-a-Number. Actual: ' + (x));
}

//CHECK#4
x = undefined;
x /= new String("1");
if (isNaN(x) !== true) {
  $ERROR('#4: x = undefined; x /= new String("1"); x === Not-a-Number. Actual: ' + (x));
}

 }
});

