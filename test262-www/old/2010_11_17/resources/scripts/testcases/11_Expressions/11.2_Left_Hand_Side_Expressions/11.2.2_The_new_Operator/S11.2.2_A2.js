// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.2_A2;
* @section: 11.2.2;
* @assertion: Operator "new" uses GetValue;
* @description: If GetBase(NewExpression) or GetBase(MemberExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.2_A2",

path: "11.2.2",

description: "If GetBase(NewExpression) or GetBase(MemberExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  new x;
  $ERROR('#1.1: new x throw ReferenceError. Actual: ' + (new x));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: new x throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
try {
  new x();
  $ERROR('#2: new x() throw ReferenceError'); 
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#2: new x() throw ReferenceError'); 
  }
}

 }
});

