// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A4_T3;
 * @section: 15.1.3.1;
 * @assertion: URI tests;
 * @description: Checking URL with Line Terminator;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A4_T3",

path: "15.1.3.1",

description: "Checking URL with Line Terminator",

test: function testcase() {
   //CHECK#1
if (decodeURI("http://unipro.ru/%0Aabout") !== "http://unipro.ru/\nabout") {
  $ERROR('#1: http://unipro.ru/%A0about');
}

//CHECK#2
if (decodeURI("http://unipro.ru/%0Babout") !== "http://unipro.ru/\vabout") {
  $ERROR('#2: http://unipro.ru/%0Babout');
}

//CHECK#3
if (decodeURI("http://unipro.ru/%0Cabout") !== "http://unipro.ru/\fabout") {
  $ERROR('#3: http://unipro.ru/%0Cabout');
}

//CHECK#4
if (decodeURI("http://unipro.ru/%0Dabout") !== "http://unipro.ru/\rabout") {
  $ERROR('#4: http://unipro.ru/%0Dabout');
}

 }
});

