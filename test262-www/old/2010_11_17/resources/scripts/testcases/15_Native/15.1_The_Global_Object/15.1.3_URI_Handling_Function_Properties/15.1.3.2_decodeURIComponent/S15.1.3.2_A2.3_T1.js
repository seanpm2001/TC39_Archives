// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.1.3.2_A2.3_T1;
 * @section: 15.1.3.2;
 * @assertion: If B1 = 110xxxxx ([0xC0 - 0xDF]), B2 = 10xxxxxx ([0x80 - 0xBF), without B1 = [0xC0, 0xC1], return UTF8(B1, B2);
 * @description: Complex tests, use RFC 3629;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.1.3.2_A2.3_T1",

path: "15.1.3.2",

description: "Complex tests, use RFC 3629",

test: function testcase() {
   errorCount = 0;
count = 0;
var indexP;
var indexO = 0;

for (indexB1 = 0xC2; indexB1 <= 0xDF; indexB1++) {     
  var hexB1 = decimalToHexString(indexB1);
  for (indexB2 = 0x80; indexB2 <= 0xBF; indexB2++) {
    count++;
    var hexB2 = decimalToHexString(indexB2);
    var index = (indexB1 & 0x1F) * 0x40 + (indexB2 & 0x3F);  
    try {
      if (decodeURIComponent("%" + hexB1.substring(2) + "%" + hexB2.substring(2)) === String.fromCharCode(index)) continue;
    } catch (e) {}   
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

