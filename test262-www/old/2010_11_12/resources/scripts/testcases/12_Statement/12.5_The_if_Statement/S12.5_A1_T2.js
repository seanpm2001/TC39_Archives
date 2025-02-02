// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A1_T2;
* @section: 12.5;
* @assertion: 1, true, non-empty string in expression is evaluated to true;
* @description: Using "if/else" construction;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A1_T2",

path: "12.5",

description: "Using \"if/else\" construction",

test: function testcase() {
   var c=0;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if(!(1))
	$ERROR('#1.1: 1 in expression is evaluated to true');
else
  c++;
if (c!=1) $ERROR('#1.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if(!(true))
	$ERROR('#2.1: true in expression is evaluated to true');
else
  c++;
if (c!=2) $ERROR('#2.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if(!("1"))
	$ERROR('#3.1: "1" in expression is evaluated to true');
else
  c++;
if (c!=3) $ERROR('#3.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if(!("A"))
	$ERROR('#4.1: "A" in expression is evaluated to true');
else
  c++;
if (c!=4) $ERROR('#4.2: else branch don`t execute');
//
//////////////////////////////////////////////////////////////////////////////


 }
});

