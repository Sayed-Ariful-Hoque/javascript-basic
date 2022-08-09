
/*
function factorial (numbers){
    let result = 1;
    for(let i = numbers; i >= 1; i--){
        result = result * i;

    }
    return result;
}


const result = factorial (9)
console.log(result)


*/

function factorial(numbers){
    let num = 1;
let result = 1;
while( num <= 7){
    result = result * num
    num++;
}
return result
}

const result = factorial(99)
console.log(result)
