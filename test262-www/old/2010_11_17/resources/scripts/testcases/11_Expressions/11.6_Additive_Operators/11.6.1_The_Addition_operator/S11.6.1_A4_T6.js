// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.6.1_A4_T6;
* @section: 11.6.1, 11.6.3;
* @assertion: The result of an addition is determined using the rules of IEEE 754 double-precision arithmetics; 
* @description: The sum of a zero and a nonzero finite value is equal to the nonzero operand;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.6.1_A4_T6",

path: "11.6.1, 11.6.3",

description: "The sum of a zero and a nonzero finite value is equal to the nonzero operand",

test: function testcase() {
   //CHECK#1
if (1 + -0 !== 1 ) {  
  $ERROR('#1: 1 + -0 === 1. Actual: ' + (1 + -0));
}

//CHECK#2
if (1 + 0 !== 1 ) {  
  $ERROR('#2: 1 + 0 === 1. Actual: ' + (1 + 0));
} 

//CHECK#3
if (-0 + 1 !== 1 ) {  
  $ERROR('#3: -0 + 1 === 1. Actual: ' + (-0 + 1));
}

//CHECK#4
if (0 + 1 !== 1 ) {  
  $ERROR('#4: 0 + 1 === 1. Actual: ' + (0 + 1));
} 

//CHECK#5
if (Number.MAX_VALUE + -0 !== Number.MAX_VALUE ) {  
  $ERROR('#5: Number.MAX_VALUE + -0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE + -0));
}

//CHECK#6
if (Number.MAX_VALUE + 0 !== Number.MAX_VALUE ) {  
  $ERROR('#6: Number.MAX_VALUE + 0 === Number.MAX_VALUE. Actual: ' + (Number.MAX_VALUE + 0));
} 

//CHECK#7
if (-0 + Number.MIN_VALUE !== Number.MIN_VALUE ) {  
  $ERROR('#7: -0 + Number.MIN_VALUE === Number.MIN_VALUE. Actual: ' + (-0 + Number.MIN_VALUE));
}

//CHECK#8
if (0 + Number.MIN_VALUE !== Number.MIN_VALUE ) {  
  $ERROR('#8: 0 + Number.MIN_VALUE === Number.MIN_VALUE. Actual: ' + (0 + Number.MIN_VALUE));
} 

 }
});

