// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T9;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Call toLocaleUpperCase() function of string object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T9",

path: "15.5.4.19",

description: "Call toLocaleUpperCase() function of string object",

test: function testcase() {
   var __obj = {
    valueOf:function(){},
    toString:void 0
};

var __lowerCase = new String(__obj).toLocaleUpperCase();

var __expected ="UNDEFINED"; 

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__lowerCase.length !== __expected.length) {
  $ERROR('#1: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.length === __expected.length. Actual: '+__lowerCase.length );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__lowerCase.index !== __expected.index) {
  $ERROR('#2: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.index === __expected.index. Actual: '+__lowerCase.index );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__lowerCase.input !== __expected.input) {
  $ERROR('#3: __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase.input === __expected.input. Actual: '+__lowerCase.input );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__lowerCase[index]!==__expected[index]) {
    $ERROR('#4.'+index+': __obj = {valueOf:function(){}, toString:void 0}; __lowerCase = new String(__obj).toLocaleUpperCase(); __expected ="UNDEFINED"; __lowerCase['+index+']==='+__expected[index]+'. Actual: '+__lowerCase[index]);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

