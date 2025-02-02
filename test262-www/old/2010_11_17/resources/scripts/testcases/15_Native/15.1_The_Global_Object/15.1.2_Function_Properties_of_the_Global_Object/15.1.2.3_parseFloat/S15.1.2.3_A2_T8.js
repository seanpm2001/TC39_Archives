// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.3_A2_T8;
 * @section: 15.1.2.3;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: LS (U+2028);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.3_A2_T8",

path: "15.1.2.3",

description: "StrWhiteSpaceChar :: LS (U+2028)",

test: function testcase() {
   //CHECK#1
if (parseFloat("\u20281.1") !== parseFloat("1.1")) {
  $ERROR('#1: parseFloat("\\u20281.1") === parseFloat("1.1"). Actual: ' + (parseFloat("\u20281.1")));
}

//CHECK#2
if (parseFloat("\u2028\u2028-1.1") !== parseFloat("-1.1")) {
  $ERROR('#2: parseFloat("\\u2028\\u2028-1.1") === parseFloat("-1.1"). Actual: ' + (parseFloat("\u2028\u2028-1.1")));
}

//CHECK#3
if (isNaN(parseFloat("\u2028")) !== true) {
  $ERROR('#3: parseFloat("\\u2028") === Not-a-Number. Actual: ' + (parseFloat("\u2028")));
}

 }
});

