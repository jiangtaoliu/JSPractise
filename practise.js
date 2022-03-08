let starttime = Date.now();
console.log('starttime', starttime);
var a;
a = 1;

console.log("a:", a);


var b = 1;
b = 'hello';

console.log("b:", b);

var x = 1;
var x = 2;
console.log("x:", x);


console.log("0.1+0.2=", 0.1+0.2);




var o1 = {};
var o2 = o1;

o1.a = 1;
console.log(o2.a); // 1

o2.b = 2;
console.log(o1.b); // 2


const now = Date.now();
console.log('now', now);

console.log('now-starttime', now-starttime);


let aaa;
let flag = false;
function throwit() {
    throw new Error('');
  }
function catchit() {
    try {
        aaa = 'sss';
        //throwit();
    } catch(e) {
        console.log(e.stack); // print stack trace
        flag = true;
    }
}
catchit()
console.log('flag', flag);
console.log('aaa', aaa);
if ( !aaa || !aaa.includes('sss') || flag) {
    console.log('yes');
}