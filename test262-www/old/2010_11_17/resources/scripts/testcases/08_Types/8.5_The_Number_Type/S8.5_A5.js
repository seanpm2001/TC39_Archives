// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A5;
 * @section: 8.5, 7.8.3;
 * @assertion: NaN not greater or equal zero;
 * @description: Compare NaN with zero;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A5",

path: "8.5, 7.8.3",

description: "Compare NaN with zero",

test: function testcase() {
   var x = NaN;
var x_geq_0=(x >= 0.0);
var x_leq_0=(x <= 0.0);
var x_leq_0_OR_geq_0=(x <= 0.0)||(x >= 0.0);
var x_geq_0_ADD_leq_0=(x >= 0.0) + (x <= 0.0);


///////////////////////////////////////////////////
// CHECK#1
if (x_geq_0){
  $ERROR('#1: NaN not greater or equal zero');
} else {
  $PRINT('#1: NaN not greater or equal zero');
}
//
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// CHECK#2
if (x_leq_0){
  $ERROR('#2: NaN not less or equal zero');
} else {
  $PRINT('#2: NaN not less or equal zero');
}
//
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// CHECK#3
if (x_leq_0_OR_geq_0){
  $ERROR('#3: NaN not less or equal zero OR greater or equal zero');
} else {
  $PRINT('#3: NaN not less or equal zero OR greater or equal zero');
}
//
///////////////////////////////////////////////////

///////////////////////////////////////////////////
// CHECK#4
if (x_geq_0_ADD_leq_0){
  $ERROR('#4: NaN not less or equal zero ADD greater or equal zero');
} else {
  $PRINT('#4: NaN not less or equal zero ADD greater or equal zero');
}
//
///////////////////////////////////////////////////

 }
});

