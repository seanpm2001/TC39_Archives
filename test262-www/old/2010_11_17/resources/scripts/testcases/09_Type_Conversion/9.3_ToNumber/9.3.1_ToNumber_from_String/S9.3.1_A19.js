// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A19;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of DecimalDigit ::: 3 or of HexDigit ::: 3 is 3;
 * @description: Compare Number('0x3') and Number('0X3') with 3;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A19",

path: "9.3.1, 15.7.1",

description: "Compare Number(\'0x3\') and Number(\'0X3\') with 3",

test: function testcase() {
   // CHECK#1
if (Number("3") !== 3)  {
  $ERROR('#1: Number("3") === 3. Actual: ' + (Number("3")));
}

// CHECK#2
if (+("0x3") !== 3)  {
  $ERROR('#2: +("0x3") === 3. Actual: ' + (+("0x3")));
}

// CHECK#3
if (Number("0X3") !== 3)  {
  $ERROR('#3: Number("0X3") === 3. Actual: ' + (Number("0X3")));
}

 }
});

