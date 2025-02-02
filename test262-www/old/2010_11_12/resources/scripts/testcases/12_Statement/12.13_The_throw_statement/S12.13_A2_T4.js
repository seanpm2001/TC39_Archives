// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A2_T4;
 * @section: 12.13;
 * @assertion: "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression;
 * @description: Throwing string;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A2_T4",

path: "12.13",

description: "Throwing string",

test: function testcase() {
   // CHECK#1
try{
  throw "exception #1";
}
catch(e){
  if (e!=="exception #1") $ERROR('#1: Exception ==="exception #1". Actual:  Exception ==='+ e );
}

// CHECK#2
var b="exception #1";
try{
  throw b;
}
catch(e){
  if (e!=="exception #1") $ERROR('#2: Exception ==="exception #1". Actual:  Exception ==='+ e );
}

 }
});

