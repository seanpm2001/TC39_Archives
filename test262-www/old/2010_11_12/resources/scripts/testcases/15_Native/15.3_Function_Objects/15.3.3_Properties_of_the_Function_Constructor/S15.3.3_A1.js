// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.3.3_A1;
 * @section: 15.3.3;
 * @assertion: The Function constructor has the property "prototype";
 * @description: Checking existence of the property "prototype";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.3_A1",

path: "15.3.3",

description: "Checking existence of the property \"prototype\"",

test: function testcase() {
   if(!Function.hasOwnProperty("prototype")){
  $ERROR('#1: The Function constructor has the property "prototype"');
}


 }
});

