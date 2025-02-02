// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S7.9_A5.9_T1;
* @section: 7.9;
* @assertion: Additive/Substract Operator(A/SO) in combination with itself separated by LT or white spaces
* after automatic semicolon insertion gives valid result;
* @description: Try use Variable1 (different combinations of three +) Variable2 construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.9_T1",

path: "7.9",

description: "Try use Variable1 (different combinations of three +) Variable2 construction",

test: function testcase() {
   var x=1, y=1;
z=
x
+ 
+
+
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('#1: ');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x + + + y

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

z=
x
+    +
+    +
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ((z!==2)&&(y!==1)&&(x!==1)) {
	$ERROR('');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

