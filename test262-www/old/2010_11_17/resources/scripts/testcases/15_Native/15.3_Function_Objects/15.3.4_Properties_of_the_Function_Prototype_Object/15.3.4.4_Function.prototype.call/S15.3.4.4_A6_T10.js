// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A6_T10;
* @section: 15.3.4.4;
* @assertion: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs
* a function call using the [[Call]] property of the object;
* @description: Argunemts of call function is (empty object, "", arguments,2), inside function call without declaration used;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A6_T10",

path: "15.3.4.4",

description: "Argunemts of call function is (empty object, \"\", arguments,2), inside function call without declaration used",

test: function testcase() {
   var obj={};

(function (){
  Function("a1,a2,a3","this.shifted=a1.length+a2+a3;").call(obj,arguments,"","2");
})("",4,2,"a");

//CHECK#1
if (obj["shifted"] !== "42") {
  $ERROR('#1: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}

//CHECK#2
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#2: The call method takes one or more arguments, thisArg and (optionally) arg1, arg2 etc, and performs a function call using the [[Call]] property of the object');
}


 }
});

