// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
* @name: S15.10.4.1_A8_T4;
* @section: 15.10.4.1;
* @assertion: let P be ToString(pattern) and let F be ToString(flags);
* @description: Pattern is {toString:void 0,valueOf:function(){return "[z-z]";}} and flags is {toString:void 0,valueOf:function(){return "mig";}};
*/


// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.10.4.1_A8_T4",

path: "15.10.4.1",

description: "Pattern is {toString:void 0,valueOf:function(){return \"[z-z]\";}} and flags is {toString:void 0,valueOf:function(){return \"mig\";}}",

test: function testcase() {
   __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]";}}, {toString:void 0,valueOf:function(){return "mig";}});

//CHECK#1
if (__re.ignoreCase !== true) {
	$ERROR('#1: __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]"; __re.ignoreCase === true. Actual: ' + (__re.ignoreCase));
}

//CHECK#2
if (__re.multiline !== true) {
	$ERROR('#2: __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]"; __re.multiline === true. Actual: ' + (__re.multiline));
}

//CHECK#3
if (__re.global !== true) {
	$ERROR('#3: __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]"; __re.global === true. Actual: ' + (__re.global));
}

//CHECK#4
if (__re.lastIndex !== 0) {
	$ERROR('#4: __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]"; __re.lastIndex === 0. Actual: ' + (__re.lastIndex));
}

//CHECK#5
if (typeof __re.source === "undefined") {
	$ERROR('#5: __re = new RegExp({toString:void 0,valueOf:function(){return "[z-z]"; typeof __re.source !== "undefined"');
}


 }
});

