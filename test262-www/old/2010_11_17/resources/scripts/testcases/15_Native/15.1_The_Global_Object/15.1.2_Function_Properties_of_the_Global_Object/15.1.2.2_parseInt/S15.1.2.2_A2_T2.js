// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A2_T2;
 * @section: 15.1.2.2;
 * @assertion: Operator remove leading StrWhiteSpaceChar;
 * @description: StrWhiteSpaceChar :: SP (U+0020);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A2_T2",

path: "15.1.2.2",

description: "StrWhiteSpaceChar :: SP (U+0020)",

test: function testcase() {
   //CHECK#1
if (parseInt("\u00201") !== parseInt("1")) {
  $ERROR('#1: parseInt("\\u00201") === parseInt("1"). Actual: ' + (parseInt("\u00201")));
}

//CHECK#2
if (parseInt("\u0020\u0020-1") !== parseInt("-1")) {
  $ERROR('#2: parseInt("\\u0020\\u0020-1") === parseInt("-1"). Actual: ' + (parseInt("\u0020\u0020-1")));
}

//CHECK#3
if (parseInt(" 1") !== parseInt("1")) {
  $ERROR('#3: parseInt(" 1") === parseInt("1"). Actual: ' + (parseInt(" 1")));
}

//CHECK#4
if (parseInt("       1") !== parseInt("1")) {
  $ERROR('#4: parseInt("       1") === parseInt("1"). Actual: ' + (parseInt("       1")));
}

//CHECK#5
if (parseInt("       \u0020       \u0020-1") !== parseInt("-1")) {
  $ERROR('#5: parseInt("       \\u0020       \\u0020-1") === parseInt("-1"). Actual: ' + (parseInt("       \u0020       \u0020-1")));
}

//CHECK#6
if (isNaN(parseInt("\u0020")) !== true) {
  $ERROR('#6: parseInt("\\u0020") === Not-a-Number. Actual: ' + (parseInt("\u0020")));
}

 }
});

