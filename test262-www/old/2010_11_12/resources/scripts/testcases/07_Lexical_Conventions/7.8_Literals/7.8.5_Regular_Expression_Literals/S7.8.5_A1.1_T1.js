// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.1_T1;
 * @section: 7.8.5;
 * @assertion: RegularExpressionFirstChar :: NonTerminator but not * or \ or /, 
 * RegularExpressionChars :: [empty], RegularExpressionFlags :: [empty];
 * @description: Without eval;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A1.1_T1",

path: "7.8.5",

description: "Without eval",

test: function testcase() {
   //CHECK#1
if (/1/.source !== "1") {
  $ERROR('#1: /1/');
}   

//CHECK#2
if (/a/.source !== "a") {
  $ERROR('#2: /a/');
}

//CHECK#3
if (/;/.source !== ";") {
  $ERROR('#3: /;/');
}

//CHECK#4
if (/ /.source !== " ") {
  $ERROR('#4: / /');
}

//CHECK#5
if (/\u0041/.source !== "\\u0041") {
  $ERROR('#5: /\\u0041/');
}         

 }
});

