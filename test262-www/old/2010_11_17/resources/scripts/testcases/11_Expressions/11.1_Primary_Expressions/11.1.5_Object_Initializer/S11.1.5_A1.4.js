// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.5_A1.4;
* @section: 11.1.5;
* @assertion: Evaluate the production ObjectLiteral: { Identifier : AssignmentExpression};
* @description: Checking various properteis and contents of the object defined with "var object = {prop : true}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.5_A1.4",

path: "11.1.5",

description: "Checking various properteis and contents of the object defined with \"var object = {prop : true}\"",

test: function testcase() {
   var object = {prop : true};

//CHECK#1
if (typeof object !== "object") {
  $ERROR('#1: var object = {prop : true}; typeof object === "object". Actual: ' + (typeof object));
}

//CHECK#2
if (object instanceof Object !== true) {
  $ERROR('#2: var object = {prop : true}; object instanceof Object === true');
}

//CHECK#3
if (object.toString !== Object.prototype.toString) {
  $ERROR('#3: var object = {prop : true}; object.toString === Object.prototype.toString. Actual: ' + (object.toString));
}

//CHECK#4
if (object["prop"] !== true) {
  $ERROR('#4: var object = {prop : true}; object["prop"] === true');
}

//CHECK#5
if (object.prop !== true) {
  $ERROR('#5: var object = {prop : true}; object.prop === true');
}

 }
});

