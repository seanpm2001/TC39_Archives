// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.13_A3_T3;
 * @section: 15.4.4.13;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = 4294967297; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.13_A3_T3",

path: "15.4.4.13",

description: "length = 4294967297",

test: function testcase() {
   var obj = {};
obj.unshift = Array.prototype.unshift;
obj[0] = "";
obj.length = 4294967297;

//CHECK#1
var unshift = obj.unshift("x", "y", "z");
if (unshift !== 4) {
  $ERROR('#1: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z") === 4. Actual: ' + (unshift));
}

//CHECK#2
if (obj.length !== 4) {
  $ERROR('#2: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z"); obj.length === 4. Actual: ' + (obj.length));
}

//CHECK#3
if (obj[0] !== "x") {
   $ERROR('#3: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z"); obj[0] === "x". Actual: ' + (obj[0]));
}

//CHECK#4
if (obj[1] !== "y") {
   $ERROR('#4: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z"); obj[1] === "y". Actual: ' + (obj[1]));
}  

//CHECK#5
if (obj[2] !== "z") {
   $ERROR('#5: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z"); obj[2] === "z". Actual: ' + (obj[2]));
}

//CHECK#6
if (obj[3] !== "") {
   $ERROR('#6: var obj = {}; obj.unshift = Array.prototype.unshift; obj[0] = ""; obj.length = 4294967297; obj.unshift("x", "y", "z"); obj[3] === "". Actual: ' + (obj[3]));
}  

 }
});

