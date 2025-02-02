// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.10.2.11_A1_T8;
 * @section: 15.10.2.11, 15.10.2.9;
 * @assertion: DecimalEscape :: DecimalIntegerLiteral [lookahead not in DecimalDigit];
 * @description: DecimalIntegerLiteral is not 0;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.11_A1_T8",

path: "15.10.2.11, 15.10.2.9",

description: "DecimalIntegerLiteral is not 0",

test: function testcase() {
   var arr = /((((((((((A))))))))))\1\2\3\4\5\6\7\8\9\10/.exec("AAAAAAAAAAA");

//CHECK#1
if ((arr === null) || (arr[0] !== "AAAAAAAAAAA")) {
  $ERROR('#1: var arr = /((((((((((A))))))))))\\1\\2\\3\\4\\5\\6\\7\\8\\9\\10/.exec("AAAAAAAAAAA"); arr[0] === "AAAAAAAAAAA". Actual. ' + (arr && arr[0]));
}

for (i = 1; i <= 10; i++) {
  //CHECK#i
  if ((arr === null) || (arr[i] !== "A")) {
    $ERROR('#2: var arr = /((((((((((A))))))))))\\1\\2\\3\\4\\5\\6\\7\\8\\9\\10/.exec("AAAAAAAAAAA"); arr[' + i + '] === "A". Actual. ' + (arr && arr[i]));
  }
}  

 }
});

