// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.1.3.2_A5.7;
* @section: 15.1.3.2, 11.2.2;
* @assertion: The decodeURIComponent property can't be used as constructor;
* @description: If property does not implement the internal [[Construct]] method, throw a TypeError exception;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.2_A5.7",

path: "15.1.3.2, 11.2.2",

description: "If property does not implement the internal [[Construct]] method, throw a TypeError exception",

test: function testcase() {
   //CHECK#1

try {
  new decodeURIComponent();
  $ERROR('#1.1: new decodeURIComponent() throw TypeError. Actual: ' + (new decodeURIComponent()));
} catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: new decodeURIComponent() throw TypeError. Actual: ' + (e));
  }
}

 }
});

