// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A3_T6;
 * @section: 12.13;
 * @assertion: 1. Evaluate Expression;
 * @description: Evaluating functions;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A3_T6",

path: "12.13",

description: "Evaluating functions",

test: function testcase() {
   // CHECK#1
var i=0;
function adding1(){
  i++;
  return 1;
}
try{
  throw (adding1());
}
catch(e){
  if (e!==1) $ERROR('#1: Exception ===1. Actual:  Exception ==='+ e);
}

// CHECK#2
var i=0;
function adding2(){
  i++;
  return i;
}
try{
  throw adding2();
}
catch(e){}
if (i!==1) $ERROR('#2: i===1. Actual: i==='+ i);

// CHECK#3
var i=0;
function adding3(){
  i++;
}
try{
  throw adding3();
}
catch(e){}
if (i!==1) $ERROR('#3: i===1. Actual: i==='+i);

// CHECK#4
function adding4(i){
  i++;
  return i;
}
try{
  throw (adding4(1));
}
catch(e){
  if (e!==2) $ERROR('#4: Exception ===2. Actual:  Exception ==='+ e);
}

 }
});

