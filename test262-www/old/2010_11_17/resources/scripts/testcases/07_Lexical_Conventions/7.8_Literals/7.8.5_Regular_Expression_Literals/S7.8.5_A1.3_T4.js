// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.3_T4;
 * @section: 7.8.5;
 * @assertion: RegularExpressionFirstChar :: LineTerminator is incorrect;
 * @description: Carriage Return, with eval; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A1.3_T4",

path: "7.8.5",

description: "Carriage Return, with eval",

test: function testcase() {
   //CHECK#1
try {
   eval("/\u000D/").source;
   $ERROR('#1.1: RegularExpressionFirstChar :: Carriage Return is incorrect. Actual: ' + (eval("/\u000D/").source)); 
}
catch (e) {
  if ((e instanceof SyntaxError) !== true) {
     $ERROR('#1.2: RegularExpressionFirstChar :: Carriage Return is incorrect. Actual: ' + (e));
  }
}     

 }
});

