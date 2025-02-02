// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.1.1_A1_T2;
 * @section: 15.6.1.1;
 * @assertion: Returns a boolean value (not a Boolean object) computed by 
 * ToBoolean(value);
 * @description: Used various number values as argument; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.1.1_A1_T2",

path: "15.6.1.1",

description: "Used various number values as argument",

test: function testcase() {
   //CHECK#1
if( typeof Boolean(0) !== "boolean" ) {
  $ERROR('#1.1: typeof Boolean(0) should be "boolean", actual is "'+typeof Boolean(0)+'"');
}
if( Boolean(0) !== false ) {
  $ERROR('#1.2: Boolean(0) should be false, actual is '+Boolean(0));
}

//CHECK#2
if( typeof Boolean(-1) !== "boolean" ) {
  $ERROR('#2.1: typeof Boolean(-1) should be "boolean", actual is "'+typeof Boolean(-1)+'"');
}
if( Boolean(-1) !== true ) {
  $ERROR('#2.2: Boolean(-1) should be true, actual is '+Boolean(-1));
}

//CHECK#3
if( typeof Boolean(-Infinity) !== "boolean" ) {
  $ERROR('#3.1: typeof Boolean(-Infinity) should be "boolean", actual is "'+typeof Boolean(-Infinity)+'"');
}
if( Boolean(-Infinity) !== true ) {
  $ERROR('#3.2: Boolean(-Infinity) should be true, actual is '+Boolean(-Infinity));
}

//CHECK#4
if( typeof Boolean(NaN) !== "boolean" ) {
  $ERROR('#4.1: typeof Boolean(NaN) should be "boolean", actual is "'+typeof Boolean(NaN)+'"');
}
if( Boolean(NaN) !== false ) {
  $ERROR('#4.2: Boolean(NaN) should be false, actual is '+Boolean(NaN));
}

 }
});

