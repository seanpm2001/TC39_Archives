// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.19_A1_T11;
* @section: 15.5.4.19;
* @assertion: String.prototype.toLocaleUpperCase();
* @description: Override toString function, toString throw exception, then call toLocaleUpperCase() function for this object;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.19_A1_T11",

path: "15.5.4.19",

description: "Override toString function, toString throw exception, then call toLocaleUpperCase() function for this object",

test: function testcase() {
   var __obj = {toString:function(){throw "intostr";}}
__obj.toLocaleUpperCase = String.prototype.toLocaleUpperCase;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
  var x = __obj.toLocaleUpperCase();
  $FAIL('#1: "var x = __obj.toLocaleUpperCase()" lead to throwing exception');
} catch (e) {
  if (e!=="intostr") {
    $ERROR('#1.1: Exception === "intostr". Actual: '+e);
  }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

