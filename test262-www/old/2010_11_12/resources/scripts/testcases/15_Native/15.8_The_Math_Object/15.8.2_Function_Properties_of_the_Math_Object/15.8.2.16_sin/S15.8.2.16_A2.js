/**
 * @name: S15.8.2.16_A2;
 * @section: 15.8.2.16;
 * @assertion: If x is +0, Math.sin(x) is +0;
 * @description: Checking if Math.sin(+0) equals to +0;
 */
 

// Converted for Test262 from original Sputnik source

ES5Harness.registerTest( {
id: "S15.8.2.16_A2",

path: "15.8.2.16",

description: "Checking if Math.sin(+0) equals to +0",

test: function testcase() {
   // CHECK#1
var x = +0;
if (Math.sin(x) !== +0)
{
	$ERROR("#1: 'var x = +0; Math.sin(x) !== +0'");
}
 }
});

