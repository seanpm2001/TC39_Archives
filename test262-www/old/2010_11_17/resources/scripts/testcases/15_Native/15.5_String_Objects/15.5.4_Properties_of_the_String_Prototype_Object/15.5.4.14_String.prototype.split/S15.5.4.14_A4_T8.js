// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A4_T8;
* @section: 15.5.4.14;
* @assertion: String.prototype.split (separator, limit) returns an Array object into which substrings of the result of converting this object to a string have
* been stored. If separator is a regular expression then 
* inside of SplitMatch helper the [[Match]] method of R is called giving it the arguments corresponding;
* @description: Arguments are regexp /l/ and "hi", and instance is String("hello");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A4_T8",

path: "15.5.4.14",

description: "Arguments are regexp /l/ and \"hi\", and instance is String(\"hello\")",

test: function testcase() {
   var __string = new String("hello");

var __re = /l/;

var __split = __string.split(__re, "hi");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__split.constructor !== Array) {
  $ERROR('#1: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re, "hi"); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.length !== 0) {
  $ERROR('#2: var __string = new String("hello"); var __re = /l/; __split = __string.split(__re, "hi"); __split.length === 0. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

