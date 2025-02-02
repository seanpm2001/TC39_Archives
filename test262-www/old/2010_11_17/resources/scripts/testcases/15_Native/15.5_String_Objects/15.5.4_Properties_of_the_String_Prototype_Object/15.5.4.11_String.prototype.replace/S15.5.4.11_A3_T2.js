// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.5.4.11_A3_T2;
* @section: 15.5.4.11;
* @assertion: replace with regexp /(uid=)(\d+)/ returns;
* @description: replaceValue is "$11" + '15';
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.5.4.11_A3_T2",

path: "15.5.4.11",

description: "replaceValue is \"$11\" + \'15\'",

test: function testcase() {
   var __str = 'uid=31';
var __re = /(uid=)(\d+)/;

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__str.replace(__re, "$11" + '15')!=='uid=115') {
  $ERROR('#1: var __str = \'uid=31\'; var __re = /(uid=)(\d+)/; __str.replace(__re, "$11" + \'15\')===\'uid=115\'. Actual: '+__str.replace(__re, "$11" + '15'));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

