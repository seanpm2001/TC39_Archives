// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S11.9.5_A7;
 * @section: 11.9.5, 11.9.6;
 * @assertion: Type(x) and Type(y) are Object-s. 
 * Return false, if x and y are references to the same Object; otherwise, return true;
 * @description: Checking Boolean object, Number object, String object, Object object;
 */


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S11.9.5_A7",

path: "11.9.5, 11.9.6",

description: "Checking Boolean object, Number object, String object, Object object",

test: function testcase() {
   //CHECK#1
if (!(new Object() !== new Object())) {
  $ERROR('#1: new Object() !== new Object()');
}

//CHECK#2
if (!(new Object(true) !== new Object(true))) {
  $ERROR('#2: new Object() !== new Object()');
}

//CHECK#3
if (!(new Object(false) !== new Object(false))) {
  $ERROR('#3: new Object() !== new Object()');
}

//CHECK#4
if (!(new Object(+0) !== new Object(-0))) {
  $ERROR('#4: new Object(+0) !== new Object(-0)');
}

//CHECK#5
x = {}; 
y = x;
if (x !== y) {
  $ERROR('#5: x = {}; y = x; x === y');
}

//CHECK#6
if (!(new Boolean(true) !== new Number(1))) {
  $ERROR('#6 new Boolean(true) !== new Number(1)');
}

//CHECK#7
if (!(new Number(1) !== new String("1"))) {
  $ERROR('#7: new Number(1) !== new String("1")');
}

//CHECK#8
if (!(new String("1") !== new Boolean(true))) {
  $ERROR('#8: new String("x") !== new Boolean(true)');
}



 }
});

