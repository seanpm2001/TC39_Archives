// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S7.9_A5.8_T1;
* @section: 7.9;
* @assertion: Since LineTerminator(LT) between Postfix Increment/Decrement Operator(I/DO) and operand is admitted, 
* Additive/Substract Operator(A/SO) in combination with I/DO separated by LT or white spaces after automatic semicolon insertion gives valid result;
* @description: Try use Variable1 \n + \n ++ \n Variable2 construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.8_T1",

path: "7.9",

description: "Try use Variable1 \\n + \\n ++ \\n Variable2 construction",

test: function testcase() {
   var x=0, y=0;
z=
x
+ 
++
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((z!==1)&&(y!==1)&&(x!==0)) {
	$ERROR('#1: ');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x
+ ++
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((z!==2)&&(y!==2)&&(x!==0)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x
+    ++
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ((z!==3)&&(y!==3)&&(x!==0)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

