// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A3.1_T1;
 * @section: 15.1.2.2, 9.3;
 * @assertion: Operator use ToNumber;
 * @description: Checking for boolean primitive;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A3.1_T1",

path: "15.1.2.2, 9.3",

description: "Checking for boolean primitive",

test: function testcase() {
   //CHECK#1
if (parseInt("11", false) !== parseInt("11", 10)) {
  $ERROR('#1: parseInt("11", false) === parseInt("11", 10). Actual: ' + (parseInt("11", false)));
}

//CHECK#2
if (isNaN(parseInt("11", true)) !== true) {
  $ERROR('#2: parseInt("11", true) === Not-a-Number. Actual: ' + (parseInt("11", true)));
}

 }
});

