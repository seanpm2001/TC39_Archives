// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S13_A13_T3;
* @section: 13;
* @assertion: Deleting arguments[i] leads to breaking the connection to local reference;
* @description: Changing argument value, deleting the argument and then defining a new value for arguments[i];
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S13_A13_T3",

path: "13",

description: "Changing argument value, deleting the argument and then defining a new value for arguments[i]",

test: function testcase() {
   function __func(__arg){
  __arg = 2;
  delete arguments[0];
  if (arguments[0] !== undefined) {
    $ERROR('#1.1: arguments[0] === undefined');
  }
  arguments[0] = "A";
  if (arguments[0] !== "A") {
    $ERROR('#1.2: arguments[0] === "A"');
  }
  return __arg;
}

//////////////////////////////////////////////////////////////////////////////
//CHECK#1
if (__func(1) !== 2) {
	$ERROR('#1.3: __func(1) === 2. Actual: __func(1) ==='+__func(1));
}
//
//////////////////////////////////////////////////////////////////////////////

 }
});

