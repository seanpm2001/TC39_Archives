// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.4_A4_T4;
 * @section: 15.1.3.4;
 * @assertion: URI tests;
 * @description: Test some url;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.4_A4_T4",

path: "15.1.3.4",

description: "Test some url",

test: function testcase() {
   //CHECK#1
if (encodeURIComponent("") !== "") {
  $ERROR('#1: ""');
}

//CHECK#2
if (encodeURIComponent("http://unipro.ru") !== "http%3A%2F%2Funipro.ru") {
  $ERROR('#2: http://unipro.ru');
}

//CHECK#3
if (encodeURIComponent("http://www.google.ru/support/jobs/bin/static.py?page=why-ru.html&sid=liveandwork") !== "http%3A%2F%2Fwww.google.ru%2Fsupport%2Fjobs%2Fbin%2Fstatic.py%3Fpage%3Dwhy-ru.html%26sid%3Dliveandwork") {
  $ERROR('#3: http://www.google.ru/support/jobs/bin/static.py?page=why-ru.html&sid=liveandwork"');
}           

//CHECK#4
if (encodeURIComponent("http://en.wikipedia.org/wiki/UTF-8#Description") !== "http%3A%2F%2Fen.wikipedia.org%2Fwiki%2FUTF-8%23Description") {
  $ERROR('#4: http://en.wikipedia.org/wiki/UTF-8#Description');
}

 }
});

