// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.3_A2.2_T2;
 * @section: 7.8.3;
 * @assertion: DecimalLiteral :: .DecimalDigits ExponentPart;
 * @description: ExponentPart :: E DecimalDigits;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.3_A2.2_T2",

path: "7.8.3",

description: "ExponentPart :: E DecimalDigits",

test: function testcase() {
   //CHECK#0
if (.0E1 !== 0) {
  $ERROR('#0: .0E1 === 0');
}

//CHECK#1
if (.1E1 !== 1) {
  $ERROR('#1: .1E1 === 1');
}

//CHECK#2
if (.2E1 !== 2) {
  $ERROR('#2: .2E1 === 2');
}

//CHECK#3
if (.3E1 !== 3) {
  $ERROR('#3: .3E1 === 3');
}

//CHECK#4
if (.4E1 !== 4) {
  $ERROR('#4: .4E1 === 4');
}

//CHECK#5
if (.5E1 !== 5) {
  $ERROR('#5: .5E1 === 5');
}

//CHECK#6
if (.6E1 !== 6) {
  $ERROR('#6: .6E1 === 6');
}

//CHECK#7
if (.7E1 !== 7) {
  $ERROR('#7: .7E1 === 7');
}

//CHECK#8
if (.8E1 !== 8) {
  $ERROR('#8: .8E1 === 8');
}

//CHECK#9
if (.9E1 !== 9) {
  $ERROR('#9: .9E1 === 9');
}

 }
});

