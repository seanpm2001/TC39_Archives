// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.2_A3;
 * @section: 8.2, 11.4.3;
 * @assertion: For the keyword null the typeof operator returns the "object"
 * See also 
 * http://developer.mozilla.org/en/docs/Core_JavaScript_1.5_Reference:Operators:Special_Operators:typeof_Operator
 * and 
 * http://bugs.ecmascript.org/ticket/250
 * for example;
 * @description: Check type of null; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.2_A3",

path: "8.2, 11.4.3",

description: "Check type of null",

test: function testcase() {
   //////////////////////////////////////////////////////////////
// CHECK#1
if (typeof(null) !== "object") {
  $ERROR('#1: typeof null === "object". Actual: ' + (typeof null));
}
//
/////////////////////////////////////////////////////////////

 }
});

