// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.2.10_A1.3_T1;
* @section: 15.10.2.10;
* @assertion: The production CharacterEscape :: v evaluates by returning 
* the character \u000B;
* @description: Use \v in RegExp and \u000B in tested string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.2.10_A1.3_T1",

path: "15.10.2.10",

description: "Use \\v in RegExp and \\u000B in tested string",

test: function testcase() {
   //CHECK#1
var arr = /\v/.exec("\u000B");
if ((arr === null) || (arr[0] !== "\u000B")) {
  $ERROR('#1: var arr = /\\v/.exec("\\u000B"); arr[0] === "\\u000B". Actual. ' + (arr && arr[0]));
}

//CHECK#2
var arr = /\v\v/.exec("a\u000B\u000Bb");
if ((arr === null) || (arr[0] !== "\u000B\u000B")) {
  $ERROR('#2: var arr = /\\v\\v/.exec("a\\u000B\\u000Bb"); arr[0] === "\\u000B\\u000B". Actual. ' + (arr && arr[0]));
}    

 }
});

