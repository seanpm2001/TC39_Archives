// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.5.2_A4_T1.1;
 * @section: 11.5.2;
 * @assertion: The result of division is determined by the specification of IEEE 754 arithmetics; 
 * @description: If left operand is NaN, the result is NaN;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.5.2_A4_T1.1",

path: "11.5.2",

description: "If left operand is NaN, the result is NaN",

test: function testcase() {
   //CHECK#1
if (isNaN(Number.NaN / Number.NaN) !== true) {
  $ERROR('#1: NaN / NaN === Not-a-Number. Actual: ' + (NaN / NaN));
}  

//CHECK#2
if (isNaN(Number.NaN / +0) !== true) {
  $ERROR('#2: NaN / +0 === Not-a-Number. Actual: ' + (NaN / +0)); 
} 

//CHECK#3
if (isNaN(Number.NaN / -0) !== true) {
  $ERROR('#3: NaN / -0 === Not-a-Number. Actual: ' + (NaN / -0)); 
} 

//CHECK#4
if (isNaN(Number.NaN / Number.POSITIVE_INFINITY) !== true) {
  $ERROR('#4: NaN / Infinity === Not-a-Number. Actual: ' + (NaN / Infinity));
} 

//CHECK#5
if (isNaN(Number.NaN / Number.NEGATIVE_INFINITY) !== true) {
  $ERROR('#5: NaN / -Infinity === Not-a-Number. Actual: ' + (NaN / -Infinity)); 
} 

//CHECK#6
if (isNaN(Number.NaN / Number.MAX_VALUE) !== true) {
  $ERROR('#6: NaN / Number.MAX_VALUE === Not-a-Number. Actual: ' + (NaN / Number.MAX_VALUE));
} 

//CHECK#7
if (isNaN(Number.NaN / Number.MIN_VALUE) !== true) {
  $ERROR('#7: NaN / Number.MIN_VALUE === Not-a-Number. Actual: ' + (NaN / Number.MIN_VALUE)); 
}

//CHECK#8
if (isNaN(Number.NaN / 1) !== true) {
  $ERROR('#8: NaN / 1 === Not-a-Number. Actual: ' + (NaN / 1));  
} 

 }
});

