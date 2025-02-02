// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A4_T4;
 * @section: 15.1.3.1;
 * @assertion: URI tests;
 * @description: Test some url;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A4_T4",

path: "15.1.3.1",

description: "Test some url",

test: function testcase() {
   //CHECK#1
if (decodeURI("") !== "") {
  $ERROR('#1: ""');
}

//CHECK#2
if (decodeURI("http:%2f%2Funipro.ru") !== "http:%2f%2Funipro.ru") {
  $ERROR('#2: http:%2f%2Funipro.ru');
}

//CHECK#3
if (decodeURI("http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork") !== "http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork") {
  $ERROR('#3: http://www.google.ru/support/jobs/bin/static.py%3Fpage%3dwhy-ru.html%26sid%3Dliveandwork"');
}           

//CHECK%234
if (decodeURI("http://en.wikipedia.org/wiki/UTF-8%23Description") !== "http://en.wikipedia.org/wiki/UTF-8%23Description") {
  $ERROR('%234: http://en.wikipedia.org/wiki/UTF-8%23Description');
}

 }
});

