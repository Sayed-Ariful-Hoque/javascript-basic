


// 1!= 1
// 2!= 2*2
// 3!= 3*2*1
// 4!= 4*3*2*1
// 5!= 5*4*2*1

function factorial (numbers){
    let result = 1;
    for(let i = 1; i <= numbers; i++){
        result = result * i;

    }
    return result;
}


const result = factorial (20)
console.log(result) 