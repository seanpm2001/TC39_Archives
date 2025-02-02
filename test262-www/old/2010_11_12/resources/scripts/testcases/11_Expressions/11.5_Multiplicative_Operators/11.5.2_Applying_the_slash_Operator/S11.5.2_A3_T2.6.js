// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.2_A3_T2.6;
 * @section: 11.5.2;
 * @assertion: Operator x / y returns ToNumber(x) / ToNumber(y); 
 * @description: Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.2_A3_T2.6",

path: "11.5.2",

description: "Type(x) is different from Type(y) and both types vary between String (primitive or object) and Undefined",

test: function testcase() {
   //CHECK#1
if (isNaN("1" / undefined) !== true) {
  $ERROR('#1: "1" / undefined === Not-a-Number. Actual: ' + ("1" / undefined));
}

//CHECK#2
if (isNaN(undefined / "1") !== true) {
  $ERROR('#2: undefined / "1" === Not-a-Number. Actual: ' + (undefined / "1"));
}

//CHECK#3
if (isNaN(new String("1") / undefined) !== true) {
  $ERROR('#3: new String("1") / undefined === Not-a-Number. Actual: ' + (new String("1") / undefined));
}

//CHECK#4
if (isNaN(undefined / new String("1")) !== true) {
  $ERROR('#4: undefined / new String("1") === Not-a-Number. Actual: ' + (undefined / new String("1")));
}

 }
});

