// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.2.1_A3_T5;
* @section: 11.2.1, 9.9, 11.2.3, 15.6.4.2;
* @assertion: MemberExpression calls ToObject(MemberExpression) and ToString(Expression). CallExpression calls ToObject(CallExpression) and ToString(Expression) 
* @description: Checking "null" case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.2.1_A3_T5",

path: "11.2.1, 9.9, 11.2.3, 15.6.4.2",

description: "Checking \"null\" case",

test: function testcase() {
   //CHECK#1
try {
  null.toString();
  $ERROR('#1.1: null.toString() throw TypeError. Actual: ' + (null.toString()));  
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#1.2: null.toString() throw TypeError. Actual: ' + (e));  
  }
}

//CHECK#2
try {  
  null["toString"]();
  $ERROR('#2.1: null["toString"]() throw TypeError. Actual: ' + (null["toString"]())); 
}
catch (e) {
  if ((e instanceof TypeError) !== true) {
    $ERROR('#2.2: null["toString"]() throw TypeError. Actual: ' + (e)); 
  }
}

 }
});

