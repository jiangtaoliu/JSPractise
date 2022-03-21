var a = [1, 2, 3];

// for循环
for(var i = 0; i < a.length; i++) {
  console.log(a[i]);
}

// while循环
var i = 0;
while (i < a.length) {
  console.log(a[i]);
  i++;
}

var l = a.length;
while (l--) {
  console.log(a[l]);
}

console.log('==============================');
var numbers = [1, 2, 3];

let arr = numbers.map(function (n) {
  return n + 1;
});
// [2, 3, 4]

console.log(arr);

console.log('==============================');

var out = [];

[1, 2, 3].forEach(function(elem) {
  this.push(elem * elem);
}, out);

console.log(out); // [1, 4, 9]

console.log('==============================');

let fff = [1, 2, 3, 4, 5].filter(function (elem, index, arr) {
    return index % 2 === 0;
  });

console.log(fff);

console.log('==============================');
var arrS = [1, 2, 3, 4, 5];
arrS.some(function (elem, index, arr) {
  return elem >= 3;
});
// true