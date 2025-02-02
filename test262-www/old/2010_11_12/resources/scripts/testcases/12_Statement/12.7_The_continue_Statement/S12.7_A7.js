// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A7;
* @section: 12.7;
* @assertion: Appearing of continue within eval statement that is within an IterationStatement yields SyntaxError;
* @description: Using eval "eval("continue LABEL1")";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A7",

path: "12.7",

description: "Using eval \"eval(\"continue LABEL1\")\"",

test: function testcase() {
   var x=0,y=0;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
try{
	LABEL1 : do {
        x++;
        eval("continue LABEL1");
        y++;
    } while(0);
	$ERROR('#1: eval("continue LABEL1") does not lead to throwing exception');
} catch(e){
	if(!(e instanceof SyntaxError)){
		$ERROR("1.1: Appearing of continue within eval statement inside of IterationStatement yields SyntaxError");
	}
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

