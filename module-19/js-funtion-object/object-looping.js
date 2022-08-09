


// array vs object


// var shoppingItems = { 'books', 'sunglass', 'keyboard', 'mouse', 'pen', 'shoes'};
// var friendsAge = [ 12, 14, 18, 20, ];
// var friendsAge = {
//     rohim: 12, 
//     korim: 14,
//     samad: 18,
//     jamal: 20,
// }







var shoppingCart = {
    books: 3,
    sunglass: 1,
    keyboard: 5,
    mouse: 1,
    pen: 25,
    shoes: 2,

}

const keys = Object.keys(shoppingCart);
console.log(keys);

const values = Object.values(shoppingCart);
console.log(values);



for (var i = 0; i< keys.length; i++){
    var propertyName = keys [i];
    var propertyValues = shoppingCart[propertyName];
    // console.log(propertyName, propertyValues);
}



// for in loop

for( var  propertyName in shoppingCart){
    const value = shoppingCart[propertyName];
    console.log(propertyName, value);
}