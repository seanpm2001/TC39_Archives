// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.6_A1_T2;
 * @section: 10.1.6;
 * @assertion: The activation object is initialised with a property with name arguments and attributes {DontDelete};
 * @description: Checking funtion which returns property "arguments";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.6_A1_T2",

path: "10.1.6",

description: "Checking funtion which returns property \"arguments\"",

test: function testcase() {
   var ARG_STRING = "value of the argument property";

function f1() {
  this.constructor.prototype.arguments = ARG_STRING;
  return arguments;
}
  
//CHECK#1
if ((new f1(1,2,3,4,5)).length !== 5)
  $ERROR('#1: (new f1(1,2,3,4,5)).length===5, where f1 returns "arguments" that is set to "'+ ARG_STRING + '"');

//CHECK#2  
if ((new f1(1,2,3,4,5))[3] !== 4)
  $ERROR('#2: (new f1(1,2,3,4,5))[3]===4, where f1 returns "arguments" that is set to "'+ ARG_STRING + '"');

//CHECK#3
var x = new f1(1,2,3,4,5); 
if (delete x[3] !== true)
  $ERROR('#3.1: Function parameters have attribute {DontDelete}');
  
if (x[3] === 4)
  $ERROR('#3.2: Function parameters have attribute {DontDelete}');

 }
});

