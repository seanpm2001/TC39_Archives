// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.14_A9_T5;
 * @section: 12.14;
 * @assertion: "try" with "catch" or "finally" statement within/without an "do while" statement;
 * @description: Checking if exceptions are thrown correctly from wherever of loop body;
 */



// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.14_A9_T5",

path: "12.14",

description: "Checking if exceptions are thrown correctly from wherever of loop body",

test: function testcase() {
   // CHECK#1
var c=0, i=0;
var fin=0;
do{
  i+=1;
  try{
    if(c===0){
      throw "ex1";
      $ERROR('#1.1: throw "ex1" lead to throwing exception');
    }
    c+=2;
    if(c===1){
      throw "ex2";
      $ERROR('#1.2: throw "ex2" lead to throwing exception');
    }
  }
  catch(er1){
    c-=1;
    continue;
    $ERROR('#1.3: "try catch{continue} finally" must work correctly');
  }
  finally{
    fin+=1;
  }
}
while(i<10);
if(fin!==10){
  $ERROR('#1.4: "finally" block must be evaluated');
}


 }
});

