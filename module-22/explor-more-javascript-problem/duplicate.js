

const names = ['abul', 'babul', 'cabul', 'dabul', 'dabul', 'egul', 'babul', 'abul', 'kabul', 'gabul', 'cabul', 'babul', 'abul', 'abul'];  

function removeDuplicate(names){
    const unique = [];
    for(let i = 0; i< names.length; i++){
       const name = names[i];
       if(unique.includes(name) === false){
        unique.push(name);
       }
    }
    return unique;

}


const uniqueName = removeDuplicate(names);
console.log(uniqueName);