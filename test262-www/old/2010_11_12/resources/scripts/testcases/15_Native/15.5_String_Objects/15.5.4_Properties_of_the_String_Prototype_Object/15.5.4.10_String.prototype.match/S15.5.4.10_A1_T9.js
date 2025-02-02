// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.10_A1_T9;
* @section: 15.5.4.10;
* @assertion: String.prototype.match (regexp);
* @description: Call match (regexp) function with function(){}() argument of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.10_A1_T9",

path: "15.5.4.10",

description: "Call match (regexp) function with function(){}() argument of string object",

test: function testcase() {
   var __obj = {
    valueOf:function(){},
    toString:void 0
};

var __matched = new String(__obj).match(function(){}());

var __expected = RegExp(undefined).exec("undefined"); 

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__matched.length !== __expected.length) {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.length === __expected.length. Actual: '+__matched.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__matched.index !== __expected.index) {
  $ERROR('#2: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.index === __expected.index. Actual: '+__matched.index );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__matched.input !== __expected.input) {
  $ERROR('#3: __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched.input === __expected.input. Actual: '+__matched.input );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__matched[index]!==__expected[index]) {
    $ERROR('#4.'+index+': __obj = {valueOf:function(){}, toString:void 0}; __matched = new String(__obj).match(function(){}()); __expected = RegExp(undefined).exec("undefined"); __matched['+index+']===__expected['+index+']. Actual: '+__matched[index]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

