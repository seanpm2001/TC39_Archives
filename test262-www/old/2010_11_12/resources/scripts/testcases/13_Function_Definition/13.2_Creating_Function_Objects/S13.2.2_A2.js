// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A2;
* @section: 13.2.2;
* @assertion: Since a function is an object, it might be set to [[Prototype]] property of a new created object through [[Construct]] property, 
* but [[call]] property must fail with TypeError error;
* @description: Trying to [[call]] this function; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A2",

path: "13.2.2",

description: "Trying to [[call]] this function",

test: function testcase() {
   var __PLANT="flower";
var __ROSE="rose";

function __PROTO(){};

try{
    __PROTO.type=__PLANT;
}
catch(e){
    $ERROR('#0: __PROTO.type=__PLANT does not lead to throwing exception')
}

function __FACTORY(){this.name=__ROSE};

__FACTORY.prototype=__PROTO;

var __rose = new __FACTORY();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
    __rose();
    $ERROR('#1: __rose() lead to throwing exception');
} catch(e){
    if (!(e instanceof TypeError)) {
    	$ERROR('#2: Exception Type is TypeError. Actual: exception ==='+e);
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

