// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A4_T1;
* @section: 13.2.1;
* @assertion: Objects as arguments are passed by reference;
* @description: Adding new number property to a function argument within the function body, 
* where explicit argument is an object defined with "var __obj={}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A4_T1",

path: "13.2.1",

description: "Adding new number property to a function argument within the function body,",

test: function testcase() {
   function __func(__arg){
    __arg.foo=7;
}

var __obj={};

__func(__obj);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__obj.foo !== 7) {
	$ERROR('#1: __obj.foo === 7. Actual: __obj.foo ==='+__obj.foo);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

