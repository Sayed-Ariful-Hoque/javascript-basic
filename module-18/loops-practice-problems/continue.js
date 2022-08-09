



var numbers = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100, 180, 280, 380, 480, 580, 680, 780, 880, 980, 1000, 2000]

for (var i = 0; i < numbers.length;  i++ ){
    var number = numbers [i];
    if (number > 50){
        continue;
    }
    console.log(number);
}
