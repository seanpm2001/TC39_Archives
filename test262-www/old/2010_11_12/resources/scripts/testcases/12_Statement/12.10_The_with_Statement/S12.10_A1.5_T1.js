// Copyright 2009 the Sputnik authors.  All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/**
 * @name: S12.10_A1.5_T1;
 * @section: 12.10;
 * @assertion: The with statement adds a computed object to the front of the
 * scope chain of the current execution context;
 * @description: Using "with" statement within "for-in" statement, leading to normal completion;
 * @strict_mode_negative
 */

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S12.10_A1.5_T1",

path: "12.10",

description: "Using \"with\" statement within \"for-in\" statement, leading to normal completion",

test: function testcase() {
   this.p1 = 1;
this.p2 = 2;
this.p3 = 3;
var result = "result";
var myObj = {p1: 'a', 
             p2: 'b', 
             p3: 'c',
             value: 'myObj_value',
             valueOf : function(){return 'obj_valueOf';},
             parseInt : function(){return 'obj_parseInt';},
             NaN : 'obj_NaN',
             Infinity : 'obj_Infinity',
             eval     : function(){return 'obj_eval';},
             parseFloat : function(){return 'obj_parseFloat';},
             isNaN      : function(){return 'obj_isNaN';},
             isFinite   : function(){return 'obj_isFinite';}
}
var del;
var st_p1 = "p1";
var st_p2 = "p2";
var st_p3 = "p3";
var st_parseInt = "parseInt";
var st_NaN = "NaN";
var st_Infinity = "Infinity";
var st_eval = "eval";
var st_parseFloat = "parseFloat";
var st_isNaN = "isNaN";
var st_isFinite = "isFinite";

for(var prop in myObj){
  with(myObj){
    if(prop === 'p1') {
      st_p1 = p1;
      p1 = 'x1';
    }
    if(prop === 'p2') {
      st_p2 = p2;
      this.p2 = 'x2';
    }
    if(prop === 'p3') {
      st_p3 = p3;
      del = delete p3;
    }
    if(prop === 'parseInt') st_parseInt = parseInt;
    if(prop === 'NaN') st_NaN = NaN;
    if(prop === 'Infinity') st_Infinity = Infinity;
    if(prop === 'eval') st_eval = eval;
    if(prop === 'parseFloat') st_parseFloat = parseFloat;
    if(prop === 'isNaN') st_isNaN = isNaN;
    if(prop === 'isFinite') st_isFinite = isFinite;
    var p4 = 'x4';
    p5 = 'x5';
    var value = 'value';
  }
}

if(!(p1 === 1)){
  $ERROR('#1: p1 === 1. Actual:  p1 ==='+ p1  );
}

if(!(p2 === "x2")){
  $ERROR('#2: p2 === "x2". Actual:  p2 ==='+ p2  );
}

if(!(p3 === 3)){
  $ERROR('#3: p3 === 3. Actual:  p3 ==='+ p3  );
}

if(!(p4 === "x4")){
  $ERROR('#4: p4 === "x4". Actual:  p4 ==='+ p4  );
}

if(!(p5 === "x5")){
  $ERROR('#5: p5 === "x5". Actual:  p5 ==='+ p5  );
}

if(!(myObj.p1 === "x1")){
  $ERROR('#6: myObj.p1 === "x1". Actual:  myObj.p1 ==='+ myObj.p1  );
}

if(!(myObj.p2 === "b")){
  $ERROR('#7: myObj.p2 === "b". Actual:  myObj.p2 ==='+ myObj.p2  );
}

if(!(myObj.p3 === undefined)){
  $ERROR('#8: myObj.p3 === undefined. Actual:  myObj.p3 ==='+ myObj.p3  );
}

if(!(myObj.p4 === undefined)){
  $ERROR('#9: myObj.p4 === undefined. Actual:  myObj.p4 ==='+ myObj.p4  );
}

if(!(myObj.p5 === undefined)){
  $ERROR('#10: myObj.p5 === undefined. Actual:  myObj.p5 ==='+ myObj.p5  );
}

if(!(st_parseInt !== parseInt)){
  $ERROR('#11: myObj.parseInt !== parseInt');
}

if(!(st_NaN === "obj_NaN")){
  $ERROR('#12: myObj.NaN !== NaN');
}

if(!(st_Infinity !== Infinity)){
  $ERROR('#13: myObj.Infinity !== Infinity');
}

if(!(st_eval !== eval)){
  $ERROR('#14: myObj.eval !== eval');
}

if(!(st_parseFloat !== parseFloat)){
  $ERROR('#15: myObj.parseFloat !== parseFloat');
}

if(!(st_isNaN !== isNaN)){
  $ERROR('#16: myObj.isNaN !== isNaN');
}

if(!(st_isFinite !== isFinite)){
  $ERROR('#17: myObj.isFinite !== isFinite');
}

if(!(value === undefined)){
  $ERROR('#18: value === undefined. Actual:  value ==='+ value  );
}

if(!(myObj.value === "value")){
  $ERROR('#19: myObj.value === "value". Actual:  myObj.value ==='+ myObj.value  );
}

 }
});

