// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.6.4.3_A1_T2;
 * @section: 15.6.4.3;
 * @assertion: Boolean.prototype.valueOf() returns this boolean value;
 * @description: calling with argument;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.6.4.3_A1_T2",

path: "15.6.4.3",

description: "calling with argument",

test: function testcase() {
   //CHECK#1
if(Boolean.prototype.valueOf(true) !== false){
  $ERROR('#1: Boolean.prototype.valueOf(true) === false');
}

//CHECK#2
if((new Boolean()).valueOf(true) !== false){
  $ERROR('#2: (new Boolean()).valueOf(true) === false');
}

//CHECK#3
if((new Boolean(0)).valueOf(true) !== false){
  $ERROR('#3: (new Boolean(0)).valueOf(true) === false');
}

//CHECK#4
if((new Boolean(-1)).valueOf(false) !== true){
  $ERROR('#4: (new Boolean(-1)).valueOf(false) === true');
}

//CHECK#5
if((new Boolean(1)).valueOf(false) !== true){
  $ERROR('#5: (new Boolean(1)).valueOf(false) === true');
}

//CHECK#6
if((new Boolean(new Object())).valueOf(false) !== true){
  $ERROR('#6: (new Boolean(new Object())).valueOf(false) === true');
}


 }
});

