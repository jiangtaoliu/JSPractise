var foo = 'bar';

var obj = {
  foo: 1,
  bar: 2
};

console.log(obj.foo);
console.log(obj[foo]);


var obj = { p: 1 };
console.log('Object.keys(obj)', Object.keys(obj)); // ["p"]

delete obj.p // true
console.log('obj.p', obj.p); // undefined
console.log('Object.keys(obj)', Object.keys(obj)); // []


var obj = { p: 1 };
console.log('p' in obj); // true
console.log('toString' in obj); // true



var obj = {a: 1, b: 2, c: 3};

for (var i in obj) {
  console.log('键名：', i);
  console.log('键值：', obj[i]);
}