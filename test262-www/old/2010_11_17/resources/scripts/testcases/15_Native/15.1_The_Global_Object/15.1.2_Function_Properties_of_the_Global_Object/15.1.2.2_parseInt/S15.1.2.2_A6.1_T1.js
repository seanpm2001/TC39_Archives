// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.2.2_A6.1_T1;
 * @section: 15.1.2.2;
 * @assertion: If S contains any character that is not a radix-R digit, 
 * then let Z be the substring of S consisting of all characters before 
 * the first such character; otherwise, let Z be S;
 * @description: Complex test. R in [2, 36];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.2.2_A6.1_T1",

path: "15.1.2.2",

description: "Complex test. R in [2, 36]",

test: function testcase() {
   //CHECK#
for (var i = 2; i <= 36; i++) {
  if (parseInt("10$1", i) !== i) {
    $ERROR('#' + i +': i = ' + i + 'parseInt("10$1", i) === i. Actual: ' + (parseInt("10$1", i)));
  }
}    

 }
});

