// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A3.1_T7;
 * @section: 15.1.2.2, 9.3, 8.6.2.6;
 * @assertion: Operator use ToNumber;
 * @description: If Type(value) is Object, evaluate ToPrimitive(value, Number);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A3.1_T7",

path: "15.1.2.2, 9.3, 8.6.2.6",

description: "If Type(value) is Object, evaluate ToPrimitive(value, Number)",

test: function testcase() {
   //CHECK#1
var object = {valueOf: function() {return 2}};
if (parseInt("11", object) !== parseInt("11", 2)) {
  $ERROR('#1: var object = {valueOf: function() {return 2}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
}

//CHECK#2
var object = {valueOf: function() {return 2}, toString: function() {return 1}};
if (parseInt("11", object) !== parseInt("11", 2)) {
  $ERROR('#2: var object = {valueOf: function() {return 2}, toString: function() {return 1}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
} 

//CHECK#3
var object = {valueOf: function() {return 2}, toString: function() {return {}}};
if (parseInt("11", object) !== parseInt("11", 2)) {
  $ERROR('#3: var object = {valueOf: function() {return 2}, toString: function() {return {}}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
}

//CHECK#4
try {
  var object = {valueOf: function() {return 2}, toString: function() {throw "error"}};
  if (parseInt("11", object) !== parseInt("11", 2)) {
    $ERROR('#4.1: var object = {valueOf: function() {return 2}, toString: function() {throw "error"}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
  }
}
catch (e) {
  if (e === "error") {
    $ERROR('#4.2: var object = {valueOf: function() {return 2}, toString: function() {throw "error"}}; parseInt("11", object) not throw "error"');
  } else {
    $ERROR('#4.3: var object = {valueOf: function() {return 2}, toString: function() {throw "error"}}; parseInt("11", object) not throw Error. Actual: ' + (e));
  }
}

//CHECK#5
var object = {toString: function() {return 2}};
if (parseInt("11", object) !== parseInt("11", 2)) {
  $ERROR('#5: var object = {toString: function() {return 2}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
}

//CHECK#6
var object = {valueOf: function() {return {}}, toString: function() {return 2}}
if (parseInt("11", object) !== parseInt("11", 2)) {
  $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return 2}}; parseInt("11", object) === parseInt("11", 2). Actual: ' + (parseInt("11", object)));
}

//CHECK#7
try {
  var object = {valueOf: function() {throw "error"}, toString: function() {return 2}};
  parseInt("11", object);
  $ERROR('#7.1: var object = {valueOf: function() {throw "error"}, toString: function() {return 2}}; parseInt("11", object) throw "error". Actual: ' + (parseInt("11", object)));
}  
catch (e) {
  if (e !== "error") {
    $ERROR('#7.2: var object = {valueOf: function() {throw "error"}, toString: function() {return 2}}; parseInt("11", object) throw "error". Actual: ' + (e));
  } 
}

//CHECK#8
try {
  var object = {valueOf: function() {return {}}, toString: function() {return {}}};
  parseInt("11", object);
  $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt("11", object) throw TypeError. Actual: ' + (parseInt("11", object)));
}  
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; parseInt("11", object) throw TypeError. Actual: ' + (e));
  } 
}

 }
});

