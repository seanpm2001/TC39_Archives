// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.4.1_A2.1;
* @section: 11.4.1;
* @assertion: If Type(x) is not Reference, return true;
* @description: Checking primitive value and Object value cases; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.4.1_A2.1",

path: "11.4.1",

description: "Checking primitive value and Object value cases",

test: function testcase() {
   //CHECK#1
if (delete 1 !== true) {
  $ERROR('#1: delete 1 === true');
}

//CHECK#2
if (delete new Object() !== true) {
  $ERROR('#2: delete new Object() === true');
}


 }
});

