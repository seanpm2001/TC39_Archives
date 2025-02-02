// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.5_T5;
 * @section: 7.9, 12.4, 11.2.5;
 * @assertion: Check Function Expression for automatic semicolon insertion;
 * @description: Insert some LineTerminators into rerutn expression;
 *  
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.5_T5",

path: "7.9, 12.4, 11.2.5",

description: "Insert some LineTerminators into rerutn expression",

test: function testcase() {
   //CHECK#1
var x =
1 + (function f
(t){
return {
a:
function(){
return t + 1
}
}
}
)
(2 + 3).
a
()

if (x !== 7) {
  $ERROR('#1: Check Function Expression for automatic semicolon insertion');
} 

 }
});

