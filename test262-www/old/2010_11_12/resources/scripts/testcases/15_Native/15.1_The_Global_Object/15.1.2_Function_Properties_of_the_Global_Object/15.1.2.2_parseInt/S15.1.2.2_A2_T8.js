// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A2_T8;
 * @section: 15.1.2.2;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: LS (U+2028);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A2_T8",

path: "15.1.2.2",

description: "StrWhiteSpaceChar :: LS (U+2028)",

test: function testcase() {
   //CHECK#1
if (parseInt("\u20281") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u20281") === parseInt("1"). Actual: ' + (parseInt("\u20281")));
}

//CHECK#2
if (parseInt("\u2028\u2028-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u2028\\u2028-1") === parseInt("-1"). Actual: ' + (parseInt("\u2028\u2028-1")));
}

//CHECK#3
if (isNaN(parseInt("\u2028")) !== true) {
  $ERROR('#3: parseInt("\\u2028") === Not-a-Number. Actual: ' + (parseInt("\u2028")));
}

 }
});

