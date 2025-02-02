// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A1_T6;
* @section: 15.5.4.14;
* @assertion: String.prototype.split(separator, limit):
* i) can be transferred to other kinds of objects for use as a method.
* separator and limit can be any kinds of object since:
* ii) if separator is not RegExp ToString(separator) performs and
* iii) ToInteger(limit) performs;
* @description: Argument is x, and instance is new String. x is undefined variable;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A1_T6",

path: "15.5.4.14",

description: "Argument is x, and instance is new String. x is undefined variable",

test: function testcase() {
   //since ToString(undefined) evaluates to "" split(undefined) evaluates to split("",0)
var __split = new String("1undefined").split(x);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __split !== "object") {
  $ERROR('#1: var x; __split = new String("1undefined").split(x); typeof __split === "object". Actual: '+typeof __split );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.constructor !== Array) {
  $ERROR('#2: var x; __split = new String("1undefined").split(x); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split.length !== 2) {
  $ERROR('#3: var x; __split = new String("1undefined").split(x); __split.length === 2. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__split[0] !== "1") {
  $ERROR('#4: var x; __split = new String("1undefined").split(x); __split[0] === "1". Actual: '+__split[0] );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__split[1] !== "") {
  $ERROR('#5: var x; __split = new String("1undefined").split(x); __split[1] === "". Actual: '+__split[1] );
}
//
//////////////////////////////////////////////////////////////////////////////

var x;

 }
});

