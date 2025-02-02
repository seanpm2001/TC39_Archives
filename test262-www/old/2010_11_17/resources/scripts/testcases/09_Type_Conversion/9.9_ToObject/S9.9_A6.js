// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S9.9_A6;
 * @section: 9.9;
 * @assertion: ToObject conversion from Object: The result is the input 
 * argument (no conversion);
 * @description: Converting from Objects to Object; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S9.9_A6",

path: "9.9",

description: "Converting from Objects to Object",

test: function testcase() {
   function MyObject( val ) {
    this.value = val;
    this.valueOf = function (){ return this.value; }
}

var x = new MyObject(1);
var y = Object(x);

// CHECK#1
if (y.valueOf() !== x.valueOf()){
  $ERROR('#1: Object(obj).valueOf() === obj.valueOf(). Actual: ' + (Object(obj).valueOf()));
}

// CHECK#2
if (typeof y !== typeof x){
  $ERROR('#2: typeof Object(obj) === typeof obj. Actual: ' + (typeof Object(obj)));
}

// CHECK#3
if (y.constructor.prototype !== x.constructor.prototype){
  $ERROR('#3: Object(obj).constructor.prototype === obj.constructor.prototype. Actual: ' + (Object(obj).constructor.prototype));
}


// CHECK#4
if (y !== x){
  $ERROR('#4: Object(obj) === obj');
}

 }
});

