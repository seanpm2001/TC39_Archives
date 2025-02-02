// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.7.1_A2.1_T1;
* @section: 11.7.1;
* @assertion: Operator x << y uses GetValue;
* @description: Either Type is not Reference or GetBase is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.1_A2.1_T1",

path: "11.7.1",

description: "Either Type is not Reference or GetBase is not null",

test: function testcase() {
   //CHECK#1
if (2 << 1 !== 4) {
  $ERROR('#1: 2 << 1 === 4. Actual: ' + (2 << 1));
}

//CHECK#2
var x = 2;
if (x << 1 !== 4) {
  $ERROR('#2: var x = 2; x << 1 === 4. Actual: ' + (x << 1));
}

//CHECK#3
var y = 1;
if (2 << y !== 4) {
  $ERROR('#3: var y = 2; 2 << y === 4. Actual: ' + (2 << y));
}

//CHECK#4
var x = 2;
var y = 1;
if (x << y !== 4) {
  $ERROR('#4: var x = 2; var y = 1; x << y === 4. Actual: ' + (x << y));
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 2;
objecty.prop = 1;
if (objectx.prop << objecty.prop !== 4) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 2; objecty.prop = 1; objectx.prop << objecty.prop === 4. Actual: ' + (objectx.prop << objecty.prop));
}

 }
});

