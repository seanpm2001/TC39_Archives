// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.1_A1.1_T2;
 * @section: 15.4.2.1, 15.2.4.2;
 * @assertion: The [[Prototype]] property of the newly constructed object 
 * is set to the original Array prototype object, the one that 
 * is the initial value of Array.prototype;
 * @description: Array.prototype.toString = Object.prototype.toString;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.1_A1.1_T2",

path: "15.4.2.1, 15.2.4.2",

description: "Array.prototype.toString = Object.prototype.toString",

test: function testcase() {
   //CHECK#1
Array.prototype.toString = Object.prototype.toString;
var x = new Array(); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#1: Array.prototype.toString = Object.prototype.toString; var x = new Array(); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}

//CHECK#2
Array.prototype.toString = Object.prototype.toString;
var x = new Array(0,1,2); 
if (x.toString() !== "[object " + "Array" + "]") {
  $ERROR('#2: Array.prototype.toString = Object.prototype.toString; var x = new Array(0,1,2); x.toString() === "[object " + "Array" + "]". Actual: ' + (x.toString()));
}


 }
});

