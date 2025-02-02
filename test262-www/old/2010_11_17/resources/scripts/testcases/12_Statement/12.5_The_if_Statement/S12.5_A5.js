// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.5_A5;
* @section: 12.5;
* @assertion: FunctionDeclaration inside the "if" Expression is evaluated as true and function will not be declarated;
* @description: The "if" Expression is "function __func(){throw "FunctionExpression";}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.5_A5",

path: "12.5",

description: "The \"if\" Expression is \"function __func(){throw \"FunctionExpression\";}\"",

test: function testcase() {
   //////////////////////////////////////////////////////////////////////////////
//CHECK#1
try {
	__func=__func;
	$ERROR('#1: "__func=__func" lead to throwing exception');
} catch (e) {
	;
}
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
//CHECK#2
try {
	if(function __func(){throw "FunctionExpression";}) (function(){throw "TrueBranch"})(); else (function(){"MissBranch"})();
} catch (e) {
	if (e !== "TrueBranch") {
		$ERROR('#2: Exception ==="TrueBranch". Actual:  Exception ==='+ e);
	}
}
//
//////////////////////////////////////////////////////////////////////////////

//////////////////////////////////////////////////////////////////////////////
//CHECK#3
try {
	__func=__func;
	$ERROR('#3: "__func=__func" lead to throwing exception');
} catch (e) {
	;
}
//
//////////////////////////////////////////////////////////////////////////////




 }
});

