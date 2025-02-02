// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.4_A4.3_T7;
 * @section: 7.8.4;
 * @assertion: NonEscapeSequence is not EscapeCharacter;
 * @description: EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.4_A4.3_T7",

path: "7.8.4",

description: "EscapeCharacter :: SingleEscapeCharacter :: one of b f n r t v",

test: function testcase() {
   //CHECK#bfnrtv
if ("b" === "\b") {
  $ERROR('#b')
}

if ("f" === "\f") {
  $ERROR('#f')
}

if ("n" === "\n") {
  $ERROR('#n')
}

if ("r" === "\r") {
  $ERROR('#r')
}

if ("t" === "\t") {
  $ERROR('#t')
}

if ("v" === "\v") {
  $ERROR('#v')
}


 }
});

