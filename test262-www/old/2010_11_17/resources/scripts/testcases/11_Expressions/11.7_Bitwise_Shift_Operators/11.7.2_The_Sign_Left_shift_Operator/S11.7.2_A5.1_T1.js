// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.7.2_A5.1_T1;
 * @section: 11.7.2, 9.5;
 * @assertion: Operator x >> y uses ToInt32(ShiftExpression);
 * @description: Checking boundary points;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.7.2_A5.1_T1",

path: "11.7.2, 9.5",

description: "Checking boundary points",

test: function testcase() {
   //CHECK#1
if (2147483648.1 >> 0 !== -2147483648) { 
  $ERROR('#1: 2147483648.1 >> 0 === -2147483648. Actual: ' + (2147483648.1 >> 0)); 
} 

//CHECK#2
if (4294967296.1 >> 0 !== 0) { 
  $ERROR('#2: 4294967296.1 >> 0 === 0. Actual: ' + (4294967296.1 >> 0)); 
} 

//CHECK#3
if (6442450944.1 >> 0 !== -2147483648) { 
  $ERROR('#3: 6442450944.1 >> 0 === -2147483648. Actual: ' + (6442450944.1 >> 0)); 
} 

//CHECK#4
if (4294967295.1 >> 0 !== -1) { 
  $ERROR('#4: 4294967295.1 >> 0 === -1. Actual: ' + (4294967295.1 >> 0)); 
} 

//CHECK#5
if (6442450943.1 >> 0 !== 2147483647) { 
  $ERROR('#5: 6442450943.1 >> 0 === 2147483647. Actual: ' + (6442450943.1 >> 0)); 
} 

//CHECK#6
if (-2147483649.1 >> 0 !== 2147483647) { 
  $ERROR('#6: -2147483649.1 >> 0 === 2147483647. Actual: ' + (-2147483649.1 >> 0)); 
} 

//CHECK#7
if (-4294967297.1 >> 0 !== -1) { 
  $ERROR('#7: -4294967297.1 >> 0 === -1. Actual: ' + (-4294967297.1 >> 0)); 
} 

//CHECK#8
if (-6442450945.1 >> 0 !== 2147483647) { 
  $ERROR('#8: -6442450945.1 >> 0 === 2147483647. Actual: ' + (-6442450945.1 >> 0)); 
} 

//CHECK#9
if (-4294967296.1 >> 0 !== 0) { 
  $ERROR('#9: -4294967296.1 >> 0 === 0 . Actual: ' + (-4294967296.1 >> 0)); 
} 

//CHECK#10
if (-6442450944.1 >> 0 !== -2147483648) { 
  $ERROR('#10: -6442450944.1 >> 0 === -2147483648. Actual: ' + (-6442450944.1 >> 0)); 
} 

 }
});

