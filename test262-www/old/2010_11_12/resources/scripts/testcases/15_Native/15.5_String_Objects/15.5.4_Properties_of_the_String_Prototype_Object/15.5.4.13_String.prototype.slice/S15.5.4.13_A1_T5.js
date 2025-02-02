// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.13_A1_T5;
* @section: 15.5.4.13;
* @assertion: String.prototype.slice (start, end);
* @description: Arguments are null and call other slice(start, end), and instance is function object, that have overrided valueOf and toString functions;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.13_A1_T5",

path: "15.5.4.13",

description: "Arguments are null and call other slice(start, end), and instance is function object, that have overrided valueOf and toString functions",

test: function testcase() {
   __func.valueOf=function(){return "gnulluna"};
__func.toString=function(){return __func;};

Function.prototype.slice=String.prototype.slice;


//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func.slice(null, Function().slice(__func,5).length) !== "gnull") {
  $ERROR('#1: __func.slice(null, Function().slice(__func,5).length) === "gnull". Actual: '+__func.slice(null, Function().slice(__func,5).length) );
}
//
//////////////////////////////////////////////////////////////////////////////

function __func(){};

 }
});

