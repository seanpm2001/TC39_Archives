// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A4.2_T5;
 * @section: 7.8.4;
 * @assertion: CharacterEscapeSequnce :: NonEscapeSequence; 
 * @description: NonEscapeSequence :: RUSSIAN CAPITAL ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A4.2_T5",

path: "7.8.4",

description: "NonEscapeSequence :: RUSSIAN CAPITAL ALPHABET",

test: function testcase() {
   //CHECK#А-Я
CharacterCode = [0x0410, 0x0411, 0x0412, 0x0413, 0x0414, 0x0415, 0x0416, 0x0417, 0x0418, 0x0419, 0x041A, 0x041B, 0x041C, 0x041D, 0x041E, 0x041F, 0x0420, 0x0421, 0x0422, 0x0423, 0x0424, 0x0425, 0x0426, 0x0427, 0x0428, 0x0429, 0x042A, 0x042B, 0x042C, 0x042D, 0x042E, 0x042F, 0x0401];
NonEscapeCharacter = ["\А", "\Б", "\В", "\Г", "\Д", "\Е", "\Ж", "\З", "\И", "\Й", "\К", "\Л", "\М", "\Н", "\О", "\П", "\Р", "\С", "\Т", "\У", "\Ф", "\Х", "\Ц", "\Ч", "\Ш", "\Щ", "\Ъ", "\Ы", "\Ь", "\Э", "\Ю", "\Я", "\Ё"];
for (index = 0; index <= 32; index++) {
  if (String.fromCharCode(CharacterCode[index]) !== NonEscapeCharacter[index]) {
    $ERROR('#' + NonEscapeCharacter[index] + ' ');
  }
}

 }
});

