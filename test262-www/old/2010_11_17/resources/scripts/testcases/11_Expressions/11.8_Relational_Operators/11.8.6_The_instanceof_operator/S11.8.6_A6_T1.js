// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A6_T1;
* @section: 11.8.6;
* @assertion: Only Function objects implement [[HasInstance]] and can be proper ShiftExpression for the "instanceof" operator consequently
* @description: Checking "this" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A6_T1",

path: "11.8.6",

description: "Checking \"this\" case",

test: function testcase() {
   //CHECK#1
try{
	({}) instanceof this;
	$ERROR('#1: Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
}
catch(e){
  if (e instanceof TypeError !== true) {
    $ERROR('#1: Only Function objects implement [[HasInstance]] and consequently can be proper ShiftExpression for The instanceof operator');
  }
}

 }
});

