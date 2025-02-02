// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A5_T8;
* @section: 15.3.4.4;
* @assertion: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value;
* @description: thisArg is Function();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A5_T8",

path: "15.3.4.4",

description: "thisArg is Function()",

test: function testcase() {
   var obj=Function();

new Function("this.touched= true; return this;").call(obj);

//CHECK#1
if (!(obj.touched)) {
  $ERROR('#1: If thisArg is not null(defined) the called function is passed ToObject(thisArg) as the this value');
}

 }
});

