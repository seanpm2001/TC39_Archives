// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.5_A3;
* @section: 11.1.5;
* @assertion: Evaluate the production ObjectLiteral: { PropertyNameAndValueList };
* @description: Creating the object defined with "var object = {0 : 1, "1" : "x", o : {}}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.5_A3",

path: "11.1.5",

description: "Creating the object defined with \"var object = {0 : 1, \"1\" : \"x\", o : {}}\"",

test: function testcase() {
   var object = {0 : 1, "1" : "x", o : {}};

//CHECK#1
if (object[0] !== 1) {
  $ERROR('#1: var object = {0 : 1; "1" : "x"; o : {}}; object[0] === 1. Actual: ' + (object[0]));
}

//CHECK#2
if (object["1"] !== "x") {
  $ERROR('#2: var object = {0 : 1; "1" : "x"; o : {}}; object["1"] === "x". Actual: ' + (object["1"]));
}

//CHECK#3
if (typeof object.o !== "object") {
  $ERROR('#1: var object = {0 : 1; "1" : "x"; o : {}}; typeof object.o === "object". Actual: ' + (typeof object.o));
}

 }
});

