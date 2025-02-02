// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S8.5_A13_T2;
 * @section: 8.5, 7.8.3;
 * @assertion: Finite nonzero values  that are Normalised having the form s*m*2**e
 *  where s is +1 or -1, m is a positive integer less than 2**53 but not
 *  less than s**52 and e is an integer ranging from -1074 to 971;
 * @description: Finite Non zero values where e is 971; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.5_A13_T2",

path: "8.5, 7.8.3",

description: "Finite Non zero values where e is 971",

test: function testcase() {
   //CHECK #1 
if ((1*(Math.pow(2,52))*(Math.pow(2,971))) !== 8.98846567431158e+307){
  $ERROR('#1: (1*(Math.pow(2,52))*(Math.pow(2,971))) === 8.98846567431158e+307. Actual: ' + ((1*(Math.pow(2,52))*(Math.pow(2,971)))));
}

//CHECK #2 
if ((1*((Math.pow(2,53))-1)*(Math.pow(2,971))) !== 1.7976931348623157e+308){
  $ERROR('#2: (1*((Math.pow(2,53))-1)*(Math.pow(2,971))) === 1.7976931348623157e+308. Actual: ' + ((1*((Math.pow(2,53))-1)*(Math.pow(2,971)))));
}

//CHECK #3 
if ((-1*(Math.pow(2,52))*(Math.pow(2,971))) !== -8.98846567431158e+307){
  $ERROR('#3: (-1*(Math.pow(2,52))*(Math.pow(2,971))) === -8.98846567431158e+307. Actual: ' + ((-1*(Math.pow(2,52))*(Math.pow(2,971)))));
}

 }
});

