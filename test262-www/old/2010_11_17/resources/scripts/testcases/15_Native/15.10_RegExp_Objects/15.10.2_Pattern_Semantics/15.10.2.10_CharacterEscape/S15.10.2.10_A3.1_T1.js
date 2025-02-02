// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.10_A3.1_T1;
* @section: 15.10.2.10;
* @assertion: CharacterEscape :: HexEscapeSequence :: x HexDigit HexDigit;
* @description: Tested string include equal unicode symbols;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.10_A3.1_T1",

path: "15.10.2.10",

description: "Tested string include equal unicode symbols",

test: function testcase() {
   //CHECK#0
var arr = /\x00/.exec("\u0000"); 
if ((arr === null) || (arr[0] !== "\u0000")) {
  $ERROR('#0: var arr = /\\x00/.exec(\\u0000); arr[0] === "\\u0000". Actual. ' + (arr && arr[0]));
}

//CHECK#1
var arr = /\x01/.exec("\u0001"); 
if ((arr === null) || (arr[0] !== "\u0001")) {
  $ERROR('#1: var arr = /\\x01/.exec(\\u0001); arr[0] === "\\u0001". Actual. ' + (arr && arr[0]));
}

//CHECK#2
var arr = /\x0A/.exec("\u000A"); 
if ((arr === null) || (arr[0] !== "\u000A")) {
  $ERROR('#2: var arr = /\\x0A/.exec(\\u000A); arr[0] === "\\u000A". Actual. ' + (arr && arr[0]));
}

//CHECK#3
var arr = /\xFF/.exec("\u00FF"); 
if ((arr === null) || (arr[0] !== "\u00FF")) {
  $ERROR('#3: var arr = /\\xFF/.exec(\\u00FF); arr[0] === "\\u00FF". Actual. ' + (arr && arr[0]));
}

 }
});

