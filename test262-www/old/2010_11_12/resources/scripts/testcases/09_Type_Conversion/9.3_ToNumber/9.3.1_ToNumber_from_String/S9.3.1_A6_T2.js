// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3.1_A6_T2;
 * @section: 9.3.1, 15.7.1;
 * @assertion: The MV of StrUnsignedDecimalLiteral::: Infinity is 10<sup><small>10000</small></sup> 
 * (a value so large that it will round to <b><tt>+&infin;</tt></b>);
 * @description: Compare Number('Infi'+'nity') with Number.POSITIVE_INFINITY, 10e10000, 10E10000 and Number("10e10000");
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3.1_A6_T2",

path: "9.3.1, 15.7.1",

description: "Compare Number(\'Infi\'+\'nity\') with Number.POSITIVE_INFINITY, 10e10000, 10E10000 and Number(\"10e10000\")",

test: function testcase() {
   function dynaString(s1, s2){
  return String(s1)+String(s2);
}


// CHECK#1
if (Number(dynaString("Infi", "nity")) !== Number.POSITIVE_INFINITY) {
  $ERROR('#1: Number("Infi"+"nity") === Number.POSITIVE_INFINITY');
}

// CHECK#2
if (Number(dynaString("Infi", "nity")) !== 10e10000) {
  $ERROR('#2: Number("Infi"+"nity") === 10e10000');
}

// CHECK#3
if (Number(dynaString("Infi", "nity")) !== 10E10000) {
  $ERROR('#3: Number("Infi"+"nity") === 10E10000');
}

// CHECK#4
if (Number(dynaString("Infi", "nity")) !== Number("10e10000")) {
  $ERROR('#4: Number("Infi"+"nity") === Number("10e10000")');
}

 }
});

