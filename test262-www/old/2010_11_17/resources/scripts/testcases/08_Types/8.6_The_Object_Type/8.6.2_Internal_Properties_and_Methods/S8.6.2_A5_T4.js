// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2_A5_T4;
* @section: 8.6.2, 13.1, 13.2;
* @assertion: [[Call]] executes code associated with the object;
* @description: Call function-property of global object, property defined
*  as this['beep']=function(){__count++};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2_A5_T4",

path: "8.6.2, 13.1, 13.2",

description: "Call function-property of global object, property defined",

test: function testcase() {
   __count=0;

this["beep"]=function(){__count++};
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
beep();
if (__count !==1) {
  $ERROR('#1: __count=0; this["beep"]=function(){__count++}; beep(); __count === 1. Actual: ' + (__count));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
this["beep"]();
if (__count !==2) {
  $ERROR('#2: __count=0; this["beep"]=function(){__count++}; beep(); this["beep"](); __count === 2. Actual: ' + (__count));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

