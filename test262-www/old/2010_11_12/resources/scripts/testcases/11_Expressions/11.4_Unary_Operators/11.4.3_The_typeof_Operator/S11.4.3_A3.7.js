// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.3_A3.7;
* @section: 11.4.3;
* @assertion: Result of applying "typeof" operator to the object that is native and implements [[Call]] is "function";
* @description: typeof (object with [[Call]]) === "function";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.3_A3.7",

path: "11.4.3",

description: "typeof (object with [[Call]]) === \"function\"",

test: function testcase() {
   //CHECK#1
if (typeof new Function() !== "function") {
  $ERROR('#1: typeof new Function() === "function". Actual: ' + (typeof new Function()));
}

//CHECK#2
if (typeof Function() !== "function") {
  $ERROR('#2: typeof Function() === "function". Actual: ' + (typeof Function()));
}

//CHECK#3
if (typeof Object !== "function") {
  $ERROR('#3: typeof Object === "function". Actual: ' + (typeof Object));
}

//CHECK#4
if (typeof String !== "function") {
  $ERROR('#4: typeof String === "function". Actual: ' + (typeof String));
}

//CHECK5
if (typeof Boolean !== "function") {
  $ERROR('#5: typeof Boolean === "function". Actual: ' + (typeof Boolean));
}

//CHECK#6
if (typeof Number !== "function") {
  $ERROR('#6: typeof Number === "function". Actual: ' + (typeof Number));
}

//CHECK#7
if (typeof Date !== "function") {
  $ERROR('#7: typeof Date === "function". Actual: ' + (typeof Date));
}

//CHECK#8
if (typeof Error !== "function") {
  $ERROR('#8: typeof Error === "function". Actual: ' + (typeof Error));
}

//CHECK#9
if (typeof RegExp !== "function") {
  $ERROR('#9: typeof RegExp === "function". Actual: ' + (typeof RegExp));
}

 }
});

