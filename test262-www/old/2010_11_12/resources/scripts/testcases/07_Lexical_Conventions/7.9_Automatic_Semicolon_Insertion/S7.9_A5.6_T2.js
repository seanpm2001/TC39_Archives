// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.9_A5.6_T2;
 * @section: 7.9, 12.4, 11.3, 11.4.4, 11.4.5;
 * @assertion: Since LineTerminator between Postfix Increment/Decrement Operator(I/DO) and operand is not allowed but
 * between Prefix I/DO and operand admitted, Postfix I/DO in combination with prefix I/DO after automatic semicolon insertion gives valid result;
 * @description: Try use Variable1 \n -- \n Variable2 construction; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.9_A5.6_T2",

path: "7.9, 12.4, 11.3, 11.4.4, 11.4.5",

description: "Try use Variable1 \\n -- \\n Variable2 construction",

test: function testcase() {
   var x=0, y=2;

x
--
y

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((x!==0)&(y!==1)) {
	$ERROR('#1: Check Postfix Increment Operator for automatic semicolon insertion');
}
//
//////////////////////////////////////////////////////////////////////////////

x
--y

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((x!==0)&(y!==0)) {
	$ERROR('#2: Check Postfix Increment Operator for automatic semicolon insertion');
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

