// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A4.2_T3;
 * @section: 7.8.4;
 * @assertion: CharacterEscapeSequnce :: NonEscapeSequence;  
 * @description: NonEscapeSequence :: ENGLISH SMALL ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A4.2_T3",

path: "7.8.4",

description: "NonEscapeSequence :: ENGLISH SMALL ALPHABET",

test: function testcase() {
   //CHECK#a-z without b, f, n, r, t, v, x, u
CharacterCode = [0x0061, 0x0063, 0x0064, 0x0065, 0x0067, 0x0068, 0x0069, 0x006A, 0x006B, 0x006C, 0x006D, 0x006F, 0x0070, 0x0071, 0x0073, 0x0077, 0x0079, 0x007A];
NonEscapeCharacter = ["\a", "\c", "\d", "\e", "\g", "\h", "\i", "\j", "\k", "\l", "\m", "\o", "\p", "\q", "\s", "\w", "\y", "\z"];
for (index = 0; index <= 17; index++) {
  if (String.fromCharCode(CharacterCode[index]) !== NonEscapeCharacter[index]) {
    $ERROR('#' + NonEscapeCharacter[index] + ' ');
  }
}

 }
});

