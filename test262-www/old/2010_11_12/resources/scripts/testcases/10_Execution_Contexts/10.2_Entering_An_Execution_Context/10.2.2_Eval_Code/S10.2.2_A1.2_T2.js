// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.2.2_A1.2_T2;
 * @section: 10.2.2;
 * @assertion: The scope chain is initialised to contain the same objects, 
 * in the same order, as the calling context's scope chain;
 * @description: eval within global execution context;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.2.2_A1.2_T2",

path: "10.2.2",

description: "eval within global execution context",

test: function testcase() {
   function f(){
  var i;
  var j;
  str1 = '';
  str2 = '';
  
  for(i in this){
    str1+=i;
  }
  
  eval('for(j in this){\nstr2+=j;\n}');

  return (str1 === str2);
  var x = 1;
  var y = 2;
}

if(!f()){
  $ERROR("#1: scope chain must contain same objects in the same order as the calling context");
}

 }
});

