// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A5.1_T5;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: HexIntegerLiteral;  
 * @description: HexIntegerLiteral :: 0x0 Digits;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A5.1_T5",

path: "7.8.3",

description: "HexIntegerLiteral :: 0x0 Digits",

test: function testcase() {
   //CHECK#0
if (0x00 !== 0) {
  $ERROR('#0: 0x00 === 0');
}

//CHECK#1
if (0x01 !== 1) {
  $ERROR('#1: 0x01 === 1');
}

//CHECK#2
if (0x010 !== 16) {
  $ERROR('#2: 0x010 === 16');
}

//CHECK3
if (0x0100 !== 256) {
  $ERROR('3: 0x0100 === 256');
}

//CHECK#4
if (0x01000 !== 4096) {
  $ERROR('#4: 0x01000 === 4096');
}

//CHECK#5
if (0x010000 !== 65536) {
  $ERROR('#5: 0x010000 === 65536');
}

//CHECK#6
if (0x0100000 !== 1048576) {
  $ERROR('#6: 0x0100000 === 1048576');
}

//CHECK#7
if (0x01000000 !== 16777216) {
  $ERROR('#7: 0x01000000 === 16777216');
}

//CHECK#8
if (0x010000000 !== 268435456) {
  $ERROR('#8: 0x010000000 === 268435456');
}

 }
});

