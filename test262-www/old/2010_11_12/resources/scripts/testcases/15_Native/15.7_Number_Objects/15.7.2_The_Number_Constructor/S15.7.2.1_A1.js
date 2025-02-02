// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.2.1_A1;
 * @section: 15.7.2.1;
 * @assertion: When Number is called as part of a new expression it is 
 * a constructor: it initialises the newly created object;
 * @description: Checking type of the newly created object and it value;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.2.1_A1",

path: "15.7.2.1",

description: "Checking type of the newly created object and it value",

test: function testcase() {
   //CHECK#1
if (typeof new Number() !== "object") {
  $ERROR("#1: typeof new Number() === 'object'");
}

//CHECK#2
if (new Number() === undefined) {
  $ERROR("#2: new Number() should not be undefined");
}

//CHECK#3
var x3 = new Number();
if(typeof x3 !== "object"){
  $ERROR("#3: typeof new Number() === 'object'");
}

//CHECK#4
var x4 = new Number();
if(x4 === undefined){
  $ERROR("#4: new Number() should not be undefined");
}

//CHECK#5
if (typeof new Number(10) !== "object") {
  $ERROR("#5: typeof new Number(10) === 'object'");
}

//CHECK#6
if (new Number(10) === undefined) {
  $ERROR("#6: new Number(10) should not be undefined");
}

//CHECK#7
var x7 = new Number(10);
if(typeof x7 !== "object"){
  $ERROR("#7: typeof new Number(10) === 'object'");
}

//CHECK#8
var x8 = new Number(10);
if(x8 === undefined){
  $ERROR("#8: new Number(10) should not be undefined");
}

 }
});

