// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A3_T5;
* @section: 15.10.2.12;
* @assertion: The production CharacterClassEscape :: w evaluates by returning the set of characters containing the sixty-three characters:
* a - z, A - Z, 0 - 9, _;
* @description: non-w;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A3_T5",

path: "15.10.2.12",

description: "non-w",

test: function testcase() {
   //CHECK#1
var non_w = "\f\n\r\t\v~`!@#$%^&*()-+={[}]|\\:;'<,>./? " + '"';
if (/\w/.exec(non_w) !== null) {
   $ERROR('#1: non-w');
}

//CHECK#2
var non_W = "_0123456789_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var regexp_w = /\w/g;
var k = 0;
while (regexp_w.exec(non_W) !== null) {
   k++;
}

if (non_W.length !== k) {
   $ERROR('#2: non-W');
}  

 }
});

