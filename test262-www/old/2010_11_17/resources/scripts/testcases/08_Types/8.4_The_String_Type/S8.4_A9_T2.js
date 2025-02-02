// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.4_A9_T2;
 * @section: 8.4, 7.8.4;
 * @assertion: Assignment to string literals calls String constructor;
 * @description: Compare empty string variable, object String('') and object String();
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.4_A9_T2",

path: "8.4, 7.8.4",

description: "Compare empty string variable, object String(\'\') and object String()",

test: function testcase() {
   var str="";
var strObj=new String("");
var strObj_=new String();

////////////////////////////////////////////////////////////
// CHECK#1
if (str.constructor !== strObj.constructor){
  $ERROR('#1: "".constructor === new String("").constructor');
}
//
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// CHECK#2
if (str.constructor !== strObj_.constructor){
  $ERROR('#2: "".constructor === new String().constructor');
}
//
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// CHECK#3
if (str != strObj){
  $ERROR('#3: values of str=""; and strObj=new String(""); are equal');
}
//
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// CHECK#4
if (str === strObj){
  $ERROR('#4: objects of str=""; and strObj=new String(""); are different');
}
//
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// CHECK#5
if (str != strObj_){
  $ERROR('#5: values of str=""; and strObj=new String(); are equal');
}
//
/////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////
// CHECK#6
if (str === strObj_){
  $ERROR('#6: objects of str=""; and strObj=new String(); are different');
}
//
/////////////////////////////////////////////////////////////

 }
});

