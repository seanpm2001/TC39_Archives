// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.2_A4_T5;
* @section: 11.2.2;
* @assertion: If NewExpression or MemberExpression does not implement internal [[Construct]] method, throw TypeError;
* @description: Checking Math object case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.2_A4_T5",

path: "11.2.2",

description: "Checking Math object case",

test: function testcase() {
   //CHECK#1
try {
  new Math;
  $ERROR('#1: new Math throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1: new Math throw TypeError');	
  }
}

//CHECK#2
try {
  new new Math();
  $ERROR('#2: new new Math() throw TypeError');	
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2: new new Math() throw TypeError');	
  }
}

//CHECK#3
try {
  var x = new Math();
  new x();
  $ERROR('#3: var x = new Math(); new x() throw TypeError'); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#3: var x = new Math(); new x() throw TypeError'); 
  }
}


 }
});

