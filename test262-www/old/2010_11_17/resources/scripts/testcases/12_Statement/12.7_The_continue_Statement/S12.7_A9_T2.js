// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.7_A9_T2;
* @section: 12.7;
* @assertion: Continue inside of try-catch nested in a loop is allowed;
* @description: Using "continue" within catch Block that is within a loop;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.7_A9_T2",

path: "12.7",

description: "Using \"continue\" within catch Block that is within a loop",

test: function testcase() {
   var x=0,y=0;

(function(){
FOR : for(;;){
	try{
		x++;
		if(x===10)return;
		throw 1;
	} catch(e){
		continue;
	}	
}
})();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (x!==10) {
	$ERROR('#1: Continue inside of try-catch nested in loop is allowed');
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

