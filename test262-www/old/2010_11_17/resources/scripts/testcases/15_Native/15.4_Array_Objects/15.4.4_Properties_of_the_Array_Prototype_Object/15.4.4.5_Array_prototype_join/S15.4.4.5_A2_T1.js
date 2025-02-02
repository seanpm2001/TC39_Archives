// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.5_A2_T1;
 * @section: 15.4.4.5;
 * @assertion: The join function is intentionally generic. 
 * It does not require that its this value be an Array object;
 * @description: If ToUint32(length) is zero, return the empty string;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.5_A2_T1",

path: "15.4.4.5",

description: "If ToUint32(length) is zero, return the empty string",

test: function testcase() {
   var obj = {};
obj.join = Array.prototype.join;

if (obj.length !== undefined) {
  $ERROR('#0: var obj = {}; obj.length === undefined. Actual: ' + (obj.length));
} else {
    //CHECK#1  
    if (obj.join() !== "") {
      $ERROR('#1: var obj = {}; obj.join = Array.prototype.join; obj.join() === "". Actual: ' + (obj.join()));
    }
    //CHECK#2
    if (obj.length !== undefined) {
      $ERROR('#2: var obj = {}; obj.join = Array.prototype.join; obj.join(); obj.length === undefined. Actual: ' + (obj.length));
    }
}    

//CHECK#3
obj.length = undefined;
if (obj.join() !== "") {
  $ERROR('#3: var obj = {}; obj.length = undefined; obj.join = Array.prototype.join; obj.join() === ". Actual: ' + (obj.join()));
} 

//CHECK#4
if (obj.length !== undefined) {
  $ERROR('#4: var obj = {}; obj.length = undefined; obj.join = Array.prototype.join; obj.join(); obj.length === undefined. Actual: ' + (obj.length));
}

//CHECK#5
obj.length = null
if (obj.join() !== "") {
  $ERROR('#5: var obj = {}; obj.length = null; obj.join = Array.prototype.join; obj.join() === "". Actual: ' + (obj.join()));
} 

//CHECK#6
if (obj.length !== null) {
  $ERROR('#6: var obj = {}; obj.length = null; obj.join = Array.prototype.join; obj.join(); obj.length === null. Actual: ' + (obj.length));
}

 }
});

