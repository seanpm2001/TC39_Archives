// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A26;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of HexDigit ::: a or of HexDigit ::: A is 10;
 * @description: Compare Number('0xA'), Number('0XA'), Number('0xa') and Number('0Xa') with 10;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A26",

path: "9.3.1, 15.7.1",

description: "Compare Number(\'0xA\'), Number(\'0XA\'), Number(\'0xa\') and Number(\'0Xa\') with 10",

test: function testcase() {
   // CHECK#1
if (Number("0xa") !== 10)  {
  $ERROR('#1: Number("0xa") === 10. Actual: ' + (Number("0xa")));
}

// CHECK#2
if (Number("0xA") !== 10)  {
  $ERROR('#2: Number("0xA") === 10. Actual: ' + (Number("0xA")));
}

// CHECK#3
if (Number("0Xa") !== 10)  {
  $ERROR('#3: Number("0Xa") === 10. Actual: ' + (Number("0Xa")));
}

// CHECK#4
if (+("0XA") !== 10)  {
  $ERROR('#4: +("0XA") === 10. Actual: ' + (+("0XA")));
}

 }
});

