// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.8_A4_T1;
* @section: 15.5.4.8;
* @assertion: when String.prototype.lastIndexOf(searchString, position) is called first Call ToString, giving it the this value as its argument. 
* Then Call ToString(searchString) and Call ToNumber(position);
* @description: Override toString and valueOf functions, valueOf throw exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.8_A4_T1",

path: "15.5.4.8",

description: "Override toString and valueOf functions, valueOf throw exception",

test: function testcase() {
   var __obj = {toString:function(){return "\u0041B";}}
var __obj2 = {valueOf:function(){throw "intointeger";}}
var __str = {str__:"ABB\u0041BABAB"};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    with(str__){
        try {
          var x = lastIndexOf(__obj, __obj2);
          $FAIL('#1: var x = lastIndexOf(__obj, __obj2) lead to throwing exception');
        } catch (e) {
          if (e!=="intointeger") {
            $ERROR('#1.1: Exception === "intointeger". Actual: '+e);
          }
        }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

