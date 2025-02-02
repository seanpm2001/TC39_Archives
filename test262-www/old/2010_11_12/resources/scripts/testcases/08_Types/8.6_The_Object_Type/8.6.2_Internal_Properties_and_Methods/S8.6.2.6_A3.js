// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.6_A3;
* @section: 8.6.2.6, 8.6.2;
* @assertion: We overload valueOf method so it return non Primitive value 
* Thus [[DefaultValue]] must return Object.toString() value;
* @description: Try to overload toString method, that returned Primitive, and valueOf method, that returned new Object;
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.6_A3",

path: "8.6.2.6, 8.6.2",

description: "Try to overload toString method, that returned Primitive, and valueOf method, that returned new Object",

test: function testcase() {
   try
{
  var __obj = {toString: function() {return "1"}, valueOf: function() {return new Object();}}
  if (Number(__obj) !== 1) {
    $ERROR('#1.1: var __obj = {toNumber: function() {return "1"}, valueOf: function() {return new Object();}}; Number(__obj) === 1. Actual: ' + (Number(__obj)));
  }
}
catch(e)
{
  $ERROR('#1.2: var __obj = {toNumber: function() {return "1"}, valueOf: function() {return new Object();}}; Number(__obj) === 1. Actual: ' + (e));
}  



  


 }
});

