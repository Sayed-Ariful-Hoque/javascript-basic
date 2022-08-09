
/*
function getsum(numbers){
    console.log(numbers);
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91]
getsum(myNumbers);
*/




///


/*

function getSumOfAnArray(numbers){
    sum = 0;
    for(let i = 0; i < numbers.length ; i ++){
        const index = i;
        const element = numbers [index]
        sum = sum + element
        console.log(index, element, sum)

    }
    return sum;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91]
getSumOfAnArray(myNumbers);


*/


function getOddNumbersOfAnArray(numbers){
    const oddNumbers = [];
    for(let i = 0; i < numbers.length; i++){
        const index = i;
        const element = numbers[index];
        if(element % 2 !== 0){
            console.log(index, element);
            oddNumbers.push(element);
            
        }
    }
    return oddNumbers;
}

const myNumbers = [12, 65, 45, 78, 32, 45, 91];
const oddNumbers = getOddNumbersOfAnArray(myNumbers);
console.log(oddNumbers);
const oddNumbersSum = getOddNumbersOfAnArray (oddNumbers)
console.log('odd number sum', oddNumbers)