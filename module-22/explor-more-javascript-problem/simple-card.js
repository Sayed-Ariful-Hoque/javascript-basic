

const shoppingCard =[
    {name: 'bag', price: 1200},
    {name:'shirt', price: 1000},
    {name:'pant', price: 1100},
    {name: 'belt', price: 600},
    {name:'shoe', price: 800},
]

function totalCost(products){
    let sum = 0;
    for(let i = 0; i < products.length; i++){
        const product = products [i];
        sum = sum + product.price;
       
        
    }
    return sum;
}

const expense = totalCost(shoppingCard);
console.log('total expense today:', expense);