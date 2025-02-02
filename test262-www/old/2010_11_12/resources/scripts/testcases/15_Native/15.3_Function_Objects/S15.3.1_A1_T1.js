// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.1_A1_T1;
* @section: 15.3.1;
* @assertion: The function call Function(…) is equivalent to the object creation expression 
* new Function(…) with the same arguments.
* @description: Create simple functions and check returned values;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.1_A1_T1",

path: "15.3.1",

description: "Create simple functions and check returned values",

test: function testcase() {
   var f = Function("return arguments[0];");

//CHECK#1
if (!(f instanceof Function)){
  $ERROR('#1: f instanceof Function');
}

//CHECK#2
if (f(1) !== 1) {
  $ERROR('#2: f(1) !== 1');
}

var g = new Function("return arguments[0];");


//CHECK#3
if (!(g instanceof Function)) {
  $ERROR('#3: g instanceof Function');
}

//CHECK#4
if (g("A") !== "A") {
  $ERROR('#4: g("A") !== "A"');
}

//CHECK#5
if (g("A") !== f("A")) {
  $ERROR('#5: g("A") !== f("A")');
}

 }
});

