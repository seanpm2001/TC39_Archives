// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.4_A6.1;
* @section: 12.6.4;
* @assertion: The production IterationStatement: "for (var VariableDeclarationNoIn in Expression) Statement";
* @description: Using Object with custom prototype as an Expression is appropriate. The prototype is "{feat:2,hint:"protohint"}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.4_A6.1",

path: "12.6.4",

description: "Using Object with custom prototype as an Expression is appropriate. The prototype is \"{feat:2,hint:\"protohint\"}\"",

test: function testcase() {
   function FACTORY(){this.prop=1;this.hint="hinted"};

FACTORY.prototype = {feat:2,hint:"protohint"};

var __instance = new FACTORY;

__accum="";

for (var key in __instance){
	__accum+=(key + __instance[key]);
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!((__accum.indexOf("prop1")!==-1)&&(__accum.indexOf("feat2")!==-1)&&(__accum.indexOf("hinthinted")!==-1))) {
	$ERROR('#1: (__accum.indexOf("prop1")!==-1)&&(__accum.indexOf("feat2")!==-1)&&(__accum.indexOf("hinthinted")!==-1)');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__accum.indexOf("hintprotohint")!==-1) {
	$ERROR('#2: __accum.indexOf("hintprotohint") === -1. Actual:  __accum.indexOf("hintprotohint") ==='+ __accum.indexOf("hintprotohint")  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

