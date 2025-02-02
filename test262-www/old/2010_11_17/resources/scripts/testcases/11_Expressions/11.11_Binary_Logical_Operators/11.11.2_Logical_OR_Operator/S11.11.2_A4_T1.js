// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.11.2_A4_T1;
* @section: 11.11.2;
* @assertion: If ToBoolean(x) is true, return x;
* @description: Type(x) and Type(y) vary between primitive boolean and Boolean object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.11.2_A4_T1",

path: "11.11.2",

description: "Type(x) and Type(y) vary between primitive boolean and Boolean object",

test: function testcase() {
   //CHECK#1
if (((true || true)) !== true) {
  $ERROR('#1: (true || true) === true');
}

//CHECK#2
if ((true || false) !== true) {
  $ERROR('#2: (true || false) === true');
}

//CHECK#3
var x = new Boolean(true);
if ((x || new Boolean(true)) !== x) {
  $ERROR('#3: (var x = new Boolean(true); (x || new Boolean(true)) === x');
}

//CHECK#4
var x = new Boolean(true);
if ((x || new Boolean(false)) !== x) {
  $ERROR('#4: (var x = new Boolean(true); (x || new Boolean(false)) === x');
}

//CHECK#5
var x = new Boolean(false);
if ((x || new Boolean(true)) !== x) {
  $ERROR('#5: (var x = new Boolean(false); (x || new Boolean(true)) === x');
}

//CHECK#6
var x = new Boolean(false);
if ((x || new Boolean(false)) !== x) {
  $ERROR('#6: (var x = new Boolean(false); (x || new Boolean(false)) === x');
}

 }
});

