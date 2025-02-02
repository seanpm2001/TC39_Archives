// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.14_A2.1_T3;
* @section: 11.14;
* @assertion: Operator uses GetValue;
* @description: If GetBase(AssigmentExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.14_A2.1_T3",

path: "11.14",

description: "If GetBase(AssigmentExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
    1, S11_14_A2_1_T3_y;
    $ERROR('#1.1: 1, S11_14_A2_1_T3_y throw ReferenceError. Actual: ' + (1, S11_14_A2_1_T3_y));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
      $ERROR('#1.2: 1, S11_14_A2_1_T3_y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

