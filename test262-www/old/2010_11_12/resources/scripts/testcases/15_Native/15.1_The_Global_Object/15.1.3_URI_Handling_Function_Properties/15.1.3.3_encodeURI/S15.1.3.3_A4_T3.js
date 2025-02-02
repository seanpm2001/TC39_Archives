// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.3_A4_T3;
 * @section: 15.1.3.3;
 * @assertion: URI tests;
 * @description: Checking URL with Line Terminator;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.3_A4_T3",

path: "15.1.3.3",

description: "Checking URL with Line Terminator",

test: function testcase() {
   //CHECK#1
if ((encodeURI("http://unipro.ru/\nabout") !== "http://unipro.ru/%0Aabout") && encodeURI("http://unipro.ru/\nabout") !== "http://unipro.ru/%0aabout") {
  $ERROR('#1: http://unipro.ru/\\nabout');
}

//CHECK#2
if ((encodeURI("http://unipro.ru/\vabout") !== "http://unipro.ru/%0Babout") && encodeURI("http://unipro.ru/\vabout") !== "http://unipro.ru/%0babout") {
  $ERROR('#2: http://unipro.ru/\\vabout');
}

//CHECK#3
if ((encodeURI("http://unipro.ru/\fabout") !== "http://unipro.ru/%0Cabout") && encodeURI("http://unipro.ru/\fabout") !== "http://unipro.ru/%0cabout") {
  $ERROR('#3: http://unipro.ru/\\fabout');
}

//CHECK#4
if ((encodeURI("http://unipro.ru/\rabout") !== "http://unipro.ru/%0Dabout") && encodeURI("http://unipro.ru/\rabout") !== "http://unipro.ru/%0dabout") {
  $ERROR('#4: http://unipro.ru/\\rabout');
}

 }
});

