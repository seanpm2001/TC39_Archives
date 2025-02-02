// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A1_T1;
* @section: 13.2.2;
* @assertion: Since a function is an object, it might be set to [[Prototype]] property of a new created object through [[Construct]] property;
* @description: Declaring a function with "function __func()";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A1_T1",

path: "13.2.2",

description: "Declaring a function with \"function __func()\"",

test: function testcase() {
   var __MONSTER="monster";
var __PREDATOR="predator";

function __PROTO(){};

try{
    __PROTO.type=__MONSTER;
}
catch(e){
    $ERROR('#0: __PROTO.type=__MONSTER does not lead to throwing exception')
}

function __FACTORY(){this.name=__PREDATOR};

__FACTORY.prototype=__PROTO;

var __monster = new __FACTORY();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__PROTO.isPrototypeOf(__monster))) {
	$ERROR('#1: __PROTO.isPrototypeOf(__monster) must be true');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__monster.type !==__MONSTER) {
	$ERROR('#2: __monster.type ===__MONSTER. Actual: __monster.type ==='+__monster.type);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

