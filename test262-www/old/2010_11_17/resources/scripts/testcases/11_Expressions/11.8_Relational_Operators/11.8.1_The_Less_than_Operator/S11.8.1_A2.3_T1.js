// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.1_A2.3_T1;
 * @section: 11.8.1;
 * @assertion: ToNumber(first expression) is called first, and then ToNumber(second expression);
 * @description: Checking with "throw";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.1_A2.3_T1",

path: "11.8.1",

description: "Checking with \"throw\"",

test: function testcase() {
   //CHECK#1
var x = { valueOf: function () { throw "x"; } };
var y = { valueOf: function () { throw "y"; } };
try {
   x < y;
   $ERROR('#1.1: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x < y throw "x". Actual: ' + (x < y));
} catch (e) {
   if (e === "y") {
     $ERROR('#1.2: ToNumber(first expression) is called first, and then ToNumber(second expression)');
   } else {
     if (e !== "x") {
       $ERROR('#1.3: var x = { valueOf: function () { throw "x"; } }; var y = { valueOf: function () { throw "y"; } }; x < y throw "x". Actual: ' + (e));
     }
   }
}

 }
});

