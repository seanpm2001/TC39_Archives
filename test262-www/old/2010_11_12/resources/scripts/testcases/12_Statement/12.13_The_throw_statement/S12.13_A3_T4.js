// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A3_T4;
 * @section: 12.13;
 * @assertion: 1. Evaluate Expression;
 * @description: Evaluating array expression;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A3_T4",

path: "12.13",

description: "Evaluating array expression",

test: function testcase() {
   var mycars = new Array();
mycars[0] = "Saab";
mycars[1] = "Volvo";
mycars[2] = "BMW";

var mycars2 = new Array();
mycars2[0] = "Mercedes";
mycars2[1] = "Jeep";
mycars2[2] = "Suzuki";

// CHECK#1
try{
  throw mycars.concat(mycars2);
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars[i]) $ERROR('#1.'+i+': Exception['+i+']===mycars['+i+'](operation .concat). Actual:  Exception['+i+']==='+ e[i] );
  }
  for (var i=3;i<6;i++){
    if (e[i]!==mycars2[i-3]) $ERROR('#1.'+i+': Exception['+i+']===mycars2['+(i-3)+'](operation .concat). Actual:  Exception['+i+']==='+ e[i] );
  }
}

// CHECK#2
try{
  throw new Array("Mercedes","Jeep","Suzuki");
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars2[i]) $ERROR('#2.'+i+': Exception['+i+']===mycars2['+i+'](operation new). Actual:  Exception['+i+']==='+ e[i] );
  }
}

// CHECK#3
try{
  throw mycars.concat(new Array("Mercedes","Jeep","Suzuki"));
}
catch(e){
  for (var i=0;i<3;i++){
    if (e[i]!==mycars[i]) $ERROR('#3.'+i+': Exception['+i+']===mycars['+i+'](operation .concat(new)). Actual:  Exception['+i+']==='+ e[i] );
  }
  for (var i=3;i<6;i++){
    if (e[i]!==mycars2[i-3]) $ERROR('#3.'+i+': Exception['+i+']===mycars2['+(i-3)+'](operation .concat(new)). Actual:  Exception['+i+']==='+ e[i] );
  }
}

 }
});

