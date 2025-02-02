// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.4_A3_T5;
* @section: 15.3.4.4;
* @assertion: If thisArg is null or undefined, the called function is passed the global object as the this value;
* @description: No any arguments at call function and it called inside function declaration;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.4_A3_T5",

path: "15.3.4.4",

description: "No any arguments at call function and it called inside function declaration",

test: function testcase() {
   function FACTORY(){
  Function("this.feat=\"in da haus\"").call();
};

var obj = new FACTORY;

//CHECK#1
if (this["feat"] !== "in da haus") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

//CHECK#2
if (typeof obj.feat !== "undefined") {
  $ERROR('#1: If thisArg is null or undefined, the called function is passed the global object as the this value');
}

 }
});

