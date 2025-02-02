// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A5_T4;
* @section: 15.10.2.12;
* @assertion: The production CharacterClassEscape :: d evaluates by returning the ten-element set of characters containing the characters 0 through 9 inclusive;
* @description: non-d;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A5_T4",

path: "15.10.2.12",

description: "non-d",

test: function testcase() {
   //CHECK#1
var non_d = "_abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ\f\n\r\t\v~`!@#$%^&*()-+={[}]|\\:;'<,>./? " + '"';
if (/\d/.exec(non_d) !== null) {
   $ERROR('#1: non-d');
}

//CHECK#2
var non_D = '0123456789';
var regexp_d = /\d/g;
var k = 0;
while (regexp_d.exec(non_D) !== null) {
   k++;
}

if (non_D.length !== k) {
   $ERROR('#2: non-D');
}  

 }
});

