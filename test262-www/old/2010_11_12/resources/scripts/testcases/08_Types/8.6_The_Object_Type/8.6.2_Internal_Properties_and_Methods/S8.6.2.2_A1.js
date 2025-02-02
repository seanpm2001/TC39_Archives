// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.6.2.2_A1;
* @section: 8.6.2.2;
* @assertion: When the [[Put]] method of O is called with property P and value V,  
* and If O doesn't have a property with name P, then 
* creates a property with name P, set its value to V and give it empty attributes;
* @description: Put to not existent properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.6.2.2_A1",

path: "8.6.2.2",

description: "Put to not existent properties",

test: function testcase() {
   var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre";

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__map[1] !== "one") {
	$ERROR('#1: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map[1] === "one". Actual: ' + (__map[1]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__map["two"] !== 2) {
	$ERROR('#2: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["two"] === 2. Actual: ' + (__map["two"]));
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (__map["3"] !== "tre") {
	$ERROR('#3: var __map={}; __map[1]="one"; __map["two"]=2; __map["3"]="tre"; __map["3"] === "tre". Actual: ' + (__map["3"]));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

