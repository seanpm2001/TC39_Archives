// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A2.3_T4;
 * @section: 7.8.5;
 * @assertion: RegularExpressionChar :: LineTerminator is incorrect;
 * @description: Carriage Return, with eval; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A2.3_T4",

path: "7.8.5",

description: "Carriage Return, with eval",

test: function testcase() {
   //CHECK#1
try {
   eval("/a\u000D/").source;
   $ERROR('#1.1: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (eval("/a\u000D/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionChar :: Carriage Retur is incorrect. Actual: ' + (e));
  }
}     

 }
});

