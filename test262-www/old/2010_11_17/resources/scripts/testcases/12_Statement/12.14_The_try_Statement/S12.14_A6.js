// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A6;
 * @section: 12.14;
 * @assertion:  The production TryStatement: "try Block Catch Finally";
 * @description: Executing sequence of "try" statements, using counters with varying values within;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A6",

path: "12.14",

description: "Executing sequence of \"try\" statements, using counters with varying values within",

test: function testcase() {
   // CHECK#1
var c1=0;
try {
  c1+=1;
  S12_14_A6_y;
  $ERROR('#1.1: "y" lead to throwing exception');
}
catch (e) {
  c1*=2;
}
if (c1!==2){
  $ERROR('#1.2: Sequence evaluation of commands try/catch is 1. try, 2. catch');	
}

// CHECK#2
var c2=0;
try{
  c2+=1;
}
finally{
  c2*=2;
}
if (c2!==2){
  $ERROR('#2: Sequence evaluation of commands try/finally is 1. try, 2. finally');
}

// CHECK#3
var c3=0;
try{
  c3=1;
  S12_14_A6_z;
}
catch(err){
  c3*=2;
}
finally{
  c3+=1;
}
if (c3!==3){
  $ERROR('#3: Sequence evaluation of commands try/catch/finally(with exception) is 1. try, 2. catch, 3. finally');
}	

// CHECK#4
var c4=0;
try{
  c4=1;
}
catch(err){
  c4*=3;
}
finally{
  c4+=1;
}
if (c4!==2){
  $ERROR('#4: Sequence evaluation of commands try/catch/finally(without exception) is 1. try, 2. finally');
}	

 }
});

