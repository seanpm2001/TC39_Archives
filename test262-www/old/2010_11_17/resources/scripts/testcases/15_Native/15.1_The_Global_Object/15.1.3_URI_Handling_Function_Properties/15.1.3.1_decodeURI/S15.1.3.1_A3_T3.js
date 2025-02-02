// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A3_T3;
 * @section: 15.1.3.1;
 * @assertion: Let reservedURISet be a string containing one instance of each character valid 
 * in uriReserved plus "#";
 * @description: Complex test;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A3_T3",

path: "15.1.3.1",

description: "Complex test",

test: function testcase() {
   //CHECK#1
if (decodeURI("%3B%2F%3F%3A%40%26%3D%2B%24%2C%23") !== "%3B%2F%3F%3A%40%26%3D%2B%24%2C%23") {
  $ERROR('#1: decodeURI("%3B%2F%3F%3A%40%26%3D%2B%24%2C%23") equal "%3B%2F%3F%3A%40%26%3D%2B%24%2C%23", not ";/?:@&=+$,#"');
}

//CHECK#2
if (decodeURI("%3b%2f%3f%3a%40%26%3d%2b%24%2c%23") !== "%3b%2f%3f%3a%40%26%3d%2b%24%2c%23") {
  $ERROR('#2: decodeURI("%3b%2f%3f%3a%40%26%3d%2b%24%2c%23") equal "%3b%2f%3f%3a%40%26%3d%2b%24%2c%23", not ";/?:@&=+$,#" or "%3B%2F%3F%3A%40%26%3D%2B%24%2C%23"');
}

 }
});

