// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.10.3_A3_T1.5;
 * @section: 11.10.3;
 * @assertion: Operator x | y returns ToNumber(x) | ToNumber(y); 
 * @description: Type(x) and Type(y) vary between Object object and Function object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.10.3_A3_T1.5",

path: "11.10.3",

description: "Type(x) and Type(y) vary between Object object and Function object",

test: function testcase() {
   //CHECK#1
if (({} | function(){return 1}) !== 0) {
  $ERROR('#1: ({} | function(){return 1}) === 0. Actual: ' + (({} | function(){return 1})));
}

//CHECK#2
if ((function(){return 1} | {}) !== 0) {
  $ERROR('#2: (function(){return 1} | {}) === 0. Actual: ' + ((function(){return 1} | {})));
}

//CHECK#3
if ((function(){return 1} | function(){return 1}) !== 0) {
  $ERROR('#3: (function(){return 1} | function(){return 1}) === 0. Actual: ' + ((function(){return 1} | function(){return 1})));
}

//CHECK#4
if (({} | {}) !== 0) {
  $ERROR('#4: ({} | {}) === 0. Actual: ' + (({} | {})));
}


 }
});

