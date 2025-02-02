// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A18_T6;
 * @section: 12.14, 12.13;
 * @assertion: Catching objects with try/catch/finally statement;
 * @description: Catching Object; 
 */

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A18_T6",

path: "12.14, 12.13",

description: "Catching Object",

test: function testcase() {
   var myObj = {p1: 'a', 
             p2: 'b', 
             p3: 'c',
             value: 'myObj_value',
             valueOf : function(){return 'obj_valueOf';},
             parseInt : function(){return 'obj_parseInt';},
             NaN : 'obj_NaN',
             Infinity : 'obj_Infinity',
             eval     : function(){return 'obj_eval';},
             parseFloat : function(){return 'obj_parseFloat';},
             isNaN      : function(){return 'obj_isNaN';},
             isFinite   : function(){return 'obj_isFinite';},
             i:7,
}

try{
  throw myObj;
}
catch(e){	
// CHECK#1
  if (e.p1!=="a") $ERROR('#1: e.p1==="a". Actual:  e.p1==='+ e.p1 );
// CHECK#2
  if (e.value!=='myObj_value') $ERROR('#2: e.value===\'myObj_value\'. Actual:  e.value==='+ e.value );
// CHECK#3
  if (e.eval()!=='obj_eval') $ERROR('#3: e.eval()===\'obj_eval\'. Actual:  e.eval()==='+ e.eval() );
}

// CHECK#4
myObj.i=6;
try{
  throw myObj;
}
catch(e){}
if (myObj.i!==6) $ERROR('#4: Handling of catch must be correct');

// CHECK#5
myObj.i=6;
try{
  throw myObj;
}
catch(e){
  e.i=10;
}
if (myObj.i!==10) $ERROR('#5: Handling of catch must be correct');

 }
});

