// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A6.1_T7;
 * @section: 7.9, 12.6.3;
 * @assertion: Check For Statement for automatic semicolon insertion; 
 * @description: for (false semicolon false \n semicolon \n);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A6.1_T7",

path: "7.9, 12.6.3",

description: "for (false semicolon false \\n semicolon \\n)",

test: function testcase() {
   //CHECK#1
for(false;false
  ;
) {
  break;
}

 }
});

