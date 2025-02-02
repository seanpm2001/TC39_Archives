// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.2.2.1_A1_T2;
* @section: 15.2.2.1;
* @assertion: When the Object constructor is called with no arguments the following steps are taken:
* (The argument value was not supplied or its type was Null or Undefined.)
*   i)	Create a new native ECMAScript object.
*  ii) 	The [[Prototype]] property of the newly constructed object is set to the Object prototype object.
* iii) 	The [[Class]] property of the newly constructed object is set to "Object".
*  iv) 	The newly constructed object has no [[Value]] property.
*   v) 	Return the newly created native object;
* @description: Creating new Object(void 0) and checking its properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.2.2.1_A1_T2",

path: "15.2.2.1",

description: "Creating new Object(void 0) and checking its properties",

test: function testcase() {
   //var foo = void 0;
var obj = new Object(void 0);

// CHECK#0
if (obj === undefined) {
  $ERROR('#0: new Object(undefined) return the newly created native object.');
}

// CHECK#1
if (obj.constructor !== Object) {
  $ERROR('#1: new Object(undefined) create a new native ECMAScript object');
}

// CHECK#2
if (!(Object.prototype.isPrototypeOf(obj))) {
  $ERROR('#2: when new Object(undefined) calls the [[Prototype]] property of the newly constructed object is set to the Object prototype object.');
}

// CHECK#3
var to_string_result = '[object '+ 'Object' +']';
if (obj.toString() !== to_string_result) {
  $ERROR('#3: when new Object(undefined) calls the [[Class]] property of the newly constructed object is set to "Object".');
}

// CHECK#4
if (obj.valueOf().toString() !== to_string_result.toString()) {
  $ERROR('#4: when new Object(undefined) calls the newly constructed object has no [[Value]] property.');
}


 }
});

