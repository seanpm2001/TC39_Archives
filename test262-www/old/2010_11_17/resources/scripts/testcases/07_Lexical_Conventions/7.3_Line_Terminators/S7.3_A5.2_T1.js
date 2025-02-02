// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.3_A5.2_T1;
 * @section: 7.3, 7.4;
 * @assertion: Multi line comment can contain CARRIAGE RETURN (U+000D);
 * @description: Insert CARRIAGE RETURN (U+000D) into multi line comment;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.3_A5.2_T1",

path: "7.3, 7.4",

description: "Insert CARRIAGE RETURN (U+000D) into multi line comment",

test: function testcase() {
   // CHECK#1
eval("/*\u000D multi line \u000D comment \u000D*/");

//CHECK#2
var x = 0;
eval("/*\u000D multi line \u000D comment \u000D x = 1;*/");
if (x !== 0) {
  $ERROR('#1: var x = 0; eval("/*\\u000D multi line \\u000D comment \\u000D x = 1;*/"); x === 0. Actual: ' + (x));
}

 }
});

