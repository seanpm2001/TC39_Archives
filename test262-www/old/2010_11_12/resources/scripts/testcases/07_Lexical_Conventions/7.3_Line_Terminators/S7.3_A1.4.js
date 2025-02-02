// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A1.4;
 * @section: 7.3;
 * @assertion: PARAGRAPH SEPARATOR (U+2029) may occur between any two tokens;
 * @description: Insert PARAGRAPH SEPARATOR (\u2029) between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A1.4",

path: "7.3",

description: "Insert PARAGRAPH SEPARATOR (\\u2029) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u2029var\u2029x\u2029=\u20291\u2029");
if (x !== 1) {
  $ERROR('#1: eval("\\u2029var\\u2029x\\u2029=\\u20291\\u2029"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u2029" + "var" + "\u2029" + "x" + "\u2029" + "=" + "\u2029" + "1" + "\u2029");
if (x !== 1) {
  $ERROR('#2: eval("\\u2029" + "var" + "\\u2029" + "x" + "\\u2029" + "=" + "\\u2029" + "1" + "\\u2029"); x === 1. Actual: ' + (x));
}




 }
});

