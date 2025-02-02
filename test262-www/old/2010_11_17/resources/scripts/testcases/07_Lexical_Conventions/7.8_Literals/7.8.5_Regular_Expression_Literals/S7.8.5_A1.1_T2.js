// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S7.8.5_A1.1_T2;
 * @section: 7.8.5, 15.10.1;
 * @assertion: RegularExpressionFirstChar :: NonTerminator but not * or \ or /, 
 * RegularExpressionChars :: [empty], RegularExpressionFlags :: [empty];  
 * @description: Complex test with eval, using syntax pattern;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S7.8.5_A1.1_T2",

path: "7.8.5, 15.10.1",

description: "Complex test with eval, using syntax pattern",

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
	      var Elimination = 
          ((uu === "002A") || (uu === "002F") || (uu === "005C") || (uu === "002B") || 
           (uu === "003F") || (uu === "0028") || (uu === "0029") || 
           (uu === "005B") || (uu === "005D") || (uu === "007B") || (uu === "007D"));
           /* 
                * \u002A     / \u002F     \ \u005C     + \u002B
                ? \u003F     ( \u0028     ) \u0029
                [ \u005B     ] \u005D     { \u007B     } \u007D          
           */
          var LineTerminator = ((uu === "000A") || (uu === "000D") || (uu === "2028") || (uu === "2029"));                      
          if ((Elimination || LineTerminator ) === false) {              
            var xx = String.fromCharCode("0x" + uu);          
            var pattern = eval("/" + xx + "/");  
            if (pattern.source !== xx) {
              $ERROR('#' + uu + ' ');
              errorCount++;
            }  
          } else {
            count--;
          }                     
        } catch (e) {         
          $ERROR('#' + uu + ' ');
          errorCount++;
        }
        count++;
      }  
    }
  }
}

if (errorCount > 0) {    
  $ERROR('Total error: ' + errorCount + ' bad Regular Expression First Char in ' + count);
} 

 }
});

