// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A1.1_T1;
 * @section: 7.2, 7.5;
 * @assertion: HORIZONTAL TAB (U+0009) between any two tokens is allowed;
 * @description: Insert HORIZONTAL TAB(\u0009 and \t) between tokens of var x=1; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A1.1_T1",

path: "7.2, 7.5",

description: "Insert HORIZONTAL TAB(\\u0009 and \\t) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u0009var\u0009x\u0009=\u00091\u0009");
if (x !== 1) {
  $ERROR('#1: eval("\\u0009var\\u0009x\\u0009=\\u00091\\u0009"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u0009" + "var" + "\u0009" + "x" + "\u0009" + "=" + "\u0009" + "1" + "\u0009");
if (x !== 1) {
  $ERROR('#2: eval("\\u0009" + "var" + "\\u0009" + "x" + "\\u0009" + "=" + "\\u0009" + "1" + "\\u0009"); x === 1. Actual: ' + (x));
}

//CHECK#3
eval("\tvar\tx\t=\t1\t");
if (x !== 1) {
  $ERROR('#3: eval("\\tvar\\tx\\t=\\t1\\t"); x === 1. Actual: ' + (x));
}

//CHECK#4
eval("\t" + "var" + "\t" + "x" + "\t" + "=" + "\t" + "1" + "\t");
if (x !== 1) {
  $ERROR('#4: eval("\\t" + "var" + "\\t" + "x" + "\\t" + "=" + "\\t" + "1" + "\\t"); x === 1. Actual: ' + (x));
}

//CHECK#5
eval("\u0009" + "var" + "\t" + "x" + "\u0009" + "=" + "\t" + "1" + "\u0009");
if (x !== 1) {
  $ERROR('#5: eval("\\u0009" + "var" + "\\t" + "x" + "\\u0009" + "=" + "\\t" + "1" + "\\u0009"); x === 1. Actual: ' + (x));
}

 }
});

