// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.4.5_A4_T3;
 * @section: 15.4.4.5;
 * @assertion: Check ToUint32(length) for non Array objects;
 * @description: length = -4294967294; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.4.5_A4_T3",

path: "15.4.4.5",

description: "length = -4294967294",

test: function testcase() {
   var obj = {};
obj.join = Array.prototype.join;
obj[0] = "x";
obj[1] = "y";
obj[2] = "z";
obj.length = -4294967294;

//CHECK#1
if (obj.join("") !== "xy") {
  $ERROR('#1: var obj = {}; obj.join = Array.prototype.join; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.join("") === "xy". Actual: ' + (obj.join("")));
}

//CHECK#2
if (obj.length !== -4294967294) {
  $ERROR('#2: var obj = {}; obj.join = Array.prototype.join; obj[0] = "x"; obj[1] = "y"; obj[2] = "z"; obj.length = -4294967294; obj.join(""); obj.length === -4294967294. Actual: ' + (obj.length));
}

 }
});

