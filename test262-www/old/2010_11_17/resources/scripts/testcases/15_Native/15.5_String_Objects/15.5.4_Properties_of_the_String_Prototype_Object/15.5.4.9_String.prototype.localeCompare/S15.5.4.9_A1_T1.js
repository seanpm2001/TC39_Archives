// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.9_A1_T1;
* @section: 15.5.4.9;
* @assertion: String.prototype.localeCompare(that);
* @description: This string is symbol and arguments are symbols;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.9_A1_T1",

path: "15.5.4.9",

description: "This string is symbol and arguments are symbols",

test: function testcase() {
   var str1 = new String("h"); 
//CHECK#1
var str2 = new String ("\x68");
if  (str1.localeCompare(str2)!==0){
  $ERROR('#1: var str1 = new String("h"); var str2 = new String ("\\x68"); str1.localeCompare(str2)===0. Actual: '+str1.localeCompare(str2));
}

//CHECK#2
var str2 = new String ("\u0068");
if  (str1.localeCompare(str2)!==0){
  $ERROR('#2: var str1 = new String("h"); var str2 = new String ("\\u0068"); str1.localeCompare(str2)===0. Actual: '+str1.localeCompare(str2));
}

//CHECK#3
var str2 = new String ("h");
if  (str1.localeCompare(str2)!==0){
  $ERROR('#3: var str1 = new String("h"); var str2 = new String ("h"); str1.localeCompare(str2)===0. Actual: '+str1.localeCompare(str2));
}

 }
});

