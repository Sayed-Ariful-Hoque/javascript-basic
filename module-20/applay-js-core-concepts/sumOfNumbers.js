// 1+ 2+ 3+ 4+ 5+ 6+ 7+

/*
let sum = 0;
for(let i = 1; i <= 7; i++){
    sum = sum + i;
    console.log(sum);
}
*/

function sumOfNumbers(numbers){
 let sum = 0;
 for(let i = 1; i <= numbers; i++){
    sum = sum + i;
    console.log(sum);
}
return sum;
}
sumOfNumbers(20)