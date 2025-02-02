// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A3;
* @section: 12.7;
* @assertion: When "continue Identifier" is evaluated (continue, empty, empty) is returned;
* @description: Simple using continue without Identifier and labeled loop;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A3",

path: "12.7",

description: "Simple using continue without Identifier and labeled loop",

test: function testcase() {
   LABEL_OUT : var x=0, y=0;

LABEL_DO_LOOP : do {
    LABEL_IN : x=2;
    continue ;
    LABEL_IN_2 : var y=2;
    
    function IN_DO_FUNC(){}
} while(0);

LABEL_ANOTHER_LOOP : do {
    ;
} while(0);

function OUT_FUNC(){}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if ((x!==2)&&(y!==0)) {
	$ERROR('#1: x === 2 and y === 0. Actual:  x ==='+x+' and y ==='+ y  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

