// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.2.1_A1_T13;
* @section: 15.5.2.1;
* @assertion: When "String" is called as part of a new expression, it is a constructor: it initialises the newly created object and
* The [[Value]] property of the newly constructed object is set to ToString(value), or to the empty string if value is not supplied;
* @description: Creating string object with "new String(function object)" after changing function object's valueOf property, which causes exception throw; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.2.1_A1_T13",

path: "15.5.2.1",

description: "Creating string object with \"new String(function object)\" after changing function object\'s valueOf property, which causes exception throw",

test: function testcase() {
   var __obj = {toString:function(){return f; function f(){}}};

__obj.valueOf=function(){throw "invalueof"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var __str = new String(__obj);
  $ERROR('#1: __obj.valueOf=function(){throw "invalueof"}; __str = new String(__obj) lead throwing exception');
} catch (e) {
  if (e!=="invalueof") {
    $ERROR('#1.1: e==="invalueof". Actual: e==='+e); 
  }
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

