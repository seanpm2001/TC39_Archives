// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.2_A2.1_T1;
* @section: 11.8.2, 11.8.5;
* @assertion: Operator x > y uses GetValue;
* @description: Either Type is not Reference or GetBase is not null;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A2.1_T1",

path: "11.8.2, 11.8.5",

description: "Either Type is not Reference or GetBase is not null",

test: function testcase() {
   //CHECK#1
if (2 > 1 !== true) {
  $ERROR('#1: 2 > 1 === true');
}

//CHECK#2
var x = 2;
if (x > 1 !== true) {
  $ERROR('#2: var x = 2; x > 1 === true');
}

//CHECK#3
var y = 1;
if (2 > y !== true) {
  $ERROR('#3: var y = 1; 2 > y === true');
}

//CHECK#4
var x = 2;
var y = 1;
if (x > y !== true) {
  $ERROR('#4: var x = 2; var y = 1; x > y === true');
}

//CHECK#5
var objectx = new Object();
var objecty = new Object();
objectx.prop = 2;
objecty.prop = 1;
if (objectx.prop > objecty.prop !== true) {
  $ERROR('#5: var objectx = new Object(); var objecty = new Object(); objectx.prop = 2; objecty.prop = 1; objectx.prop > objecty.prop === true');
}

 }
});

