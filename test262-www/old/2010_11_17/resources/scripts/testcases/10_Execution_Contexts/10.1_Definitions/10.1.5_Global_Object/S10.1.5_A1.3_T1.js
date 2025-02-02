// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A1.3_T1;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object has properties such as built-in objects such as 
 * Math, String, Date, parseInt, etc; 
 * @description: Eval execution context - Value Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A1.3_T1",

path: "10.1.5, 15.1",

description: "Eval execution context - Value Properties",

test: function testcase() {
   var evalStr = 
'//CHECK#1\n'+
'if ( NaN === null ) {\n'+
'  $ERROR("#1: NaN === null");\n'+
'}\n'+

'//CHECK#2\n'+
'if ( Infinity === null ) {\n'+
'  $ERROR("#2: Infinity === null");\n'+
'}\n'+

'//CHECK#3\n'+
'if ( undefined === null ) {\n'+
'  $ERROR("#3: undefined === null");\n'+
'}\n'+
';\n';

eval(evalStr);

 }
});

