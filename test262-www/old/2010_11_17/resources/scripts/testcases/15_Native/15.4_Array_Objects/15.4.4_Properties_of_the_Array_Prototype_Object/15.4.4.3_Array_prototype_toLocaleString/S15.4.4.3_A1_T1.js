// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.3_A1_T1;
 * @section: 15.4.4.3;
 * @assertion: The elements of the array are converted to strings using their 
 * toLocaleString methods, and these strings are then concatenated, separated
 * by occurrences of a separator string that has been derived in an 
 * implementation-defined locale-specific way;
 * @description: it is the function that should be invoked;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.3_A1_T1",

path: "15.4.4.3",

description: "it is the function that should be invoked",

test: function testcase() {
   var n = 0;
var obj = {toLocaleString: function() {n++}};
var arr = [undefined, obj, null, obj, obj];
arr.toLocaleString();

//CHECK#1
if (n !== 3) {
  $ERROR('#1: var n = 0; var obj = {toLocaleString: function() {n++}}; var arr = [undefined, obj, null, obj, obj]; arr.toLocaleString(); n === 3. Actual: ' + (n));
}  

 }
});

