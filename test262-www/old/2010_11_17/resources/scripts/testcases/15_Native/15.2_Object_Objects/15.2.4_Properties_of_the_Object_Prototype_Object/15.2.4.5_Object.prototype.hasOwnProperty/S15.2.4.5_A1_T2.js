// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.4.5_A1_T2;
* @section: 15.2.4.5;
* @assertion: When the hasOwnProperty method is called with argument V, the following steps are taken:
* i) Let O be this object
* ii) Call ToString(V)
* iii) If O doesn't have a property with the name given by Result(ii), return false
* iv) Return true;
* @description: Argument of the hasOwnProperty method is a custom boolean property;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.4.5_A1_T2",

path: "15.2.4.5",

description: "Argument of the hasOwnProperty method is a custom boolean property",

test: function testcase() {
   //CHECK#1
if (typeof Object.prototype.hasOwnProperty !== "function") {
  $ERROR('#1: hasOwnProperty method is defined');
}

var obj = {the_property:true};

//CHECK#2
if (typeof obj.hasOwnProperty !== "function") {
  $ERROR('#2: hasOwnProperty method is accessed');
}

//CHECK#3
if (obj.hasOwnProperty("hasOwnProperty")) {
  $ERROR('#3: hasOwnProperty method works properly');
}

//CHECK#4
if (!(obj.hasOwnProperty("the_property"))) {
  $ERROR('#4: hasOwnProperty method works properly');
}
//

 }
});

