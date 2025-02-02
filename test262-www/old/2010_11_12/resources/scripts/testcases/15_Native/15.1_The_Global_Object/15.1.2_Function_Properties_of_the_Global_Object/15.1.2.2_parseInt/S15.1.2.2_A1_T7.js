// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A1_T7;
 * @section: 15.1.2.2, 9.8, 8.6.2.6;
 * @assertion: Operator use ToString;
 * @description: If Type(value) is Object, evaluate ToPrimitive(value, String);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A1_T7",

path: "15.1.2.2, 9.8, 8.6.2.6",

description: "If Type(value) is Object, evaluate ToPrimitive(value, String)",

test: function testcase() {
   //CHECK#1
var object = {valueOf: function() {return 1}};
if (isNaN(parseInt(object)) !== true) {
  $ERROR('#1: var object = {valueOf: function() {return 1}}; parseInt(object) === Not-a-Number. Actual: ' + (parseInt(object)));
}

//CHECK#2
var object = {valueOf: function() {return 1}, toString: function() {return 0}};
if (parseInt(object) !== 0) {
  $ERROR('#2: var object = {valueOf: function() {return 1}, toString: function() {return 0}}; parseInt(object) === 0. Actual: ' + (parseInt(object)));
} 

//CHECK#3
var object = {valueOf: function() {return 1}, toString: function() {return {}}};
if (parseInt(object) !== 1) {
  $ERROR('#3: var object = {valueOf: function() {return 1}, toString: function() {return {}}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#4
try {
  var object = {valueOf: function() {throw "error"}, toString: function() {return 1}};
  if (parseInt(object) !== 1) {
    $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
  }
}
catch (e) {
  if (e === "error") {
    $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) not throw "error"');
  } else {
    $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return 1}}; parseInt(object) not throw Error. Actual: ' + (e));
  }
}

//CHECK#5
var object = {toString: function() {return 1}};
if (parseInt(object) !== 1) {
  $ERROR('#5: var object = {toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#6
var object = {valueOf: function() {return {}}, toString: function() {return 1}}
if (parseInt(object) !== 1) {
  $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return 1}}; parseInt(object) === 1. Actual: ' + (parseInt(object)));
}

//CHECK#7
try {
  var object = {valueOf: function() {return 1}, toString: function() {throw "error"}};
  parseInt(object);
  $ERROR('#7.1: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; parseInt(object) throw "error". Actual: ' + (parseInt(object)));
}  
catch (e) {
  if (e !== "error") {
    $ERROR('#7.2: var object = {valueOf: function() {return 1}, toString: function() {throw "error"}}; parseInt(object) throw "error". Actual: ' + (e));
  } 
}

//CHECK#8
try {
  var object = {valueOf: function() {return {}}, toString: function() {return {}}};
  parseInt(object);
  $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt(object) throw TypeError. Actual: ' + (parseInt(object)));
}  
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt(object) throw TypeError. Actual: ' + (e));
  } 
}

 }
});

