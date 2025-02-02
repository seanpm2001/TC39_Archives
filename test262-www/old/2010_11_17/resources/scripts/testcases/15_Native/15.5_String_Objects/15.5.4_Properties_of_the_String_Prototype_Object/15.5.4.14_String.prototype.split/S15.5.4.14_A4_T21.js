// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A4_T21;
* @section: 15.5.4.14;
* @assertion: String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
* been stored. If separator is a regular expression then 
* inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding;
* @description: Argument is regexp /\X/, and instance is String("a b c de f");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A4_T21",

path: "15.5.4.14",

description: "Argument is regexp /\\X/, and instance is String(\"a b c de f\")",

test: function testcase() {
   var __string = new String("a b c de f");

var __re = /X/;

var __split = __string.split(__re);

var __expected = ["a b c de f"];

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== __expected.length) {
  $ERROR('#2: __split.length === __expected.length. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split[0] !== __expected[0]) {
  $ERROR('#3: __split[0] === '+__expected[0]+'. Actual: '+__split[index] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

