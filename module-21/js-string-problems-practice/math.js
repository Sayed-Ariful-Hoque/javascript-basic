

const result = Math.pow(5,6)
console.log(result)


//

const number1 = 25;
const number2 = 40;

const gap = Math.abs(number1 -number2);
console.log(gap);
if(gap < 5){
    console.log('you guys can be friend');
}
else{
    console.log('you guys sty apart');
}







//

const number = 2.452930
const fullNumber = Math.round(number);
console.log(fullNumber)


const numbers1 = 2.502930
const fullNumber1 = Math.round(numbers1);
console.log(fullNumber1)

const numbers2 = 2.00001
const fullNumber2 = Math.ceil(numbers2);
console.log(fullNumber2)

const numbers3 = 456.3484038
const fullNumber3 = Math.floor(numbers3);
console.log(fullNumber3)








// Random

const numbers4 = 456.3484038
const fullNumber4 = Math.random(numbers4);
console.log(fullNumber4)


const numbers5 = 645.3484038
const fullNumber5 = Math.random(numbers5)*100;
console.log(fullNumber5)


const numbers6 = 645.3484038
const fullNumber6 = Math.round(Math.random(numbers6)*100);
console.log(fullNumber6)




for(let i = 0; i< 20; i++){
    const random =Math.round(Math.random()*6);
    console.log(random)
}
