// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.1.5_A4.3;
* @section: 11.1.5;
* @assertion: The PropertyName is undefined, ToString(BooleanLiteral), ToString(nullLiteral);
* @description: Creating properties with following names: undefined, 'true', 'null';
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.1.5_A4.3",

path: "11.1.5",

description: "Creating properties with following names: undefined, \'true\', \'null\'",

test: function testcase() {
   //CHECK#1
var object = {undefined : true};
if (object.undefined !== true) {
  $ERROR('#1: var object = {undefined : true}; object.undefined === true');
}

//CHECK#2
var object = {undefined : true};
if (object["undefined"] !== true) {
  $ERROR('#2: var object = {undefined : true}; object["undefined"] === true');
}

//CHECK#3
var object = {"true" : true};
if (object["true"] !== true) {
  $ERROR('#3: var object = {"true" : true}; object["true"] === true');
}

//CHECK#4
var object = {"null" : true};
if (object["null"] !== true) {
  $ERROR('#4: var object = {"null" : true}; object["null"] === true');
}

 }
});

