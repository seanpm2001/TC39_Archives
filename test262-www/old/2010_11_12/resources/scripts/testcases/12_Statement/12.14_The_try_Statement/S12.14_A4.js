// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A4;
 * @section: 12.14;
 * @assertion: Sanity test for "catch(Indetifier) statement";
 * @description: Checking if deleting an exception fails;
  */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A4",

path: "12.14",

description: "Checking if deleting an exception fails",

test: function testcase() {
   // CHECK#1
try {
  throw "catchme";	
  $ERROR('#1.1: throw "catchme" lead to throwing exception');
}
catch (e) {
  if (delete e){
    $ERROR('#1.2: Exception has DontDelete property');
  }
  if (e!=="catchme") {
    $ERROR('#1.3: Exception === "catchme". Actual:  Exception ==='+ e  );
  }
}

// CHECK#2
try {
  throw "catchme";	
  $ERROR('#2.1: throw "catchme" lead to throwing exception');
}
catch(e){}
try{
  e;
  $ERROR('#2.2: Deleting catching exception after ending "catch" block');
}
catch(err){}

 }
});

