// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.4_A1;
 * @section: 15.7.4;
 * @assertion: The Number prototype object is itself a Number object 
 * (its [[Class]] is "Number") whose value is +0;
 * @description: Checking type and value of Number.prototype property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.4_A1",

path: "15.7.4",

description: "Checking type and value of Number.prototype property",

test: function testcase() {
   //CHECK#1
if (typeof Number.prototype !== "object") {
  $ERROR('#1: typeof Number.prototype === "object"');
}

//CHECK#2
if (Number.prototype != 0) {
  $ERROR('#2: Number.prototype == +0');
} else if( 1/Number.prototype != Number.POSITIVE_INFINITY){
  $ERROR('#2: Number.prototype == +0');
}

delete Number.prototype.toString;

if (Number.prototype.toString() !== "[object Number]") {
  $ERROR('#3: The [[Class]] property of the Number prototype object is set to "Number"');
}

 }
});

