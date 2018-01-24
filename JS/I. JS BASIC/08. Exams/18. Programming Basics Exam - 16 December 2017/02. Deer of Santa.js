function deerOfSanta([arg1, arg2, arg3, arg4, arg5]) {
    let numberDays = Number(arg1);
    let leftFoodInKg = Number(arg2);
    let foodPerDayFirstDeer = parseFloat(arg3);
    let foodPerDaySecondDeer = parseFloat(arg4);
    let foodPerDayThirdDeer = parseFloat(arg5);

    let totalFood = (numberDays * foodPerDayFirstDeer) + (numberDays * foodPerDaySecondDeer) + (numberDays * foodPerDayThirdDeer);

    if(totalFood <= leftFoodInKg){
        console.log(`${Math.floor(leftFoodInKg - totalFood)} kilos of food left.`);
    }else{
        console.log(`${Math.ceil(totalFood - leftFoodInKg)} more kilos of food are needed.`);
    }
}

deerOfSanta(["5", "10", "2.1", "0.8", "11"]);