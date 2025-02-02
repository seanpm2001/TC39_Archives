// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A8_T3;
* @section: 12.6.3;
* @assertion: Blocks within "for" braces are not allowed;
* @description: Checking if execution of "for({index=0; index+=1;} index++<=10; index*2;) { arr.add(""+index);}" fails;
* @negative;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A8_T3",

path: "12.6.3",

description: "Checking if execution of \"for({index=0; index+=1;} index++<=10; index*2;) { arr.add(\"\"+index);}\" fails",

test: function testcase() {
  try {
     (function() {
         eval("var arr = [];\r\n\r\n//////////////////////////////////////////////////////////////////////////////\r\n//CHECK#1\r\nfor({index=0; index+=1;} index++<=10; index*2;) {	arr.add(\"\"+index);};\r\n//\r\n//////////////////////////////////////////////////////////////////////////////\r\n\r\n\r\n\r\n") })();
   } catch (__e__) {return true  /* failure is success */};
   return false /* but success is failure */
 }
});

