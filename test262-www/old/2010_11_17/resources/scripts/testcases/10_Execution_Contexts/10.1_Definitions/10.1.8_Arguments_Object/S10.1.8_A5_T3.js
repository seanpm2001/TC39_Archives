// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.8_A5_T3;
 * @section: 10.1.8;
 * @assertion: A property is created with name length with property 
 * attributes { DontEnum } and no others;
 * @description: Checking if deleting arguments.length property fails;  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.8_A5_T3",

path: "10.1.8",

description: "Checking if deleting arguments.length property fails",

test: function testcase() {
   //CHECK#1
function f1(){
  return (delete arguments.length); 
}

try{
  if(!f1()){
    $ERROR("#1: A property length have attribute { DontDelete }");
  }
}
catch(e){
  $ERROR("#1: arguments object don't exists");
}

//CHECK#2
var f2 = function(){
  return (delete arguments.length); 
}

try{
  if(!f2()){
    $ERROR("#2: A property length have attribute { DontDelete }");
  }
}
catch(e){
  $ERROR("#2: arguments object don't exists");
}

 }
});

