

function factorial(numbers){
    let num = numbers;
    let result = 1;
while( num>= 1){
    result = result * num
    num--;
}
return result
}

const result = factorial(9)
console.log(result)
