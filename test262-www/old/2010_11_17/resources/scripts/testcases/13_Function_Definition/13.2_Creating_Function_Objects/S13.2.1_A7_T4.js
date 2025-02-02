// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A7_T4;
* @section: 13.2.1;
* @assertion: When the [[Call]] property for a Function object F is called, the following steps are taken: 
* 2. Evaluate F's FunctionBody; 
* if Result.type is returned  then Result.value is returned too;
* @description: Returning boolean. Declaring a function with "function __func()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A7_T4",

path: "13.2.1",

description: "Returning boolean. Declaring a function with \"function __func()\"",

test: function testcase() {
   function __func(){
    var x = true;
    return x;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#
try {
	x=x;
	$ERROR('#0: "x=x" lead to throwing exception');
} catch (e) {}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
    var __x=__func()
} catch(e){
    $ERROR('#1: var __x=__func() does not lead to throwing exception. Actual: exception is '+e);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (!(__x)) {
	$ERROR('#2: __x === true. Actual: __x ==='+__x);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try {
	x=x;
	$ERROR('#3: "x=x" lead to throwing exception');
} catch (e) {}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

