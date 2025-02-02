// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S11.8.6_A5_T1;
* @section: 11.8.6;
* @assertion: TypeError is subclass of Error from instanceof operator point of view;
* @description: Checking Error case;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.6_A5_T1",

path: "11.8.6",

description: "Checking Error case",

test: function testcase() {
   var __err = new Error;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__err instanceof Error)) {
	$ERROR('#1: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__err instanceof TypeError) {
	$ERROR('#2: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

var err__ = Error('failed');

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (!(err__ instanceof Error)) {
	$ERROR('#3: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (err__ instanceof TypeError) {
	$ERROR('#4: TypeError is subclass of Error from instanceof operator poit of view');
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

