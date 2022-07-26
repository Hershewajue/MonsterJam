alert('1' + 2);
alert(2 + '1');
alert(2 + 2 + '1');
alert('1' + 2 + 2);

let a = 1;
let b = 2;
let c = 3 - (a = b + 1); // c=?

let d, e, f;
d = e = f = 2 + 2; // d, e, f ?

let g, e, f = 3;
g = ++f;
e = f++;
// g, e, f ?
