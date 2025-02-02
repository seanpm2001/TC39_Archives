// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.3_A6;
 * @section: 15.7.3;
 * @assertion: The Number constructor has the property "POSITIVE_INFINITY";
 * @description: Checking existence of the property "POSITIVE_INFINITY";
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.3_A6",

path: "15.7.3",

description: "Checking existence of the property \"POSITIVE_INFINITY\"",

test: function testcase() {
   if(!Number.hasOwnProperty("POSITIVE_INFINITY")){
  $ERROR('#1: The Number constructor has the property "POSITIVE_INFINITY"');
}


 }
});

