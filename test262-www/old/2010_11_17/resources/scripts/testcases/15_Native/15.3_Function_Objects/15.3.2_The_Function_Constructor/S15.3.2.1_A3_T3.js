// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.3.2.1_A3_T3;
* @section: 15.3.2.1, 13.2;
* @assertion: When the Function constructor is called with arguments p, body the following steps are taken:
* i) Let Result(i) be the first argument
* ii) Let P be ToString(Result(i))
* iii) Call ToString(body)
* iv) If P is not parsable as a FormalParameterList_opt then throw a SyntaxError exception
* v) If body is not parsable as FunctionBody then throw a SyntaxError exception
* vi) Create a new Function object as specified in 13.2 with parameters specified by parsing P as a FormalParameterListopt and body specified by parsing body as a FunctionBody
* Pass in a scope chain consisting of the global object as the Scope parameter
* vii) Return Result(vi);
* @description: Values of the function constructor arguments are "{toString:function(){p=1;return "a";}}" and "{toString:function(){throw "body";}}";
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.3.2.1_A3_T3",

path: "15.3.2.1, 13.2",

description: "Values of the function constructor arguments are \"{toString:function(){p=1;return \"a\";}}\" and \"{toString:function(){throw \"body\";}}\"",

test: function testcase() {
   var p = {toString:function(){p=1;return "a";}};
var body = {toString:function(){throw "body";}};

//CHECK#1
try {
  var f = new Function(p,body);
  $FAIL('#1: test failed');
} catch (e) {
  if (e !== "body") {
  	$ERROR('#1.1: i) Let Result(i) be the first argument; ii) Let P be ToString(Result(i))');
  }
}

//CHECK#2
if (p !== 1) {
  $ERROR('#2: i) Let Result(i) be the first argument; ii) Let P be ToString(Result(i))');
}




 }
});

