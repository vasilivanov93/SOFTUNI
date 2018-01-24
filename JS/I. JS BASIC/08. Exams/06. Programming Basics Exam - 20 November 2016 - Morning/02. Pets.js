function pets([arg1, arg2, arg3, arg4, arg5]){
    let numberDays = Number(arg1);
    let leftFoodInKg = Number(arg2);
    let foodPerDayForDogInKg = parseFloat(arg3);
    let foodPerDayForCatInKg = parseFloat(arg4);
    let foodPerDayForTurtleInKg = Number(arg5);

    let foodForDog = parseFloat(numberDays * foodPerDayForDogInKg);
    let foodForCat = parseFloat(numberDays * foodPerDayForCatInKg);
    let foodForTurtle = parseFloat(numberDays * foodPerDayForTurtleInKg) / 1000;

    let totalFood = foodForDog + foodForCat + foodForTurtle;

    if(totalFood <= leftFoodInKg){
        console.log(`${Math.floor(leftFoodInKg - totalFood)} kilos of food left.`)
    }else{
        console.log(`${Math.ceil(totalFood - leftFoodInKg)} more kilos of food are needed.`)
    }
}