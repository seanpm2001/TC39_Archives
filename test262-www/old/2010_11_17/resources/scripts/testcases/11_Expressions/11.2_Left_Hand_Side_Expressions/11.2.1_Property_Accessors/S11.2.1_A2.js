// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.1_A2;
* @section: 11.2.1;
* @assertion: MemberExpression and CallExpression uses GetValue;
* @description: If GetBase(MemberExpression or CallExpression) is null, throw ReferenceError;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.1_A2",

path: "11.2.1",

description: "If GetBase(MemberExpression or CallExpression) is null, throw ReferenceError",

test: function testcase() {
   //CHECK#1
try {
  object[1];
  $ERROR('#1.1: object[1] throw ReferenceError. Actual: ' + (object[1]));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: object[1] throw ReferenceError. Actual: ' + (e));  
  }
}

//CHECK#2
try {
  object.prop;
  $ERROR('#2.1: object.prop throw ReferenceError. Actual: ' + (object.prop)); 
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#2.2: object.prop throw ReferenceError. Actual: ' + (e)); 
  }
}

 }
});

