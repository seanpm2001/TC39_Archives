// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13.2.2_A19_T4;
* @section: 13.2.2;
* @assertion: Function's scope chain is started when it is declared;
* @description: Function is declared in the hierarchical object scope and then an exception is thrown;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13.2.2_A19_T4",

path: "13.2.2",

description: "Function is declared in the hierarchical object scope and then an exception is thrown",

test: function testcase() {
   var a = 1;

var __obj = {a:2,__obj:{a:3}};

try {
	with (__obj)
    {
        with(__obj){
            var __func = function(){return a;};
            throw 5;
        }
    }
} catch (e) {
	;
}

result = __func();

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (result !== 3) {
	$ERROR('#1: result === 3. Actual: result ==='+result);
}
//
//////////////////////////////////////////////////////////////////////////////




 }
});

