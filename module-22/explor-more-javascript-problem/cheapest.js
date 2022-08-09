



const phones = [
    {name:'sumsung', camera:'12mp', Storage: '12gb', price: '30000', color: 'silver'},
    {name:'walton', camera:'12mp', Storage: '12gb', price: '23000', color: 'silver'},
    {name:'iphomne', camera:'12mp', Storage: '12gb', price: '820000', color: 'silver'},
    {name:'oppu', camera:'12mp', Storage: '12gb', price: '21000', color: 'silver'},
    {name:'vivo', camera:'12mp', Storage: '12gb', price: '11500', color: 'silver'},
    {name:'HTC', camera:'12mp', Storage: '12gb', price: '77000', color: 'silver'},
    {name:'hwuyahoye', camera:'12mp', Storage: '12gb', price: '30000', color: 'silver'},
]

function cheapestPhone(phones){
    let cheapest = phones[0];
    for(let i = 0; i < phones.length; i++){
        const phone = phones[i]
        if(phone.price < cheapest.price){
            cheapest = phone;
        }
    }
    return cheapest;
}
const myselection = cheapestPhone(phones);
console.log(myselection);







