// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A6_T1;
 * @section: 15.1.3.1, 9.8, 8.6.2.6;
 * @assertion: Operator use ToString;
 * @description: If Type(value) is Object, evaluate ToPrimitive(value, String);  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A6_T1",

path: "15.1.3.1, 9.8, 8.6.2.6",

description: "If Type(value) is Object, evaluate ToPrimitive(value, String)",

test: function testcase() {
   //CHECK#1
var object = {valueOf: function() {return "%5E"}};
if (decodeURI(object) !== "[object Object]") {
  $ERROR('#1: var object = {valueOf: function() {return "%5E"}}; decodeURI(object) === [object Object]. Actual: ' + (decodeURI(object)));
}

//CHECK#2
var object = {valueOf: function() {return ""}, toString: function() {return "%5E"}};
if (decodeURI(object) !== "^") {
  $ERROR('#2: var object = {valueOf: function() {return ""}, toString: function() {return "%5E"}}; decodeURI(object) === "^". Actual: ' + (decodeURI(object)));
} 

//CHECK#3
var object = {valueOf: function() {return "%5E"}, toString: function() {return {}}};
if (decodeURI(object) !== "^") {
  $ERROR('#3: var object = {valueOf: function() {return "%5E"}, toString: function() {return {}}}; decodeURI(object) === "^". Actual: ' + (decodeURI(object)));
}

//CHECK#4
try {
  var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}};
  if (decodeURI(object) !== "^") {
    $ERROR('#4.1: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURI(object) === "^". Actual: ' + (decodeURI(object)));
  }
}
catch (e) {
  if (e === "error") {
    $ERROR('#4.2: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURI(object) not throw "error"');
  } else {
    $ERROR('#4.3: var object = {valueOf: function() {throw "error"}, toString: function() {return "%5E"}}; decodeURI(object) not throw Error. Actual: ' + (e));
  }
}

//CHECK#5
var object = {toString: function() {return "%5E"}};
if (decodeURI(object) !== "^") {
  $ERROR('#5: var object = {toString: function() {return "%5E"}}; decodeURI(object) === "^". Actual: ' + (decodeURI(object)));
}

//CHECK#6
var object = {valueOf: function() {return {}}, toString: function() {return "%5E"}}
if (decodeURI(object) !== "^") {
  $ERROR('#6: var object = {valueOf: function() {return {}}, toString: function() {return "%5E"}}; decodeURI(object) === "^". Actual: ' + (decodeURI(object)));
}

//CHECK#7
try {
  var object = {valueOf: function() {return "%5E"}, toString: function() {throw "error"}};
  decodeURI(object);
  $ERROR('#7.1: var object = {valueOf: function() {return "%5E"}, toString: function() {throw "error"}}; decodeURI(object) throw "error". Actual: ' + (decodeURI(object)));
}  
catch (e) {
  if (e !== "error") {
    $ERROR('#7.2: var object = {valueOf: function() {return "%5E"}, toString: function() {throw "error"}}; decodeURI(object) throw "error". Actual: ' + (e));
  } 
}

//CHECK#8
try {
  var object = {valueOf: function() {return {}}, toString: function() {return {}}};
  decodeURI(object);
  $ERROR('#8.1: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; decodeURI(object) throw TypeError. Actual: ' + (decodeURI(object)));
}  
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#8.2: var object = {valueOf: function() {return {}}, toString: function() {return {}}}; decodeURI(object) throw TypeError. Actual: ' + (e));
  } 
}

 }
});

