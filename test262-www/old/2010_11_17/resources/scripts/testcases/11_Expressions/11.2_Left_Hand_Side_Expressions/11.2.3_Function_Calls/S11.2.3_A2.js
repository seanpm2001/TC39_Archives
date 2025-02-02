// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.3_A2;
* @section: 11.2.3;
* @assertion: CallExpression : MemberExpression Arguments uses GetValue;
* @description: If GetBase(MemberExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.3_A2",

path: "11.2.3",

description: "If GetBase(MemberExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  x();
  $ERROR('#1.1: x() throw ReferenceError. Actual: ' + (x()));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: x() throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
try {
  x(1,2,3);
  $ERROR('#2.1: x(1,2,3) throw ReferenceError. Actual: ' + (x(1,2,3))); 
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#2.2: x(1,2,3) throw ReferenceError. Actual: ' + (e)); 
  }
}

 }
});

