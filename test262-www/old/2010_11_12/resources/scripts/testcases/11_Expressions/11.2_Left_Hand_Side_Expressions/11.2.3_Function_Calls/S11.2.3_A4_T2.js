// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.3_A4_T2;
* @section: 11.2.3;
* @assertion: If MemberExpression does not implement the internal [[Call]] method, throw TypeError;
* @description: Checking Number object case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.3_A4_T2",

path: "11.2.3",

description: "Checking Number object case",

test: function testcase() {
   //CHECK#1
try {
  new Number(1)();
  $ERROR('#1.1: new Number(1)() throw TypeError. Actual: ' + (new Number(1)()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new Number(1)() throw TypeError. Actual: ' + (e));	
  }
}

//CHECK#2
try {
  var x = new Number(1);
  x();
  $ERROR('#2.1: var x = new Number(1); x() throw TypeError. Actual: ' + (x()));	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: var x = new Number(1); x() throw TypeError. Actual: ' + (e));	
  }
}


 }
});

