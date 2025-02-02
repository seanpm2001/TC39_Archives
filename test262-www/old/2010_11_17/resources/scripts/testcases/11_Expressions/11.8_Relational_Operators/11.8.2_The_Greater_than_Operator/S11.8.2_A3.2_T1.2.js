// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.8.2_A3.2_T1.2;
 * @section: 11.8.2;
 * @assertion: If Type(Primitive(x)) is String and Type(Primitive(y)) is String, then operator x > y returns ToString(x) > ToString(y); 
 * @description: Type(Primitive(x)) and Type(Primitive(y)) vary between Object object and Function object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.8.2_A3.2_T1.2",

path: "11.8.2",

description: "Type(Primitive(x)) and Type(Primitive(y)) vary between Object object and Function object",

test: function testcase() {
   //CHECK#1
if (({} > function(){return 1}) !== ({}.toString() > function(){return 1}.toString())) {
  $ERROR('#1: ({} > function(){return 1}) === ({}.toString() > function(){return 1}.toString())');
}

//CHECK#2
if ((function(){return 1} > {}) !== (function(){return 1}.toString() > {}.toString())) {
  $ERROR('#2: (function(){return 1} > {}) === (function(){return 1}.toString() > {}.toString())');
}

//CHECK#3
if ((function(){return 1} > function(){return 1}) !== (function(){return 1}.toString() > function(){return 1}.toString())) {
  $ERROR('#3: (function(){return 1} > function(){return 1}) === (function(){return 1}.toString() > function(){return 1}.toString())');
}

//CHECK#4
if (({} > {}) !== ({}.toString() > {}.toString())) {
  $ERROR('#4: ({} > {}) === ({}.toString() > {}.toString())');
}

 }
});

