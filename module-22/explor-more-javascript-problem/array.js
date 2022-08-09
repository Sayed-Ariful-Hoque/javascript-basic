

const country = 'Bangladesh'
const age = 52;
const isIndepent = true;
const student ={id: 121, semester: 5, name: 'sayed'}
const friends = [22, 23, 24, 20, 21,]
function add(number1, number2){
    return number1 +number2
}


console.log(typeof country)
console.log(typeof age)
console.log(typeof isIndepent)
console.log(typeof student)
console.log(typeof add)

// check array using Array.isArray
console.log(Array.isArray(friends))


// 

console.log(friends.includes(25))
console.log(friends.includes(20))



// Cocat

const newFriendAge =[12, 13, 11, 14]
const allFriends = newFriendAge.concat(friends)
console.log(allFriends)




