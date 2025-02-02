// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A3.7_T2;
 * @section: 12.10;
 * @assertion: No matter how control leaves the embedded 'Statement', 
 * the scope chain is always restored to its former state;
 * @description: Declaring and calling a function within "with" statement, leading to normal completion by "return";
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A3.7_T2",

path: "12.10",

description: "Declaring and calling a function within \"with\" statement, leading to normal completion by \"return\"",

test: function testcase() {
   this.p1 = 1;

var result = "result";

var myObj = {
    p1: 'a', 
    value: 'myObj_value',
    valueOf : function(){return 'obj_valueOf';}
}

with(myObj){
    result=(function(){
        p1 = 'x1';
        return value;
    })();
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
if(result !== "myObj_value"){
  $ERROR('#2: result === "myObj_value". Actual:  result ==='+ result  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.p1 !== "x1"){
  $ERROR('#3: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////



 }
});

