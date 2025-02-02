// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.4_A1.1;
* @section: 11.1.4;
* @assertion: Evaluate the production ArrayLiteral: [ ];
* @description: Checking various properties of the array defined with expression "var array = []"; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.4_A1.1",

path: "11.1.4",

description: "Checking various properties of the array defined with expression \"var array = []\"",

test: function testcase() {
   var array = [];

//CHECK#1
if (typeof array !== "object") {
  $ERROR('#1: var array = []; typeof array === "object". Actual: ' + (typeof array));
}

//CHECK#2
if (array instanceof Array !== true) {
  $ERROR('#2: var array = []; array instanceof Array === true');
}

//CHECK#3
if (array.toString !== Array.prototype.toString) {
  $ERROR('#3: var array = []; array.toString === Array.prototype.toString. Actual: ' + (array.toString));
}

//CHECK#4
if (array.length !== 0) {
  $ERROR('#4: var array = []; array.length === 0. Actual: ' + (array.length));
}

 }
});

