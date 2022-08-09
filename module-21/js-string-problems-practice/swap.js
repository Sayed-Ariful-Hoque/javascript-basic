

// let first = 5;
// let second = 7;
// console.log(first,second);


// this is rong approach

/*
first = second;
second = first
console.log(first, second)
*/


// approch: 1

/*
const temp = first;
first = second;
second = temp;
console.log(first, second);
*/





// approch: 2 -----------desturucturing

let first1 = 8;
let second2 = 10;
[ first1, second2 ] = [ second2, first1 ];

console.log(first1, second2);