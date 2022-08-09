


function getFactorial(number){
    let factorial = 1;
    for(let i =1; i <= number; i++){
        factorial = factorial * i;
    }
    return factorial;
}


const factorial = getFactorial(6);
console.log('factorial of 8 is', factorial)