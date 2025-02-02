// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A1.2_T1;
 * @section: 7.2, 7.5;
 * @assertion: VERTICAL TAB (U+000B) between any two tokens is allowed; 
 * @description: Insert VERTICAL TAB(\u000B and \v) between tokens of var x=1; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A1.2_T1",

path: "7.2, 7.5",

description: "Insert VERTICAL TAB(\\u000B and \\v) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u000Bvar\u000Bx\u000B=\u000B1\u000B");
if (x !== 1) {
  $ERROR('#1: eval("\\u000Bvar\\u000Bx\\u000B=\\u000B1\\u000B"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u000B" + "var" + "\u000B" + "x" + "\u000B" + "=" + "\u000B" + "1" + "\u000B");
if (x !== 1) {
  $ERROR('#2: eval("\\u000B" + "var" + "\\u000B" + "x" + "\\u000B" + "=" + "\\u000B" + "1" + "\\u000B"); x === 1. Actual: ' + (x));
}

//CHECK#3
eval("\vvar\vx\v=\v1\v");
if (x !== 1) {
  $ERROR('#3: eval("\\vvar\\vx\\v=\\v1\\v"); x === 1. Actual: ' + (x));
}

//CHECK#4
eval("\v" + "var" + "\v" + "x" + "\v" + "=" + "\v" + "1" + "\v");
if (x !== 1) {
  $ERROR('#4: eval("\\v" + "var" + "\\v" + "x" + "\\v" + "=" + "\\v" + "1" + "\\v"); x === 1. Actual: ' + (x));
}

//CHECK#5
eval("\u000B" + "var" + "\v" + "x" + "\u000B" + "=" + "\v" + "1" + "\u000B");
if (x !== 1) {
  $ERROR('#5: eval("\\u000B" + "var" + "\\v" + "x" + "\\u000B" + "=" + "\\v" + "1" + "\\u000B"); x === 1. Actual: ' + (x));
}

 }
});

