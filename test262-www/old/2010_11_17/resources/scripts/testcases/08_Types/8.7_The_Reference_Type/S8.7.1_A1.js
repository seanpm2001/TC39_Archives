// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S8.7.1_A1;
* @section: 8.7.1, 11.4.1;
* @assertion: Delete operator deletes pure property, so it returns true to be applyed to this.property;
* @description: Try to delete this.y, where y is this.y=1; 
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S8.7.1_A1",

path: "8.7.1, 11.4.1",

description: "Try to delete this.y, where y is this.y=1",

test: function testcase() {
   this.y = 1;
//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if((delete this.y) !== true){
  $ERROR('#1: this.y = 1; (delete this.y) === true. Actual: ' + ((delete this.y)));
};
//
//////////////////////////////////////////////////////////////////////////////


//////////////////////////////////////////////////////////////////////////////
//CHECK#2
if (this.y !== undefined){
  $ERROR('#2: this.y = 1; (delete this.y) === true; this.y === undefined. Actual: ' + (this.y));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

