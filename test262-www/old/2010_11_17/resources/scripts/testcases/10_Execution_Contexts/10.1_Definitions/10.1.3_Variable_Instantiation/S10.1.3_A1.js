// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.3_A1;
 * @section: 10.1.3;
 * @assertion: If the caller supplies fewer parameter values than there are 
 * formal parameters, the extra formal parameters have value undefined;
 * @description: Calling function excluding a few parameters;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.3_A1",

path: "10.1.3",

description: "Calling function excluding a few parameters",

test: function testcase() {
   //CHECK#1
function f1(a, b){
  return (b === undefined);
}
if(!(f1(1, 2) === false)){
  $ERROR('#1: f1(1, 2) === false');
} else if(!(f1(1) === true)){
  $ERROR('#1: f1(1) === true');
}

//CHECK#2
function f2(a, b, c){
  return (b === undefined) && (c === undefined);
}
if(!(f2(1) === true)){
  $ERROR('#2: f2(1, 2) === true');
}

 }
});

