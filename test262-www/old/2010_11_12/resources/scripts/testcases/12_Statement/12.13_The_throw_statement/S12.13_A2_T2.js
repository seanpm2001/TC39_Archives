// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A2_T2;
 * @section: 12.13;
 * @assertion: "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression;
 * @description: Throwing null;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A2_T2",

path: "12.13",

description: "Throwing null",

test: function testcase() {
   // CHECK#1
try{
  throw null;
}
catch(e){
  if (e!==null) $ERROR('#1: Exception === null. Actual:  Exception ==='+ e  );
}

 }
});

