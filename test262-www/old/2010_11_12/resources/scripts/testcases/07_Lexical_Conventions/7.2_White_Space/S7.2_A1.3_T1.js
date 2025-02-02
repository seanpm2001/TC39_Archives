// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.2_A1.3_T1;
 * @section: 7.2, 7.5;
 * @assertion: FORM FEED (U+000C) between any two tokens is allowed;
 * @description: Insert FORM FEED(\u000C and \f) between tokens of var x=1;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.2_A1.3_T1",

path: "7.2, 7.5",

description: "Insert FORM FEED(\\u000C and \\f) between tokens of var x=1",

test: function testcase() {
   // CHECK#1
eval("\u000Cvar\u000Cx\u000C=\u000C1\u000C");
if (x !== 1) {
  $ERROR('#1: eval("\\u000Cvar\\u000Cx\\u000C=\\u000C1\\u000C"); x === 1. Actual: ' + (x));
}

//CHECK#2
eval("\u000C" + "var" + "\u000C" + "x" + "\u000C" + "=" + "\u000C" + "1" + "\u000C");
if (x !== 1) {
  $ERROR('#2: eval("\\u000C" + "var" + "\\u000C" + "x" + "\\u000C" + "=" + "\\u000C" + "1" + "\\u000C"); x === 1. Actual: ' + (x));
}

//CHECK#3
eval("\fvar\fx\f=\f1\f");
if (x !== 1) {
  $ERROR('#3: eval("\\fvar\\fx\\f=\\f1\\f"); x === 1. Actual: ' + (x));
}

//CHECK#4
eval("\f" + "var" + "\f" + "x" + "\f" + "=" + "\f" + "1" + "\f");
if (x !== 1) {
  $ERROR('#4: eval("\\f" + "var" + "\\f" + "x" + "\\f" + "=" + "\\f" + "1" + "\\f"); x === 1. Actual: ' + (x));
}

//CHECK#5
eval("\u000C" + "var" + "\f" + "x" + "\u000C" + "=" + "\f" + "1" + "\u000C");
if (x !== 1) {
  $ERROR('#5: eval("\\u000C" + "var" + "\\f" + "x" + "\\u000C" + "=" + "\\f" + "1" + "\\u000C"); x === 1. Actual: ' + (x));
}

 }
});

