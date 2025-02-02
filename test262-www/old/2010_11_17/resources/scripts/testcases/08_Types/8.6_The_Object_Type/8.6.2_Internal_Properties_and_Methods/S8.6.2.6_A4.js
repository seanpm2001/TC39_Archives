// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.6_A4;
* @section: 8.6.2.6, 8.6.2;
* @assertion: We overload valueOf method so it return non Primitive value and toString method so it return non Primitive value too
* Thus [[DefaultValue]] must generate TypeError error;
* @description: Try to overload toString and valueOf methods, they returned new Objects;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.6_A4",

path: "8.6.2.6, 8.6.2",

description: "Try to overload toString and valueOf methods, they returned new Objects",

test: function testcase() {
   try
{
  var __obj = {valueOf:function(){return new Object;},toString: function() {return new Object();}}  
  Number(__obj);
  $ERROR('#1.1: var __obj = {valueOf:function(){return new Object;},toNumber: function() {return new Object();}}; Number(__obj) throw TypeError. Actual: ' + (Number(__obj)));
}
catch(e)
{
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: var __obj = {valueOf:function(){return new Object;},toNumber: function() {return new Object();}}; Number(__obj) throw TypeError. Actual: ' + (e));
  }  
}  

 }
});

