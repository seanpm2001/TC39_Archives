// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A4_T3;
* @section: 15.5.4.8;
* @assertion: when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument. 
* Then Call ToString(searchString) and Call ToNumber(position);
* @description: Override toString and valueOf functions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A4_T3",

path: "15.5.4.8",

description: "Override toString and valueOf functions",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}}
var __obj2 = {valueOf:function(){return {};},toString:function(){}}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ("ABB\u0041BABAB".lastIndexOf(__obj, __obj2)!==7) {
  $ERROR('#1: var __obj = {toString:function(){return "\u0041B";}}; var __obj2 = {valueOf:function(){return {};},toString:function(){}}; "ABB\\u0041BABAB".lastIndexOf(__obj, __obj2)===7. Actual: '+("ABB\u0041BABAB".lastIndexOf(__obj, __obj2)));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

