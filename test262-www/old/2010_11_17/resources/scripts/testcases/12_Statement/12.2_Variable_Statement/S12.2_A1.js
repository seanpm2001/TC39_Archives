// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.2_A1;
* @section: 12.2;
* @assertion: Variables are created when the program is entered. Variables are initialised to "undefined" 
* when created. A variable with an Initialiser is assigned the value of its AssignmentExpression when the 
* VariableStatement is executed, not when the variable is created;
* @description: Creating variables after entering the execution scope;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.2_A1",

path: "12.2",

description: "Creating variables after entering the execution scope",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	__x = __x;
    __y = __x ? "good fellow" : "liar"; // __y assigned to "liar" since __x undefined
    __z = __z === __x ? 1 : 0; // __z assigned to 1 since both __x and __z are undefined
} catch (e) {
	$ERROR('#1: Using declarated variable before it declaration is admitted');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try{
    __something__undefined = __something__undefined;
    $ERROR('#2: "__something__undefined = __something__undefined" lead to throwing exception');
} catch(e){
    $PRINT(e.message);
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if ((__y !== "liar")&(__z !== 1)) {
	$ERROR('#3: (__y === "liar") and (__z === 1). Actual:  __y ==='+__y+' and __z ==='+__z  );
}
//
//////////////////////////////////////////////////////////////////////////////

var __x, __y = true, __z = __y ? "smeagol" : "golum";

//////////////////////////////////////////////////////////////////////////////
//CHECK#4
if (!__y&!(__z = "smeagol")) {
	$ERROR('#4: A variable with an Initialiser is assigned the value of its AssignmentExpression when the VariableStatement is executed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

