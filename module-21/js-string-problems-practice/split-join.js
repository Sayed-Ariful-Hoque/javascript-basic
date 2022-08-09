


const lyrics = 'Tumi bodhu kala pakhi ami jeno ki . bostoto kale tomay bolte pari ni . shada shada kala kala rongjomeche sada kala . hoici ami monpagela'

const parts = lyrics.split('')
console.log(parts)

const parts1 = lyrics.split(' ')
console.log(parts1)

const paarts2 = lyrics.split(' . ')
console.log(paarts2)





//

const partial = lyrics.slice(11, 14);
console.log(partial);

const partia2 = lyrics.substring(11, 14);
console.log(partia2);











// 

const lines = [
    'Tumi bodhu kala pakhi ami jeno ki',
    'bostoto kale tomay bolte pari ni',
    'shada shada kala kala rongjomeche sada kala',
    'hoici ami monpagela'
  ]
  const newSong = lines.join('')
  console.log(newSong)

  const newSong1 = lines.join(',')
  console.log(newSong1)

  const newSong2 = lines.join('.')
  console.log(newSong2)

  const newSong3 = lines.join(':')
  console.log(newSong3)