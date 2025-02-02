// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S12.6.2_A4_T5;
* @section: 12.6.2;
* @assertion: "break" within a "while" Statement is allowed and performed as described in 12.8;
* @description: Using labeled "break" in order to continue a "while" loop;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.6.2_A4_T5",

path: "12.6.2",

description: "Using labeled \"break\" in order to continue a \"while\" loop",

test: function testcase() {
   //CHECK#1
var i=0;
woohoo:{
  while(true){
    i++;
    if ( ! (i < 10) ) {
      break woohoo;
      $ERROR('#1.1: "break woohoo" must break loop');
    }
  }
  if (i!==10) $ERROR('#1.2: i===10. Actual:  i==='+ i );
}

 }
});

