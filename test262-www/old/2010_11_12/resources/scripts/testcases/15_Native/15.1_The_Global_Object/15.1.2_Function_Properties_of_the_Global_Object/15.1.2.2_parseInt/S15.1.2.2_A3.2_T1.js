// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A3.2_T1;
 * @section: 15.1.2.2;
 * @assertion: Operator use ToInt32;
 * @description: If radix is NaN, +0, -0, +Infinity, -Infinity, return radix = +0;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A3.2_T1",

path: "15.1.2.2",

description: "If radix is NaN, +0, -0, +Infinity, -Infinity, return radix = +0",

test: function testcase() {
   //CHECK#1
if (parseInt("11", NaN) !== parseInt("11", 10)) {
  $ERROR('#1: parseInt("11", NaN) === parseInt("11", 10). Actual: ' + (parseInt("11", NaN)));
}

//CHECK#2
if (parseInt("11", +0) !== parseInt("11", 10)) {
  $ERROR('#2: parseInt("11", +0) === parseInt("11", 10). Actual: ' + (parseInt("11", +0)));
}

//CHECK#3
if (parseInt("11", -0) !== parseInt("11", 10)) {
  $ERROR('#3: parseInt("11", -0) === parseInt("11", 10). Actual: ' + (parseInt("11", -0)));
}

//CHECK#4
if (parseInt("11", Number.POSITIVE_INFINITY) !== parseInt("11", 10)) {
  $ERROR('#4: parseInt("11", Number.POSITIVE_INFINITY) === parseInt("11", 10). Actual: ' + (parseInt("11", Number.POSITIVE_INFINITY)));
}

//CHECK#5
if (parseInt("11", Number.NEGATIVE_INFINITY) !== parseInt("11", 10)) {
  $ERROR('#5: parseInt("11", Number.NEGATIVE_INFINITY) === parseInt("11", 10). Actual: ' + (parseInt("11", Number.NEGATIVE_INFINITY)));
}

 }
});

