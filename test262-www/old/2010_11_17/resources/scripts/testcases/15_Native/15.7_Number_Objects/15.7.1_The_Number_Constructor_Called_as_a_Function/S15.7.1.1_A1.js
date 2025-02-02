// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S15.7.1.1_A1;
 * @section: 15.7.1.1;
 * @assertion: Number([value]) returns a number value (not a Number object) computed by ToNumber(value) if value was supplied;
 * @description: Used values "10", 10, new String("10"), new Object(10) and "abc";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.7.1.1_A1",

path: "15.7.1.1",

description: "Used values \"10\", 10, new String(\"10\"), new Object(10) and \"abc\"",

test: function testcase() {
   //CHECK#1
if( typeof Number("10") !== "number" ) {
  $ERROR('#1: typeof Number("10") should be "number", actual is "'+typeof Number("10")+'"');
}

//CHECK#2
if( typeof Number(10) !== "number" ) {
  $ERROR('#2: typeof Number(10) should be "number", actual is "'+typeof Number(10)+'"');
}

//CHECK#3
if( typeof Number(new String("10")) !== "number" ) {
  $ERROR('#3: typeof Number(new String("10")) should be "number", actual is "'+typeof Number(new String("10"))+'"');
}

//CHECK#4
if( typeof Number(new Object(10)) !== "number" ) {
  $ERROR('#4: typeof Number(new Object(10)) should be "number", actual is "'+typeof Number(new Object(10))+'"');
}

//CHECK #5
if( typeof Number("abc") !== "number" ) {
  $ERROR('#5: typeof Number("abc") should be "number", actual is "'+typeof Number("abc")+'"');
}

//CHECK #6
if( !isNaN(Number("abc"))) {
	$ERROR('#6: Number("abc")) should be NaN');
}

 }
});

