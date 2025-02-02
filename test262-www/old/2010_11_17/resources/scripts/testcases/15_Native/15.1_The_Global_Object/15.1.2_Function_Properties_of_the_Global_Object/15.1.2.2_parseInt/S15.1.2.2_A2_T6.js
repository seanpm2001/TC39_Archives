// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A2_T6;
 * @section: 15.1.2.2;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: CR (U+000D);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A2_T6",

path: "15.1.2.2",

description: "StrWhiteSpaceChar :: CR (U+000D)",

test: function testcase() {
   //CHECK#1
if (parseInt("\u000D1") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u000D1") === parseInt("1"). Actual: ' + (parseInt("\u000D1")));
}

//CHECK#2
if (parseInt("\u000D\u000D-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u000D\\u000D-1") === parseInt("-1"). Actual: ' + (parseInt("\u000D\u000D-1")));
}

//CHECK#3
if (isNaN(parseInt("\u000D")) !== true) {
  $ERROR('#3: parseInt("\\u000D") === Not-a-Number. Actual: ' + (parseInt("\u000D")));
}

 }
});

