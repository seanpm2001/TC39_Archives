// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.1_A4_T3;
 * @section: 11.5.1;
 * @assertion: The result of a floating-point multiplication is governed by the rules of IEEE 754 double-precision arithmetics; 
 * @description: Multiplication of an infinity by a zero results in NaN;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.1_A4_T3",

path: "11.5.1",

description: "Multiplication of an infinity by a zero results in NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.NEGATIVE_INFINITY * 0) !== true) {
  $ERROR('#1: Infinity * 0 === Not-a-Number. Actual: ' + (Infinity * 0));
}

//CHECK#2
if (isNaN(-0 * Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#2: -0 * -Infinity === Not-a-Number. Actual: ' + (-0 * -Infinity));
}

//CHECK#3
if (isNaN(Number.POSITIVE_INFINITY * -0) !== true) {
  $ERROR('#3: Infinity * -0 === Not-a-Number. Actual: ' + (Infinity * -0));
}

//CHECK#4
if (isNaN(0 * Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#4: 0 * Infinity === Not-a-Number. Actual: ' + (0 * Infinity));
}

//CHECK#5
if (isNaN(Number.NEGATIVE_INFINITY * -0) !== true) {
  $ERROR('#5: Infinity * -0 === Not-a-Number. Actual: ' + (Infinity * -0));
}

//CHECK#6
if (isNaN(0 * Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#6: 0 * -Infinity === Not-a-Number. Actual: ' + (0 * -Infinity));
}

//CHECK#7
if (isNaN(Number.POSITIVE_INFINITY * 0) !== true) {
  $ERROR('#7: Infinity * 0 === Not-a-Number. Actual: ' + (Infinity * 0));
}

//CHECK#8
if (isNaN(-0 * Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#8: -0 * Infinity === Not-a-Number. Actual: ' + (-0 * Infinity));
}

 }
});

