
/*

function isLeapYear (year){

    const remainder = year % 4;
    if(remainder === 0){
        console.log('Your year is leap year',year)
    }
    else{
        console.log('Your year is not a leap yer', year)
    }
}
 isLeapYear(1933);

isLeapYear(1960);


*/




//

/*

function isLeapYear (year){

    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
    else{
        return false;
    }
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear)

*/

function isLeapYear (year){

    const remainder = year % 4;
    if(remainder === 0){
        return true;
    }
        return false
}
const isMyYearLeapYear = isLeapYear(1933);
console.log('my year:', isMyYearLeapYear);

const isHerYearLeapYear = isLeapYear(1960);
console.log('Her year:', isHerYearLeapYear)

