// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.3_A3_T1;
* @section: 11.2.3;
* @assertion: If MemberExpression is not Object, throw TypeError;
* @description: Checking "boolean primitive" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.3_A3_T1",

path: "11.2.3",

description: "Checking \"boolean primitive\" case",

test: function testcase() {
   //CHECK#1
try {
  true();
    $ERROR('#1.1: true() throw TypeError. Actual: ' + (true()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: true() throw TypeError. Actual: ' + (e));	
  }
}

//CHECK#2
try {
  var x = true;
  x();
    $ERROR('#2.1: var x = true; x() throw TypeError. Actual: ' + (x()))
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var x = true; x() throw TypeError. Actual: ' + (e))  
  }
}

 }
});

