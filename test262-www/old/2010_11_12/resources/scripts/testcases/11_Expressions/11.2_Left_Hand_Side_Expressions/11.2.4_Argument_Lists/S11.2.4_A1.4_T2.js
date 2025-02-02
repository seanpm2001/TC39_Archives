// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.4_A1.4_T2;
* @section: 11.2.4, 11.2.3, 10.1.8;
* @assertion: Arguments : (ArgumentList : ArgumentList, AssignmentExpression);
* @description: Return an internal list whose length is one greater than the 
* length of ArgumentList and whose items are the items of ArgumentList, in order, 
* followed at the end by GetValue(AssignmentExpression), which is the last item of 
* the new list;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.4_A1.4_T2",

path: "11.2.4, 11.2.3, 10.1.8",

description: "Return an internal list whose length is one greater than the",

test: function testcase() {
   function f_arg() {
}

//CHECK#1
try {
  f_arg(x,x=1);
  $ERROR('#1.1: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (f_arg(x,x=1)));  
}
catch (e) {
  if ((e instanceof ReferenceError) !== true) {
    $ERROR('#1.2: function f_arg() {} f_arg(x,x=1) throw ReferenceError. Actual: ' + (e));  
  }
}

 }
});

