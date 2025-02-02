// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.1_A1_T2;
* @section: 15.3.5.1;
* @assertion: The value of the length property is usually an integer that indicates the 'typical' number of arguments expected by the function;
* @description: Checking length property of Function("arg1,arg2,arg3","arg4,arg5", null);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.1_A1_T2",

path: "15.3.5.1",

description: "Checking length property of Function(\"arg1,arg2,arg3\",\"arg4,arg5\", null)",

test: function testcase() {
   f = Function("arg1,arg2,arg3","arg4,arg5", null);

//CHECK#1
if (!(f.hasOwnProperty('length'))) {
  $FAIL('#1: the function has length property.');
}

//CHECK#2
if (f.length !== 5) {
  $ERROR('#2: The value of the length property is usually an integer that indicates the "typical" number of arguments expected by the function');
}

 }
});

