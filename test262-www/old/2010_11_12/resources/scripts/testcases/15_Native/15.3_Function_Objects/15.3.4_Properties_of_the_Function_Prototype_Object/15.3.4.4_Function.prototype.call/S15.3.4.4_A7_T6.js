// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A7_T6;
* @section: 15.3.4.4;
* @assertion: Function.prototype.call can't be used as [[create]] caller;
* @description: Checking if creating "new (Function("function f(){this.p1=1;};return f").call())" fails;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A7_T6",

path: "15.3.4.4",

description: "Checking if creating \"new (Function(\"function f(){this.p1=1;};return f\").call())\" fails",

test: function testcase() {
   //CHECK#1
try {
  var obj = new (Function("function f(){this.p1=1;};return f").call());
} catch (e) {
  $ERROR('#1: Function.prototype.call can\'t be used as [[create]] caller');
}

//CHECK#2
if (obj.p1!== 1) {
  $ERROR('#2: Function.prototype.call can\'t be used as [[create]] caller');
}

 }
});

