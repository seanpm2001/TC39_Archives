// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A4_T1;
 * @section: 15.1.3.1;
 * @assertion: URI tests;
 * @description: Checking ENGLISH ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A4_T1",

path: "15.1.3.1",

description: "Checking ENGLISH ALPHABET",

test: function testcase() {
   //CHECK#1
if (decodeURI("http://unipro.ru/0123456789") !== "http://unipro.ru/0123456789") {
  $ERROR('#1: http://unipro.ru/0123456789');
}

//CHECK#2
if (decodeURI("%41%42%43%44%45%46%47%48%49%4A%4B%4C%4D%4E%4F%50%51%52%53%54%55%56%57%58%59%5A") !== "ABCDEFGHIJKLMNOPQRSTUVWXYZ") {
  $ERROR('#2: ABCDEFGHIJKLMNOPQRSTUVWXYZ');
}

//CHECK#3
if (decodeURI("%61%62%63%64%65%66%67%68%69%6A%6B%6C%6D%6E%6F%70%71%72%73%74%75%76%77%78%79%7A") !== "abcdefghijklmnopqrstuvwxyz") {
  $ERROR('#3: abcdefghijklmnopqrstuvwxyz');
}

 }
});

