// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A18_T2;
* @section: 13.2.2;
* @assertion: Using arguments object within a "with" Expression that is nested in a function is admitted;
* @description: Object is declared with "__obj={callee:"a"}"; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A18_T2",

path: "13.2.2",

description: "Object is declared with \"__obj={callee:\"a\"}\"",

test: function testcase() {
   this.callee = 0;
var b;

__obj={callee:"a"};

function f(){
    with (arguments){
        callee=1;
        b=true;
        return arguments;
    }
};

result=f(__obj);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (callee !== 0) {
	$ERROR('#1: callee === 0. Actual: callee ==='+callee);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__obj.callee !== "a") {
	$ERROR('#2: __obj.callee === "a". Actual: __obj.callee ==='+__obj.callee);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (result.callee !== 1) {
	$ERROR('#3: result.callee === 1. Actual: result.callee ==='+result.callee);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (!(this.b)) {
	$ERROR('#4: this.b === true. Actual: this.b ==='+this.b);
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

