// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.9_A2;
 * @section: 12.9;
 * @assertion: LineTerminator between return and Identifier_opt yields return without Identifier_opt;
 * @description: Checking by using eval, inserting LineTerminator between return and Variable;
 */



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.9_A2",

path: "12.9",

description: "Checking by using eval, inserting LineTerminator between return and Variable",

test: function testcase() {
   //CHECK#1
try{
  if (eval("(function(){var x = 1;return\u000Ax;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000A) between return and Identifier_opt yields return without Identifier_opt");	  
  }
} catch(e){
  $ERROR('#1: eval("(function(){var x = 1;return\\u000Ax;var y=2;})()") does not lead to throwing exception');
}




//CHECK#2
try{
  if (eval("(function(){var x = 1;return\u000Dx;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-000D) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#2: eval("(function(){var x = 1;return\\u000Dx;var y=2;})()") does not lead to throwing exception');
}




//CHECK#3
try{
  if (eval("(function(){var x = 1;return\u2028x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2028) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#3: eval("(function(){var x = 1;return\\u2028x;var y=2;})()") does not lead to throwing exception');
}




//CHECK#4
try{
  if (eval("(function(){var x =1;return\u2029x;var y=2;})()") !== undefined) {
    $ERROR("#1: LineTerminator(U-2029) between return and Identifier_opt yields return without Identifier_opt");    
  }
} catch(e){
  $ERROR('#4: eval("(function(){var x =1;return\\u2029x;var y=2;})()") does not lead to throwing exception');
}

 }
});

