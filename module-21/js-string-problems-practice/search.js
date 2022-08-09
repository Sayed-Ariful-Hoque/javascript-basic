

const lyrics = 'Tumi bodhu kala pakhi ami jeno ki , bostoto kale tomay bolte pari ni. shada shada kala kala rongjomeche sada kala '




// const doesExist = lyrics.includes('pakhi')
// console.log(doesExist)
// const doesExist = lyrics.includes('paKhi')
// console.log(doesExist)



// const searchScring = 'pakhi';

// const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchScring)
// console.log(doesExist)






// const searchScring = 'paKhi';
// const lyricsLowerCase = lyrics.toLowerCase()
// const doesExist = lyricsLowerCase.includes(searchScring)
// console.log(doesExist)






// const searchScring = 'paKhi';
// const lyricsLowerCase = lyrics.toLowerCase()
// const searchScringLower = searchScring.toLowerCase();
// const doesExist = lyricsLowerCase.includes(searchScringLower);
// console.log(doesExist)








// const searchScring = 'paKhi';
// const doesExistOneLine = lyrics.toLowerCase().includes(searchScring.toLowerCase);
// console.log(doesExistOneLine);






//---------------------------------------------------------------------------------
// indexOf

console.log(lyrics.indexOf('kala'));
console.log(lyrics.indexOf('kalya'));


// 
if(lyrics.indexOf('shada') !== -1){
    console.log('Exists inside the string')
}
else{
    console.log('connot find it');
}

//

if(lyrics.indexOf('shadada') !== -1){
    console.log('Exists inside the string')
}
else{
    console.log('connot find it');
}


// Startswith
console.log(lyrics.startsWith('Tumi'))

console.log(lyrics.startsWith('2mi'))







// endswith

const fileName ='mybodata.pdf'
const otherFile ='mypic.png'

fileName.endsWith('.png')