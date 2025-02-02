// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.8.1.2_A1;
 * @section: 15.8.1.2;
 * @assertion: Math.LN10 is approximately 2.302585092994046;
 * @description: Comparing Math.LN10 with 2.302585092994046;
 */

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.1.2_A1",

path: "15.8.1.2",

description: "Comparing Math.LN10 with 2.302585092994046",

test: function testcase() {
   $INCLUDE("math_precision.js");
$INCLUDE("math_isequal.js");

// CHECK#1
if (!isEqual(Math.LN10, 2.302585092994046)) {
  $ERROR('#1: \'Math.LN10 is not approximately equal to 2.302585092994046\'');
}

 }
});

