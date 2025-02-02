// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.11.2_A3_T2;
 * @section: 11.11.2;
 * @assertion: If ToBoolean(x) is false, return y;
 * @description: Type(x) and Type(y) vary between primitive number and Number object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A3_T2",

path: "11.11.2",

description: "Type(x) and Type(y) vary between primitive number and Number object",

test: function testcase() {
   //CHECK#1
if ((0 || -0) !== 0) {
  $ERROR('#1.1: (0 || -0) === 0');
} else {
  if ((1 / (0 || -0)) !== Number.NEGATIVE_INFINITY) {
    $ERROR('#1.2: (0 || -0) === -0');
  }
}

//CHECK#2
if ((-0 || 0) !== 0) {
  $ERROR('#2.1: (-0 || 0) === 0');
} else {
  if ((1 / (-0 || 0)) !== Number.POSITIVE_INFINITY) {
    $ERROR('#2.2: (-0 || 0) === +0');
  }
}

//CHECK#3
var y = new Number(-1);
if ((0 || y) !== y) {
  $ERROR('#3: (var y = new Number(-1); 0 || y) === y');
} 

//CHECK#4
var y = new Number(0);
if ((NaN || y) !== y) {
  $ERROR('#4: (var y = new Number(0); NaN || y) === y');
}

 }
});

