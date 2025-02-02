// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.14_A1_T9;
* @section: 15.5.4.14;
* @assertion: String.prototype.split(separator, limit):
* i) can be transferred to other kinds of objects for use as a method.
* separator and limit can be any kinds of object since:
* ii) if separator is not RegExp ToString(separator) performs and
* iii) ToInteger(limit) performs;
* @description: Argument is function(){}(), and instance is String(object), object have overrided toString and valueOf functions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.14_A1_T9",

path: "15.5.4.14",

description: "Argument is function(){}(), and instance is String(object), object have overrided toString and valueOf functions",

test: function testcase() {
   var __obj = {
    valueOf:function(){},
    toString:void 0
};

//since ToString(undefined) evaluates to "undefined" split(undefined) evaluates to split("undefined")
var __split = new String(__obj).split(function(){}());

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof __split !== "object") {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; __split = new String(__obj).split(function(){}()); typeof __split === "object". Actual: '+typeof __split );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__split.constructor !== Array) {
  $ERROR('#2: __obj = {valueOf:function(){}, toString:void 0}; __split = new String(__obj).split(function(){}()); __split.constructor === Array. Actual: '+__split.constructor );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__split.length !== 2) {
  $ERROR('#3: __obj = {valueOf:function(){}, toString:void 0}; __split = new String(__obj).split(function(){}()); __split.length === 2. Actual: '+__split.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (__split[0] !== "") {
  $ERROR('#4: __obj = {valueOf:function(){}, toString:void 0}; __split = new String(__obj).split(function(){}()); __split[0] !== "". Actual: '+__split[0]);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#5
if (__split[1] !== "") {
  $ERROR('#5: __obj = {valueOf:function(){}, toString:void 0}; __split = new String(__obj).split(function(){}()); __split[1] === "". Actual: '+__split[1] );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

