// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A31;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of HexDigit ::: f or of HexDigit ::: F is 15;
 * @description: Compare Number('0xF'), Number('0XF'), Number('0xf') and Number('0Xf') with 15;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A31",

path: "9.3.1, 15.7.1",

description: "Compare Number(\'0xF\'), Number(\'0XF\'), Number(\'0xf\') and Number(\'0Xf\') with 15",

test: function testcase() {
   // CHECK#1
if (Number("0xf") !== 15)  {
  $ERROR('#1: Number("0xf") === 15. Actual: ' + (Number("0xf")));
}

// CHECK#2
if (Number("0xF") !== 15)  {
  $ERROR('#2: Number("0xF") === 15. Actual: ' + (Number("0xF")));
}

// CHECK#3
if (+("0Xf") !== 15)  {
  $ERROR('#3: +("0Xf") === 15. Actual: ' + (+("0Xf")));
}

// CHECK#4
if (Number("0XF") !== 15)  {
  $ERROR('#4: Number("0XF") === 15. Actual: ' + (Number("0XF")));
}

 }
});

