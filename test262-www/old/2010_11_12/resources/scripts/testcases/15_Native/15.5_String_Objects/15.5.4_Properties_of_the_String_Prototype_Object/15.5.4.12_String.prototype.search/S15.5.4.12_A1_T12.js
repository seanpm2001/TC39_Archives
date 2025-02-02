// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T12;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Argument is object, and instance is string. 
* Object with overrided toString and valueOf functions, valueOf throw exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T12",

path: "15.5.4.12",

description: "Argument is object, and instance is string.",

test: function testcase() {
   var __obj = {toString:function(){return {};},valueOf:function(){throw "intostr";}}
var __str = new String("ABB\u0041BABAB");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
with(__str){
    try {
      var x = search(__obj);
      $FAIL('#1: var x = search(__obj) lead to throwing exception');
    } catch (e) {
      if (e!=="intostr") {
        $ERROR('#1.1: Exception === "intostr". Actual: '+e);
      }
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

