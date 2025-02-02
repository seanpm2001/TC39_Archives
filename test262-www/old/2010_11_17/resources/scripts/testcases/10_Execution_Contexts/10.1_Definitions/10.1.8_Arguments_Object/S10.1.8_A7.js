// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.8_A7;
 * @section: 10.1.8;
 * @assertion: Get arguments of function;
 * @description: Use property arguments;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.8_A7",

path: "10.1.8",

description: "Use property arguments",

test: function testcase() {
   function f1() {
  return arguments;
}
  
//CHECK#1-5
for(var i = 1; i < 5; i++){  
if (f1(1,2,3,4,5)[i] !== (i+1))
  $ERROR("#"+i+": Returning function's arguments work wrong, f1(1,2,3,4,5)["+i+"] !== "+(i+1));
}

 }
});

