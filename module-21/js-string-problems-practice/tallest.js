

function maxInArray(numbers){
    let largest = numbers[0]
    for (let i = 0; i < numbers.length; i++){
        const index = i;
        const element =numbers [index];
        if(element > largest){
            largest = element;
        }
    }
    return largest;
}

const hights = [135, 134, 234, 135, 123];
const tallest =maxInArray(hights);
console.log('tallest person is', tallest)





// Homework: write a fuction to get the lowest number in an array 