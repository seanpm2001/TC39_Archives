// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.3_A4.1_T2;
 * @section: 9.3, 11.6.1;
 * @assertion: Result of number conversion from number value equals to the input argument (no conversion);
 * @description: Some numbers including Number.MAX_VALUE and Number.MIN_VALUE are converted to Number with implicit transformation;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.3_A4.1_T2",

path: "9.3, 11.6.1",

description: "Some numbers including Number.MAX_VALUE and Number.MIN_VALUE are converted to Number with implicit transformation",

test: function testcase() {
   // CHECK#1
if (+(13) !== 13) {
  $ERROR('#1: +(13) === 13. Actual: ' + (+(13)));
}

// CHECK#2
if (+(-13) !== -13) { 
  $ERROR('#2: +(-13) === -13. Actual: ' + (+(-13)));
}

// CHECK#3
if (+(1.3) !== 1.3) {
  $ERROR('#3: +(1.3) === 1.3. Actual: ' + (+(1.3)));
}

// CHECK#4
if (+(-1.3) !== -1.3) {
  $ERROR('#4: +(-1.3) === -1.3. Actual: ' + (+(-1.3)));
}

// CHECK#5
if (+(Number.MAX_VALUE) !== 1.7976931348623157e308) {
  $ERROR('#5: +(Number.MAX_VALUE) === 1.7976931348623157e308. Actual: ' + (+(Number.MAX_VALUE)));
}

// CHECK#6
if (+(Number.MIN_VALUE) !== 5e-324) {
  $ERROR('#6: +(Number.MIN_VALUE) === 5e-324. Actual: ' + (+(Number.MIN_VALUE)));
}	

 }
});

