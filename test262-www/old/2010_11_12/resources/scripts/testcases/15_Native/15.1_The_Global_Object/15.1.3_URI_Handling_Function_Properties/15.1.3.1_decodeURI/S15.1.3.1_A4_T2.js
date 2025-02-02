// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.1_A4_T2;
 * @section: 15.1.3.1;
 * @assertion: URI tests;
 * @description: Checking RUSSIAN ALPHABET;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.1_A4_T2",

path: "15.1.3.1",

description: "Checking RUSSIAN ALPHABET",

test: function testcase() {
   //CHECK#1
if (decodeURI("http://ru.wikipedia.org/wiki/%d0%ae%D0%bd%D0%B8%D0%BA%D0%BE%D0%B4") !== "http://ru.wikipedia.org/wiki/Юникод") {
  $ERROR('#1: http://ru.wikipedia.org/wiki/Юникод');
}

//CHECK#2
if (decodeURI("http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4#%D0%A1%D1%81%D1%8B%D0%BB%D0%BA%D0%B8") !== "http://ru.wikipedia.org/wiki/Юникод#Ссылки") {
  $ERROR('#2: http://ru.wikipedia.org/wiki/Юникод#Ссылки');
}

//CHECK#3
if (decodeURI("http://ru.wikipedia.org/wiki/%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%23%D0%92%D0%B5%D1%80%D1%81%D0%B8%D0%B8%20%D0%AE%D0%BD%D0%B8%D0%BA%D0%BE%D0%B4%D0%B0") !== "http://ru.wikipedia.org/wiki/Юникод%23Версии Юникода") {
  $ERROR('#3: http://ru.wikipedia.org/wiki/Юникод%23Версии Юникода');
}

 }
});

