// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.2_A2;
* @section: 8.6.2.2;
* @assertion: When the [[Put]] method of O is called with property P and value V,  
* then set the value of the property to V. The attributes of the property are not changed;
* @description: Put to existent properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.2_A2",

path: "8.6.2.2",

description: "Put to existent properties",

test: function testcase() {
   var _map={1:"one",two:2};

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
_map[1]="uno";
if (_map[1] !== "uno") {
  $ERROR('#1: var _map={1:"one",two:2}; _map[1]="uno"; _map[1] === "uno". Actual: ' + (_map[1]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
_map["1"]=1;
if (_map[1] !== 1) {
  $ERROR('#2: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map[1] === 1. Actual: ' + (_map[1]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
_map["two"]="two";
if (_map["two"] !== "two") {
  $ERROR('#3: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map["two"] === "two". Actual: ' + (_map["two"]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
_map.two="duo";
if (_map.two !== "duo") {
  $ERROR('#4: var _map={1:"one",two:2}; _map[1]="uno"; _map["1"]=1; _map["two"]="two"; _map.two="duo"; _map.two === "duo". Actual: ' + (_map.two));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

