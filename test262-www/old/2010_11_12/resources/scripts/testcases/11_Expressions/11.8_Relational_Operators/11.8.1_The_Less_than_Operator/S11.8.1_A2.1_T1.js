// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.1_A2.1_T1;
* @section: 11.8.1, 11.8.5;
* @assertion: Operator x < y uses GetValue;
* @description: Either Type is not Reference or GetBase is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A2.1_T1",

path: "11.8.1, 11.8.5",

description: "Either Type is not Reference or GetBase is not null",

test: function testcase() {
   //CHECK#1
if (1 < 2 !== true) {
  $ERROR('#1: 1 < 2 === true');
}

//CHECK#2
var x = 1;
if (x < 2 !== true) {
  $ERROR('#2: var x = 1; x < 2 === true');
}

//CHECK#3
var y = 2;
if (1 < y !== true) {
  $ERROR('#3: var y = 2; 1 < y === true');
}

//CHECK#4
var x = 1;
var y = 2;
if (x < y !== true) {
  $ERROR('#4: var x = 1; var y = 2; x < y === true');
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 1;
objecty.prop = 2;
if (objectx.prop < objecty.prop !== true) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 1; objecty.prop = 2; objectx.prop < objecty.prop === true');
}

 }
});

