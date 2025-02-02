// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.3_A3;
* @section: 12.6.3;
* @assertion: While evaluating "for (ExpressionNoIn; FirstExpression; SecondExpression) Statement", ExpressionNoIn is evaulated first, FirstExpressoin is evaluated second;
* @description: Using "(function(){throw "FirstExpression"})()" as FirstExpression;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.3_A3",

path: "12.6.3",

description: "Using \"(function(){throw \"FirstExpression\"})()\" as FirstExpression",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	for((function(){__in__NotInExpression__ = "checked";__in__NotInExpression__2 = "passed";})(); (function(){throw "FirstExpression"})(); (function(){throw "SecondExpression"})()) {
		__in__for="reached";
	}
	$ERROR('#1: (function(){throw "SecondExpression"} lead to throwing exception');
} catch (e) {
	if (e !== "FirstExpression") {
		$ERROR('#1: When for (ExpressionNoIn ; FirstExpression ; SecondExpression) Statement is evaluated first evaluates ExpressionNoIn then FirstExpression');
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if ((__in__NotInExpression__ !== "checked")&(__in__NotInExpression__2!=="passed")) {
	$ERROR('#2: (__in__NotInExpression__ === "checked")&(__in__NotInExpression__2==="passed")');
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
if (typeof __in__for !== "undefined") {
	$ERROR('#3: typeof __in__for === "undefined". Actual:  typeof __in__for ==='+ typeof __in__for  );
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

