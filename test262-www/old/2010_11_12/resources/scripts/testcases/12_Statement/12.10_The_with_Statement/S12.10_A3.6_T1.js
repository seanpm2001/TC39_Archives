// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A3.6_T1;
 * @section: 12.10;
 * @assertion: No matter how control leaves the embedded 'Statement', 
 * the scope chain is always restored to its former state;
 * @description: Using "with" statement within another "with" statement, leading to normal completion;
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A3.6_T1",

path: "12.10",

description: "Using \"with\" statement within another \"with\" statement, leading to normal completion",

test: function testcase() {
   this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

var theirObj = {
    p1: true, 
    value: 'theirObj_value',
    valueOf : function(){return 'thr_valueOf';}
}

with(myObj){
    with(theirObj){
        p1 = 'x1';
  }
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(p1 !== 1){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== "a"){
  $ERROR('#2: myObj.p1 === "a". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(theirObj.p1 !== "x1"){
  $ERROR('#3: theirObj.p1 === "x1". Actual:  theirObj.p1 ==='+ theirObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

