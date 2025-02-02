// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.5.1_A3_T1;
* @section: 15.3.5.1;
* @assertion: the length property has the attributes { ReadOnly };
* @description: Checking if varying the length property of Function("arg1,arg2,arg3","arg4,arg5", null) fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.1_A3_T1",

path: "15.3.5.1",

description: "Checking if varying the length property of Function(\"arg1,arg2,arg3\",\"arg4,arg5\", null) fails",

test: function testcase() {
   f = new Function("arg1,arg2,arg3","arg4,arg5", null);

//CHECK#1
if (!(f.hasOwnProperty('length'))) {
  $FAIL('#1: the function has length property.');
}

length = f.length;

f.length = function(){};

//CHECK#2
if (f.length !== length) {
  $ERROR('#2: the function.length property has the attributes ReadOnly');
}

//CHECK#3
try {
  f.length();
  $ERROR('#3: the function.length property has the attributes ReadOnly');
} catch (e) {
  ;
}

//CHECK#4
if (f.length !== 5) {
  $ERROR('#4: the length property has the attributes { ReadOnly }');
}

 }
});

