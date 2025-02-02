// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A2.3_T6;
 * @section: 7.8.5;
 * @assertion: RegularExpressionChar :: LineTerminator is incorrect;
 * @description: Paragraph separator, with eval;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A2.3_T6",

path: "7.8.5",

description: "Paragraph separator, with eval",

test: function testcase() {
   //CHECK#1
try {
   eval("/s\u2029/").source;
   $ERROR('#1.1: RegularExpressionChar :: Paragraph separator is incorrect. Actual: ' + (eval("/s\u2029/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: Paragraph separator is incorrect. Actual: ' + (e));
  }
}     

 }
});

