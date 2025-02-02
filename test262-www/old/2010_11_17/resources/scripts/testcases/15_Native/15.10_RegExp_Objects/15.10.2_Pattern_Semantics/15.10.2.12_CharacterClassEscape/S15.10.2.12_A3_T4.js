// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.12_A3_T4;
* @section: 15.10.2.12;
* @assertion: The production CharacterClassEscape :: w evaluates by returning the set of characters containing the sixty-three characters:
* a - z, A - Z, 0 - 9, _;
* @description: RUSSIAN ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.12_A3_T4",

path: "15.10.2.12",

description: "RUSSIAN ALPHABET",

test: function testcase() {
   var regexp_w = /\w/;

//CHECK#0410-042F
var result = true;  
for (alpha = 0x0410; alpha <= 0x042F; alpha++) {
  if (regexp_w.exec(String.fromCharCode(alpha)) !== null) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#1: RUSSIAN CAPITAL ALPHABET');
}

//CHECK#0430-044F
var result = true; 
for (alpha = 0x0430; alpha <= 0x044F; alpha++) {
  if (regexp_w.exec(String.fromCharCode(alpha)) !== null) {
    result = false;
  }
}

if (result !== true) {
  $ERROR('#2: russian small alphabet');
}

 }
});

