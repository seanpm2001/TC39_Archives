// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.2.1_A1_T11;
* @section: 15.3.2.1, 13.2;
* @assertion: When the Function constructor is called with one argument then body be that argument and the following steps are taken:
* i) Call ToString(body)
* ii) If P is not parsable as a FormalParameterListopt then throw a SyntaxError exception
* iii) If body is not parsable as FunctionBody then throw a SyntaxError exception
* iv) Create a new Function object as specified in 13.2 with parameters specified by parsing P as a FormalParameterListopt and body specified by parsing body as a FunctionBody. 
* Pass in a scope chain consisting of the global object as the Scope parameter
* v) Return Result(iv);
* @description: Value of the function constructor argument is "undefined";
*/



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.2.1_A1_T11",

path: "15.3.2.1, 13.2",

description: "Value of the function constructor argument is \"undefined\"",

test: function testcase() {
   //CHECK#1
try {
  var f = new Function(undefined);
} catch (e) {
  $FAIL('#1: test failed with error '+e);
}

//CHECK#2
if (f.constructor !== Function) {
  $ERROR('#2: When the Function constructor is called with one argument then body be that argument and creates a new Function object as specified in 13.2');
}

//CHECK#3
if (f() !== undefined) {
  $ERROR('#3: When the Function constructor is called with one argument then body be that argument the following steps are taken...');
}

 }
});

