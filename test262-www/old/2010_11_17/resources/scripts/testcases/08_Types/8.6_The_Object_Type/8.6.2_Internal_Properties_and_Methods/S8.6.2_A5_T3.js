// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2_A5_T3;
* @section: 8.6.2, 13.1, 13.2;
* @assertion: [[Call]] executes code associated with the object;
* @description: Call function-property of global object, property defined
*  as knock=function(){count++};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2_A5_T3",

path: "8.6.2, 13.1, 13.2",

description: "Call function-property of global object, property defined",

test: function testcase() {
   count=0;
knock=function(){count++};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
knock();
if (count !==1) {
  $ERROR('#1: count=0; knock=function(){count++}; knock(); count === 1. Actual: ' + (count));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
this['knock']();
if (count !==2) {
  $ERROR('#2: count=0; knock=function(){count++}; knock(); this[\'knock\'](); count === 2. Actual: ' + (count));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

