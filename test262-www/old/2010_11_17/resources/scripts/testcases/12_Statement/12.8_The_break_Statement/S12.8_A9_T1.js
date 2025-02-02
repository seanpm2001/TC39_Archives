// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.8_A9_T1;
* @section: 12.8;
* @assertion: Using "break" within "try/catch" statement that is nested in a loop is allowed;
* @description: Using "continue Identifier" within "catch" statement;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.8_A9_T1",

path: "12.8",

description: "Using \"continue Identifier\" within \"catch\" statement",

test: function testcase() {
   var x=0,y=0;

(function(){
FOR : for(;;){
	try{
		x++;
		if(x===10)return;
		throw 1;
	} catch(e){
		break FOR;
	}	
}
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==1) {
	$ERROR('#1: break inside of try-catch nested in loop is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

