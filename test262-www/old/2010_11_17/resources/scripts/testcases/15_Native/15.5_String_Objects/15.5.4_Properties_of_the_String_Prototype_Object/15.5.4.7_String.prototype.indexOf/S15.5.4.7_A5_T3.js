// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.7_A5_T3;
* @section: 15.5.4.7;
* @assertion: String.prototype.indexOf works properly;
* @description: Search one symbol from it`s position+1 in the string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.7_A5_T3",

path: "15.5.4.7",

description: "Search one symbol from it`s position+1 in the string",

test: function testcase() {
   var TEST_STRING = new String( " !\"#$%&'()*+,-./0123456789:;<=>?@ABCDEFGHIJKLMNOPQRSTUVWXYZ[\\]^_`abcdefghijklmnopqrstuvwxyz{|}~" );

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
for ( var k = 0, i = 0x0020; i < 0x007e; i++, k++ ) {
    if (TEST_STRING.indexOf( String.fromCharCode(i), k+1 ) !== -1) {
      $ERROR('#'+(i-0x0020)+': TEST_STRING.indexOf( String.fromCharCode('+i+'), '+(k+1)+' )===-1. Actual: '+TEST_STRING.indexOf( String.fromCharCode(i), k+1 )); 
    }
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

