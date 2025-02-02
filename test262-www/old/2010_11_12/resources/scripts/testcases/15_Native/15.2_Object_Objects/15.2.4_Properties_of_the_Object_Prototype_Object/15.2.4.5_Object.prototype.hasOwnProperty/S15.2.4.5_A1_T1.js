// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.5_A1_T1;
* @section: 15.2.4.5;
* @assertion: When the hasOwnProperty method is called with argument V, the following steps are taken:
* i) Let O be this object
* ii) Call ToString(V)
* iii) If O doesn't have a property with the name given by Result(ii), return false
* iv) Return true;
* @description: Checking type of the Object.prototype.hasOwnProperty and the returned result;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.5_A1_T1",

path: "15.2.4.5",

description: "Checking type of the Object.prototype.hasOwnProperty and the returned result",

test: function testcase() {
   //CHECK#1
if (typeof Object.prototype.hasOwnProperty !== "function") {
  $ERROR('#1: hasOwnProperty method is defined');
}

//CHECK#2
if (!(Object.prototype.hasOwnProperty("hasOwnProperty"))) {
  $ERROR('#2: hasOwnProperty method works properly');
}
//

 }
});

