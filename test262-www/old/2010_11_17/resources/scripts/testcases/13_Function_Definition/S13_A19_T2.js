// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A19_T2;
* @section: 13,13.2;
* @assertion: "var" does not override function declaration;
* @description: Creating a function and a variable with identical Identifiers within function scope;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A19_T2",

path: "13,13.2",

description: "Creating a function and a variable with identical Identifiers within function scope",

test: function testcase() {
   (function (){

    // since "var" does not override function declaration __decl is set to function
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#1
    if (typeof __decl !== "function") {
    	$ERROR('#1: typeof __decl === "function". Actual: typeof __decl ==='+typeof __decl);
    }
    //
    //////////////////////////////////////////////////////////////////////////////
    
    var __decl = 1;
    
    //since statement was evaluted __decl turns to 1 from function
    //////////////////////////////////////////////////////////////////////////////
    //CHECK#2
    if (__decl !== 1) {
    	$ERROR('#2: __decl === 1. Actual: __decl ==='+__decl);
    }
    //
    //////////////////////////////////////////////////////////////////////////////

    function __decl(){return 1;}
})();    

 }
});

