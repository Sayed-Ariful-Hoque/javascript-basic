

  
/*

fixed: per item wood requirements
1. chair -----> 5 cft
2. tabil ------. 10 cft
3. bed --------. 35 cft

var: quntity 

*/

function woodCulculator(chairQuntity, tabileQutity, bedQuintity){
    const perChairWood = 5;
    const perTabileWood = 10;
    const perBedWood = 35;


    const chairWood = perChairWood * chairQuntity;
    const tabileWood = perTabileWood * tabileQutity;
    const bedWood = perBedWood * bedQuintity;

    const totalWood = chairWood + tabileWood + bedWood
    return totalWood;
}

const totalWood = woodCulculator( 5, 10, 15);
console.log(  'total wood requied: ', totalWood)

