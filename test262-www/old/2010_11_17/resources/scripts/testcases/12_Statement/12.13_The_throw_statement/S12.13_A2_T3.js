// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.13_A2_T3;
 * @section: 12.13;
 * @assertion: "throw Expression" returns (throw, GetValue(Result(1)), empty), where 1 evaluates Expression;
 * @description: Throwing boolean;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.13_A2_T3",

path: "12.13",

description: "Throwing boolean",

test: function testcase() {
   // CHECK#1
try{
  throw true;
}
catch(e){
  if (e!==true) $ERROR('#1: Exception ===true. Actual:  Exception ==='+ e  );
}

// CHECK#2
try{
  throw false;
}
catch(e){
  if (e!==false) $ERROR('#2: Exception ===false. Actual:  Exception ==='+ e  );
}

// CHECK#3
var b=false;
try{
  throw b;
}
catch(e){
  if (e!==false) $ERROR('#3: Exception ===false. Actual:  Exception ==='+ e  );
}

// CHECK#4
var b=true;
try{
  throw b;
}
catch(e){
  if (e!==true) $ERROR('#4: Exception ===true. Actual:  Exception ==='+ e  );
}

 }
});

