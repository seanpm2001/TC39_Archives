// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.6.2_A1_T4;
* @section: 15.10.6.2;
* @assertion: RegExp.prototype.exec(string) Performs a regular expression match of ToString(string) against the regular expression and 
* returns an Array object containing the results of the match, or null if the string did not match;
* @description: String is {toString:function(){return "abcdefghi";}} and RegExp is /a[a-z]{2,4}?/;
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.6.2_A1_T4",

path: "15.10.6.2",

description: "String is {toString:function(){return \"abcdefghi\";}} and RegExp is /a[a-z]{2,4}?/",

test: function testcase() {
   __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}});

__expected = ["abc"];
__expected.index=0;
__expected.input="abcdefghi";

//CHECK#0
if ((__executed instanceof Array) !== true) {
	$ERROR('#0: __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}}); (__executed instanceof Array) === true');
}

//CHECK#1
if (__executed.length !== __expected.length) {
  $ERROR('#1: __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}}); __executed.length === ' + __expected.length + '. Actual: ' + __executed.length);
}

//CHECK#2
if (__executed.index !== __expected.index) {
  $ERROR('#2: __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}}); __executed.index === ' + __expected.index + '. Actual: ' + __executed.index);
}

//CHECK#3
if (__executed.input !== __expected.input) {
  $ERROR('#3: __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}}); __executed.input === ' + __expected.input + '. Actual: ' + __executed.input);
}

//CHECK#4
for(var index=0; index<__expected.length; index++) {
  if (__executed[index] !== __expected[index]) {
    $ERROR('#4: __executed = /a[a-z]{2,4}?/.exec({toString:function(){return "abcdefghi"}}); __executed[' + index + '] === ' + __expected[index] + '. Actual: ' + __executed[index]);
  }
}


 }
});

