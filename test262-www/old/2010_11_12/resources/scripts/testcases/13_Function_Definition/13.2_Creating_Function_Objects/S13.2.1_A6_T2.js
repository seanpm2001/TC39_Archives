// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.1_A6_T2;
* @section: 13.2.1;
* @assertion: Primitive types are passed by value;
* @description: Declaring a function with "__func = function(arg1, arg2)";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.1_A6_T2",

path: "13.2.1",

description: "Declaring a function with \"__func = function(arg1, arg2)\"",

test: function testcase() {
   __func = function(arg1, arg2){
    arg1++;
    arg2+="BA";
};

var x=1;
y=2;
var a="AB"
b="SAM";

__func(x,a);
__func(y,b);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==1 || y!==2 || a!=="AB" || b!=="SAM") {
	$ERROR('#1: x === 1 and y === 2 and a === "AB" and b === "SAM". Actual: x ==='+x+' and y ==='+y+' and a ==='+a+' and b ==='+b);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

