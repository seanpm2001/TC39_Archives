// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A6;
* @section: 12.6.3;
* @assertion: While evaluating "for ( ;  ; Expression) Statement", Statement is evaluated first and then Expression is evaluated;
* @description: Using "(function(){throw "SecondExpression";})()" as an Expression; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A6",

path: "12.6.3",

description: "Using \"(function(){throw \"SecondExpression\";})()\" as an Expression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for(;;(function(){throw "SecondExpression";})()){
        var __in__for = "reached";
    }
    $ERROR('#1: (function(){throw "SecondExpression"}() lead to throwing exception');
} catch (e) {
	if (e !== "SecondExpression") {
		$ERROR('#1: When for ( ;  ; Expression) Statement is evaluated Statement evaluates first then Expression evaluates');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (__in__for !== "reached") {
	$ERROR('#2: __in__for === "reached". Actual:  __in__for ==='+ __in__for  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

