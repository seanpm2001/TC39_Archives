// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.1_A4_T4;
* @section: 12.6.1, 12.8;
* @assertion: "break" within a "do-while" Statement is allowed and performed as described in 12.8;
* @description: "break" and VariableDeclaration within a "do-while" statement; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.1_A4_T4",

path: "12.6.1, 12.8",

description: "\"break\" and VariableDeclaration within a \"do-while\" statement",

test: function testcase() {
   do_out : do {
    var __in__do__before__break="reached";
    do_in : do {
        var __in__do__IN__before__break="reached";
        break;
        var __in__do__IN__after__break="where am i";
    } while (0);
    var __in__do__after__break="where am i";
} while(2===1);

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (!(__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break)) {
	$ERROR('#1: (__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break)===true. Actual:  (__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break)==='+ (__in__do__before__break&&__in__do__IN__before__break&&!__in__do__IN__after__break&&__in__do__after__break) );
}
//
//////////////////////////////////////////////////////////////////////////////


 }
});

