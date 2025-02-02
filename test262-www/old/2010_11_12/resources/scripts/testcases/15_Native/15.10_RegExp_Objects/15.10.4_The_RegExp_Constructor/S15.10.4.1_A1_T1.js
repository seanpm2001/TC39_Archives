// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A1_T1;
* @section: 15.10.4.1;
* @assertion: If pattern is an object R whose [[Class]] property is "RegExp" and flags is undefined, then let P be
* the pattern used to construct R and let F be the flags used to construct R;
* @description: Pattern is /./i and RegExp is new RegExp(pattern);
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A1_T1",

path: "15.10.4.1",

description: "Pattern is /./i and RegExp is new RegExp(pattern)",

test: function testcase() {
   __pattern = /./i;
__re = new RegExp(__pattern); 

//CHECK#1
if (__re.source !== __pattern.source) {
  $ERROR('#1: __pattern = /./i; __re = new RegExp(__pattern); __re.source === __pattern.source. Actual: '+ (__re.source));
}

//CHECK#2
if (__re.multiline !== __pattern.multiline) {
  $ERROR('#2: __pattern = /./i; __re = new RegExp(__pattern); __re.multiline === __pattern.multiline. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== __pattern.global) {
  $ERROR('#3: __pattern = /./i; __re = new RegExp(__pattern); __re.global === __pattern.global. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.ignoreCase !== __pattern.ignoreCase) {
  $ERROR('#4: __pattern = /./i; __re = new RegExp(__pattern); __re.ignoreCase === __pattern.ignoreCase. Actual: ' + (__re.ignoreCase));
}

 }
});

