// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A1_T4;
* @section: 15.10.4.1;
* @assertion: If pattern is an object R whose [[Class]] property is "RegExp" and flags is undefined, then let P be
* the pattern used to construct R and let F be the flags used to construct R;
* @description: Pattern is new RegExp and RegExp is new RegExp(pattern,undefined);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A1_T4",

path: "15.10.4.1",

description: "Pattern is new RegExp and RegExp is new RegExp(pattern,undefined)",

test: function testcase() {
   __pattern = new RegExp;
__re = new RegExp(__pattern, undefined);

//CHECK#1
if (__re.source !== __pattern.source) {
  $ERROR('#1: __pattern = new RegExp; __re = new RegExp(__pattern, undefined); __re.source === __pattern.source. Actual: '+ (__re.source));
}

//CHECK#2
if (__re.multiline !== __pattern.multiline) {
  $ERROR('#2: __pattern = new RegExp; __re = new RegExp(__pattern, undefined); __re.multiline === __pattern.multiline. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== __pattern.global) {
  $ERROR('#3: __pattern = new RegExp; __re = new RegExp(__pattern, undefined); __re.global === __pattern.global. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== __pattern.ignoreCase) {
  $ERROR('#4: __pattern = new RegExp; __re = new RegExp(__pattern, undefined); __re.ignoreCase === __pattern.ignoreCase. Actual: ' + (__re.ignoreCase));
}


 }
});

