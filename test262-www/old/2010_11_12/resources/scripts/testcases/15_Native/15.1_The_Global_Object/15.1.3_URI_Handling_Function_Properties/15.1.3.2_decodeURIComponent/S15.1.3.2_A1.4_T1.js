// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.2_A1.4_T1;
 * @section: 15.1.3.2;
 * @assertion: If B = 110xxxxx (n = 2) and (k + 2) + 3 >= length, throw URIError;
 * @description: Complex tests. B = [0xC0 - 0xDF];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.2_A1.4_T1",

path: "15.1.3.2",

description: "Complex tests. B = [0xC0 - 0xDF]",

test: function testcase() {
   errorCount = 0;
count = 0;
var indexP;
var indexO = 0;

for (index = 0xC0; index <= 0xDF; index++) {
  count++; 
  str = "";
  result = true;
  for (len = 0; len < 3; len++) {
    hex = decimalToHexString(index);
    try {
      decodeURIComponent("%" + hex.substring(2) + str);      
    } catch (e) { 
      if ((e instanceof URIError) === true) continue;                
    }
    result = false;
    str = str + "1";
  }
  if (result !== true) {
    if (indexO === 0) { 
      indexO = index;
    } else {
      if ((index - indexP) !== 1) {             
        if ((indexP - indexO) !== 0) {
          var hexP = decimalToHexString(indexP);
          var hexO = decimalToHexString(indexO);
          $ERROR('#' + hexO + '-' + hexP + ' ');
        } 
        else {
          var hexP = decimalToHexString(indexP);
          $ERROR('#' + hexP + ' ');
        }  
        indexO = index;
      }         
    }
    indexP = index;
    errorCount++;      
  } 
}

if (errorCount > 0) {
  if ((indexP - indexO) !== 0) {
    var hexP = decimalToHexString(indexP);
    var hexO = decimalToHexString(indexO);
    $ERROR('#' + hexO + '-' + hexP + ' ');
  } else {
    var hexP = decimalToHexString(indexP);
    $ERROR('#' + hexP + ' ');
  }     
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count + ' ');
}

function decimalToHexString(n) {
  n = Number(n);
  var h = "";
  for (var i = 3; i >= 0; i--) {
    if (n >= Math.pow(16, i)) {
      var t = Math.floor(n / Math.pow(16, i));
      n -= t * Math.pow(16, i);
      if ( t >= 10 ) {
        if ( t == 10 ) { h += "A"; }
        if ( t == 11 ) { h += "B"; }
        if ( t == 12 ) { h += "C"; }
        if ( t == 13 ) { h += "D"; }
        if ( t == 14 ) { h += "E"; }
        if ( t == 15 ) { h += "F"; }
      } else {
        h += String(t);
      }
    } else {
      h += "0";
    }
  }
  return h;
}

 }
});

