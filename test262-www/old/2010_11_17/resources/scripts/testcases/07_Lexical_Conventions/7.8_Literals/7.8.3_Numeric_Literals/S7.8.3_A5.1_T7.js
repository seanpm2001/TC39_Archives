// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A5.1_T7;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: HexIntegerLiteral;  
 * @description: HexIntegerLiteral :: 0x one of a, b, c, d, e, f;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A5.1_T7",

path: "7.8.3",

description: "HexIntegerLiteral :: 0x one of a, b, c, d, e, f",

test: function testcase() {
   //CHECK#a
if (0xa !== 10) {
  $ERROR('#a: 0xa === 10');
}

//CHECK#b
if (0xb !== 11) {
  $ERROR('#b: 0xb === 11');
}

//CHECK#c
if (0xc !== 12) {
  $ERROR('#c: 0xc === 12');
}

//CHECK#d
if (0xd !== 13) {
  $ERROR('#d: 0xd === 13');
}

//CHECK#e
if (0xe !== 14) {
  $ERROR('#e: 0xe === 14');
}

//CHECK#f
if (0xf !== 15) {
  $ERROR('#f: 0xf === 15');
}

 }
});

