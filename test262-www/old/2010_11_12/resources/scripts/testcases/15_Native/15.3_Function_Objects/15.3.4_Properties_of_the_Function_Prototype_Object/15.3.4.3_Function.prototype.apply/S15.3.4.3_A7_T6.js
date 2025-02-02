// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.4.3_A7_T6;
* @section: 15.3.4.3;
* @assertion: If argArray is either an array or an arguments object, 
* the function is passed the (ToUint32(argArray.length)) arguments argArray[0], argArray[1],...,argArray[ToUint32(argArray.length)-1];
* @description: argArray is (this, arguments), inside function declaration used;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.4.3_A7_T6",

path: "15.3.4.3",

description: "argArray is (this, arguments), inside function declaration used",

test: function testcase() {
   function FACTORY(){
  Function("a1,a2,a3","this.shifted=a1+a2+a3;").apply(this,arguments);
}

obj=new FACTORY("",4,2);

//CHECK#1
if (obj["shifted"] !== "42") {
  $ERROR('#1: If argArray is either an array or an arguments object, the function is passed the...');
}

//CHECK#2
if (typeof this["shifted"] !== "undefined") {
  $ERROR('#2: If argArray is either an array or an arguments object, the function is passed the...');
}


 }
});

