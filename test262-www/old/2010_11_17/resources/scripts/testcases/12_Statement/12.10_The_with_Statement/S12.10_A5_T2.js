// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A5_T2;
 * @section: 12.10;
 * @assertion: Deleting property using "eval" statement containing "with" statement;
 * @description: Deleting number property;
 * @strict_mode_negative
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A5_T2",

path: "12.10",

description: "Deleting number property",

test: function testcase() {
   this.p1 = 'a';
var myObj = {
  p1: 1,
  del:false 
}
eval("with(myObj){del = delete p1}");

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(myObj.p1 === 1){
  $ERROR('#1: myObj.p1 !== 1');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(myObj.p1 !== undefined){
  $ERROR('#2: myObj.p1 === undefined . Actual:  myObj.p1 ==='+ myObj.p1  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(myObj.del !== true){
  $ERROR('#3: myObj.del === true. Actual: myObj.del ===. Actual:  myObj.del ==='+ myObj.del  +myObj.del);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(myObj.p1 === 'a'){
  $ERROR('#4: myObj.p1 !== \'a\'');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

