// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.1.1_A4.2;
 * @section: 11.1.1;
 * @assertion: Being in anonymous code, "this" and eval("this"), called as a constructor, return the object;
 * @description: Creating function by using new Function() constructor. It has the property, which returns "this";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.1_A4.2",

path: "11.1.1",

description: "Creating function by using new Function() constructor. It has the property, which returns \"this\"",

test: function testcase() {
   //CHECK#1
var MyFunction = new Function("this.THIS = this");
var MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {
  $ERROR('#1: var MyFunction = new Function("this.THIS = this"); var MyObject = new MyFunction(); MyObject.THIS.toString() === "[object Object]". Actual: ' + (MyObject.THIS.toString()));  
}

//CHECK#2
var MyFunction = new Function("this.THIS = eval(\'this\')");
var MyObject = new MyFunction();
if (MyObject.THIS.toString() !== "[object Object]") {
  $ERROR('#2: var MyFunction = new Function("this.THIS = eval(\'this\')"); var MyObject = new MyFunction(); MyObject.THIS.toString() === "[object Object]". Actual: ' + (MyObject.THIS.toString()));  
}


 }
});

