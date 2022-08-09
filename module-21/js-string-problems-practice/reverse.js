
/*
function reverseString(Text){
    for(let i = 0; i < Text.length; i++){
        const element = Text[i];
        console.log(element);
    }
}


const myString = 'I am good boy'
const reversed = reverseString(myString);

*/





//

/*
function reverseString(Text){
    for(let i = Text.length - 1; i >= 0; i--){
        const element = Text[i];
        console.log(element);
    }
}


const myString = 'I am good boy'
const reversed = reverseString(myString);


*/





function reverseString(Text){
    let reversed = ' ';
    for(let i = Text.length - 1; i >= 0; i--){
        const element = Text[i];
        reversed = reversed + element
        console.log(element, reversed);

    }
    return reversed;
}


const myString = 'I am good boy'
const reversed = reverseString(myString);
console.log( 'reversed output' ,reversed)





