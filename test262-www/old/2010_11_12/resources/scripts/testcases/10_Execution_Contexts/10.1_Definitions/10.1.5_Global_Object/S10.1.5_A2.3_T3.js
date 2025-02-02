// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S10.1.5_A2.3_T3;
 * @section: 10.1.5, 15.1;
 * @assertion: Global object properties have attributes { DontEnum };
 * @description: Global execution context - Constructor Properties;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S10.1.5_A2.3_T3",

path: "10.1.5, 15.1",

description: "Global execution context - Constructor Properties",

test: function testcase() {
   var evalStr = 
'//CHECK#1\n'+
'for (var x in this) {\n'+
'  if ( x === \'Object\' ) {\n'+
'    $ERROR("#1: \'Object\' have attribute DontEnum");\n'+
'  } else if ( x === \'Function\') {\n'+
'    $ERROR("#1: \'Function\' have attribute DontEnum");\n'+
'  } else if ( x === \'String\' ) {\n'+
'    $ERROR("#1: \'String\' have attribute DontEnum");\n'+
'  } else if ( x === \'Number\' ) {\n'+
'    $ERROR("#1: \'Number\' have attribute DontEnum");\n'+
'  } else if ( x === \'Array\' ) {\n'+
'    $ERROR("#1: \'Array\' have attribute DontEnum");\n'+
'  } else if ( x === \'Boolean\' ) {\n'+
'    $ERROR("#1: \'Boolean\' have attribute DontEnum");\n'+
'  } else if ( x === \'Date\' ) {\n'+
'    $ERROR("#1: \'Date\' have attribute DontEnum");\n'+
'  } else if ( x === \'RegExp\' ) {\n'+
'    $ERROR("#1: \'RegExp\' have attribute DontEnum");\n'+
'  } else if ( x === \'Error\' ) {\n'+
'    $ERROR("#1: \'Error\' have attribute DontEnum");\n'+
'  } else if ( x === \'EvalError\' ) {\n'+
'    $ERROR("#1: \'EvalError\' have attribute DontEnum");\n'+
'  } else if ( x === \'RangeError\' ) {\n'+
'    $ERROR("#1: \'RangeError\' have attribute DontEnum");\n'+
'  } else if ( x === \'ReferenceError\' ) {\n'+
'    $ERROR("#1: \'ReferenceError\' have attribute DontEnum");\n'+
'  } else if ( x === \'SyntaxError\' ) {\n'+
'    $ERROR("#1: \'SyntaxError\' have attribute DontEnum");\n'+
'  } else if ( x === \'TypeError\' ) {\n'+
'    $ERROR("#1: \'TypeError\' have attribute DontEnum");\n'+
'  } else if ( x === \'URIError\' ) {\n'+
'    $ERROR("#1: \'URIError\' have attribute DontEnum");\n'+
'  }\n'+
'}\n';

eval(evalStr);

 }
});

