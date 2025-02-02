// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.4_A5;
 * @section: 7.4;
 * @assertion: Single line comments can contain any Unicode character without Line Terminators;
 * @description: //var " + xx + "yy = -1", insert instead of xx all Unicode characters;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.4_A5",

path: "7.4",

description: "//var \" + xx + \"yy = -1\", insert instead of xx all Unicode characters",

test: function testcase() {
   //CHECK
errorCount = 0;
count = 0;
var hex = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F"];
for (i1 = 0; i1 < 16; i1++) {
  for (i2 = 0; i2 < 16; i2++) {
    for (i3 = 0; i3 < 16; i3++) {
      for (i4 = 0; i4 < 16; i4++) {
        try {    
          var uu = hex[i1] + hex[i2] + hex[i3] + hex[i4];
          var xx = String.fromCharCode("0x" + uu);
          var LineTerminators = ((uu === "000A") || (uu === "000D") || (uu === "2028") || (uu === "2029"));
          var yy = 0;     
          eval("//var " + xx + "yy = -1");          
          if (LineTerminators !== true) { 
            if (yy !== 0) {
              $ERROR('#' + uu + ' ');
              errorCount++;
            }
          } else {
            if (yy !== -1) {
              $ERROR('#' + uu + ' ');
              errorCount++;
            }
          }
        } catch (e){
          $ERROR('#' + uu + ' ');
          errorCount++;
        }
        count++;
      }  
    }
  }
}

if (errorCount > 0) {    
  $ERROR('Total error: ' + errorCount + ' bad Unicode character in ' + count);
}

 }
});

