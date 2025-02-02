// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.5.2_A3_T4;
 * @section: 15.4.5.2, 15.4.2.2;
 * @assertion: If the length property is changed, every property whose name 
 * is an array index whose value is not smaller than the new length is automatically deleted;
 * @description: If new length greater than the name of every property whose name 
 * is an array index;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.5.2_A3_T4",

path: "15.4.5.2, 15.4.2.2",

description: "If new length greater than the name of every property whose name",

test: function testcase() {
   //CHECK#1
var x = [0,1,2]; 
x[4294967294] = 4294967294; 
x.length = 2;

//CHECK#1
if (x[0] !== 0) {  
  $ERROR('#1: x = [0,1,2]; x[4294967294] = 4294967294; x.length = 2; x[0] === 0. Actual: ' + (x[0]));    
}

//CHECK#2
if (x[1] !== 1) {  
  $ERROR('#2: x = [0,1,2]; x[4294967294] = 4294967294; x.length = 2; x[1] === 1. Actual: ' + (x[1]));    
}

//CHECK#3
if (x[2] !== undefined) {  
  $ERROR('#3: x = [0,1,2]; x[4294967294] = 4294967294; x.length = 2; x[2] === undefined. Actual: ' + (x[2]));    
}

//CHECK#4
if (x[4294967294] !== undefined) {  
  $ERROR('#4: x = [0,1,2]; x[4294967294] = 4294967294; x.length = 2; x[4294967294] === undefined. Actual: ' + (x[4294967294]));    
}


 }
});

