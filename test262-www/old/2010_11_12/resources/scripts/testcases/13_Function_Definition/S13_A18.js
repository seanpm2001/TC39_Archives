// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A18;
* @section: 13;
* @assertion: Closures are admitted;
* @description: Using a function declaration as a function parameter;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A18",

path: "13",

description: "Using a function declaration as a function parameter",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (typeof sinx !== 'undefined') {
	$ERROR('#1: typeof sinx === \'undefined\'. Actual: typeof sinx ==='+typeof sinx);
}
//
//////////////////////////////////////////////////////////////////////////////

var __val = function derivative(f, dx) {
    return function(x) {
      return (f(x + dx) - f(x)) / dx;
    };
}(function sinx(x){return Math.sin(x);},.0001)(0.5);

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (typeof sinx !== 'undefined') {
	$ERROR('#2: typeof sinx === \'undefined\'. Actual: typeof sinx ==='+typeof sinx);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

