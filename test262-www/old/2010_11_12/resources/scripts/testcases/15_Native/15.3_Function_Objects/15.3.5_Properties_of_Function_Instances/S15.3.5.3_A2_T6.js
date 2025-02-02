// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.3.5.3_A2_T6;
 * @section: 15.3.5.3, 11.8.6;
 * @assertion: Assume F is a Function object. When the [[HasInstance]] method of
 *             F is called with value V and V is an object, the following steps
 *             are taken: i) Call the [[Get]] method of F with property name
 *             "prototype". ii) Let O be Result(i). iii) O is not an object,
 *             throw a TypeError exception;
 * @description: F.prototype is string, and V is function;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.5.3_A2_T6",

path: "15.3.5.3, 11.8.6",

description: "F.prototype is string, and V is function",

test: function testcase() {
   FACTORY = new Function;

FACTORY.prototype = "error";

// CHECK#1
try {
  ( function() {
  }) instanceof FACTORY;
  $FAIL('#1: O is not an object, throw a TypeError exception');
} catch (e) {
  if (!(e instanceof TypeError)) {
    $ERROR('#1.1: O is not an object, throw a TypeError exception');
  }
}

 }
});

