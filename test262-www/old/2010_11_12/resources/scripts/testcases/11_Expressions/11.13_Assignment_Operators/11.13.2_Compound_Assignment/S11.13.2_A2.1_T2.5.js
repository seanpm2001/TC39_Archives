// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.13.2_A2.1_T2.5;
 * @section: 11.13.2;
 * @assertion: Operator uses GetValue; 
 * @description: If GetBase(AssigmentExpression) is null, throw ReferenceError. Check operator is "x -= y";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A2.1_T2.5",

path: "11.13.2",

description: "If GetBase(AssigmentExpression) is null, throw ReferenceError. Check operator is \"x -= y\"",

test: function testcase() {
   //CHECK#1
try {
  var x = 1;
  var z = (x -= y);
  $ERROR('#1.1: var x = 1; x -= y throw ReferenceError. Actual: ' + (z));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: var x = 1; x -= y throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

