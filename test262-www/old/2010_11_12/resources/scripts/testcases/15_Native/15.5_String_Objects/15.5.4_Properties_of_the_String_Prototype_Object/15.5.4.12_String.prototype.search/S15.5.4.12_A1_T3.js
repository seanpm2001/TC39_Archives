// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.12_A1_T3;
* @section: 15.5.4.12;
* @assertion: String.prototype.search (regexp);
* @description: Checking by using eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.12_A1_T3",

path: "15.5.4.12",

description: "Checking by using eval",

test: function testcase() {
   var search = String.prototype.search;

if (typeof toString === "undefined"){
    var toString = Object.prototype.toString;
}

var __class__ = toString();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (search(eval("\"bj\"")) !== 2) {
  $ERROR('#1: search = String.prototype.search; search(eval("\\"bj\\"")) === 2. Actual: '+search(eval("\"bj\"")) );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

