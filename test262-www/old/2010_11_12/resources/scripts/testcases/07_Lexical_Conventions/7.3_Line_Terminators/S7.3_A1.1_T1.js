// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A1.1_T1;
 * @section: 7.3;
 * @assertion: LINE FEED (U+000A) may occur between any two tokens;
 * @description: Insert LINE FEED (\u000A and \n) between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A1.1_T1",

path: "7.3",

description: "Insert LINE FEED (\\u000A and \\n) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u000Avar\u000Ax\u000A=\u000A1\u000A");
if (x !== 1) {
  $ERROR('#1: eval("\\u000Avar\\u000Ax\\u000A=\\u000A1\\u000A"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u000A" + "var" + "\u000A" + "x" + "\u000A" + "=" + "\u000A" + "1" + "\u000A");
if (x !== 1) {
  $ERROR('#2: eval("\\u000A" + "var" + "\\u000A" + "x" + "\\u000A" + "=" + "\\u000A" + "1" + "\\u000A"); x === 1. Actual: ' + (x));
}

//CHECK#3
eval("\nvar\nx\n=\n1\n");
if (x !== 1) {
  $ERROR('#3: eval("\\nvar\\nx\\n=\\n1\\n"); x === 1. Actual: ' + (x));
}

//CHECK#4
eval("\n" + "var" + "\n" + "x" + "\n" + "=" + "\n" + "1" + "\n");
if (x !== 1) {
  $ERROR('#4: eval("\\n" + "var" + "\\n" + "x" + "\\n" + "=" + "\\n" + "1" + "\\n"); x === 1. Actual: ' + (x));
}

//CHECK#5
eval("\u000A" + "var" + "\n" + "x" + "\u000A" + "=" + "\n" + "1" + "\u000A");
if (x !== 1) {
  $ERROR('#5: eval("\\u000A" + "var" + "\\n" + "x" + "\\u000A" + "=" + "\\n" + "1" + "\\u000A"); x === 1. Actual: ' + (x));
}

 }
});

