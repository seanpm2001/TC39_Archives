// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.4.2.2_A2.2_T1;
 * @section: 15.4.2.2, 12.14;
 * @assertion: If the argument len is a Number and ToUint32(len) is not equal to len, 
 * a RangeError exception is thrown;
 * @description: Use try statement. len = -1, 4294967296, 4294967297;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.4.2.2_A2.2_T1",

path: "15.4.2.2, 12.14",

description: "Use try statement. len = -1, 4294967296, 4294967297",

test: function testcase() {
   //CHECK#1
try {  
  new Array(-1);   
  $ERROR('#1.1: new Array(-1) throw RangeError. Actual: ' + (new Array(-1)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#1.2: new Array(-1) throw RangeError. Actual: ' + (e));
  }
}

//CHECK#2
try {  
  new Array(4294967296);   
  $ERROR('#2.1: new Array(4294967296) throw RangeError. Actual: ' + (new Array(4294967296)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#2.2: new Array(4294967296) throw RangeError. Actual: ' + (e));
  }
}

//CHECK#3
try {  
  new Array(4294967297);   
  $ERROR('#3.1: new Array(4294967297) throw RangeError. Actual: ' + (new Array(4294967297)));
} catch(e) {
  if ((e instanceof RangeError) !== true) {
    $ERROR('#3.2: new Array(4294967297) throw RangeError. Actual: ' + (e));
  }
}

 }
});

