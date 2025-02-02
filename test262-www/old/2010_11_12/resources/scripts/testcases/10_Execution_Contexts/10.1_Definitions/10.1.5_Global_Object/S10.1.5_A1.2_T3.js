// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A1.2_T3;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object has properties such as built-in objects such as 
 * Math, String, Date, parseInt, etc; 
 * @description: Function execution context - Constructor Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A1.2_T3",

path: "10.1.5, 15.1",

description: "Function execution context - Constructor Properties",

test: function testcase() {
   function test() {
  //CHECK#13
  if ( Object === null ) {
    $ERROR("#13: Object === null");
  }

  //CHECK#14
  if ( Function === null ) {
    $ERROR("#14: Function === null");
  }

  //CHECK#15
  if ( String === null ) {
    $ERROR("#15: String === null");
  }

  //CHECK#16
  if ( Number === null ) {
    $ERROR("#16: Function === null");
  }

  //CHECK#17
  if ( Array === null ) {
    $ERROR("#17: Array === null");
  }

  //CHECK#18
  if ( Boolean === null ) {
    $ERROR("#20: Boolean === null");
  }

  //CHECK#18
  if ( Date === null ) {
    $ERROR("#18: Date === null");
  }

  //CHECK#19
  if ( RegExp === null ) {
    $ERROR("#19: RegExp === null");
  }

  //CHECK#20
  if ( Error === null ) {
    $ERROR("#20: Error === null");
  }

  //CHECK#21
  if ( EvalError === null ) {
    $ERROR("#21: EvalError === null");
  }

  //CHECK#22
  if ( RangeError === null ) {
    $ERROR("#22: RangeError === null");
  }

  //CHECK#23
  if ( ReferenceError === null ) {
    $ERROR("#23: ReferenceError === null");
  }

  //CHECK#24
  if ( SyntaxError === null ) {
    $ERROR("#24: SyntaxError === null");
  }

  //CHECK#25
  if ( TypeError === null ) {
    $ERROR("#25: TypeError === null");
  }

  //CHECK#26
  if ( URIError === null ) {
    $ERROR("#26: URIError === null");
  }
}

test();

 }
});

