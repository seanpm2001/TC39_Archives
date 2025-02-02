// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.13.2_A1_T11;
* @section: 11.13.2;
* @assertion: White Space and Line Terminator between LeftHandSideExpression and "@=" or between "@=" and AssignmentExpression are allowed;
* @description: Checking by using eval, check operator is x |= y;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.13.2_A1_T11",

path: "11.13.2",

description: "Checking by using eval, check operator is x |= y",

test: function testcase() {
   //CHECK#1
x = 0;
if ((eval("x\u0009|=\u00091")) !== 1) {
  $ERROR('#1: x = 0; (x\\u0009|=\\u00091) === 1');
}

//CHECK#2
x = 0;
if ((eval("x\u000B|=\u000B1")) !== 1) {
  $ERROR('#2: x = 0; (x\\u000B|=\\u000B1) === 1');  
}

//CHECK#3
x = 0;
if ((eval("x\u000C|=\u000C1")) !== 1) {
  $ERROR('#3: x = 0; (x\\u000C|=\\u000C1) === 1');
}

//CHECK#4
x = 0;
if ((eval("x\u0020|=\u00201")) !== 1) {
  $ERROR('#4: x = 0; (x\\u0020|=\\u00201) === 1');
}

//CHECK#5
x = 0;
if ((eval("x\u00A0|=\u00A01")) !== 1) {
  $ERROR('#5: x = 0; (x\\u00A0|=\\u00A01) === 1');
}

//CHECK#6
x = 0;
if ((eval("x\u000A|=\u000A1")) !== 1) {
  $ERROR('#6: x = 0; (x\\u000A|=\\u000A1) === 1');  
}

//CHECK#7
x = 0;
if ((eval("x\u000D|=\u000D1")) !== 1) {
  $ERROR('#7: x = 0; (x\\u000D|=\\u000D1) === 1');
}

//CHECK#8
x = 0;
if ((eval("x\u2028|=\u20281")) !== 1) {
  $ERROR('#8: x = 0; (x\\u2028|=\\u20281) === 1');
}

//CHECK#9
x = 0;
if ((eval("x\u2029|=\u20291")) !== 1) {
  $ERROR('#9: x = 0; (x\\u2029|=\\u20291) === 1');
}


//CHECK#10
x = 0;
if ((eval("x\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u2029|=\u0009\u000B\u000C\u0020\u00A0\u000A\u000D\u2028\u20291")) !== 1) {
  $ERROR('#10: x = 0; (x\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u2029|=\\u0009\\u000B\\u000C\\u0020\\u00A0\\u000A\\u000D\\u2028\\u20291) === 1');
}

 }
});

