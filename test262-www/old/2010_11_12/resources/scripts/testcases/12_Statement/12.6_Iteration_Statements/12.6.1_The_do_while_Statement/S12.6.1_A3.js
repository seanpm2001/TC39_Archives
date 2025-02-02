// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A3;
* @section: 12.6.1;
* @assertion: When the production "do Statement while ( Expression )" is evaluated, then (normal, V, empty) is returned;
* @description: Using eval "eval("do __in__do=1; while (false)")";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A3",

path: "12.6.1",

description: "Using eval \"eval(\"do __in__do=1; while (false)\")\"",

test: function testcase() {
   __evaluated = eval("do __in__do=1; while (false)");

//////////////////////////////////////////////////////////////////////////////
//CHECK#
if (__in__do !== 1) {
	$ERROR('#1: __in__do === 1. Actual:  __in__do ==='+ __in__do  );
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__evaluated !== 1) {
	$ERROR('#2: __evaluated === 1. Actual:  __evaluated ==='+ __evaluated  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

