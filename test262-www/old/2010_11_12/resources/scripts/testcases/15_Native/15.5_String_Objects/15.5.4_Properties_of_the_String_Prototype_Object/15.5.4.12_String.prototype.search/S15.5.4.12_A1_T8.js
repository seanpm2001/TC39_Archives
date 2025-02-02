// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T8;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is void 0, and instance is String object with overrided toString function;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T8",

path: "15.5.4.12",

description: "Argument is void 0, and instance is String object with overrided toString function",

test: function testcase() {
   var __obj = {toString:function(){}};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
//since ToString(void 0) evaluates to "undefined" search(void 0) evaluates to search("undefined")
if (String(__obj).search(void 0) !== 0) {
  $ERROR('#1: __obj = {toString:function(){}}; String(__obj).search(void 0) === 0. Actual: '+String(__obj).search(void 0) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

