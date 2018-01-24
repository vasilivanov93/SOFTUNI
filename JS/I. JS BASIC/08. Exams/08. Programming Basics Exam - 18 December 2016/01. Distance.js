function distance([arg1, arg2, arg3, arg4]){
    let firstSpeed = Number(arg1);
    let firstTimeInMinutes = Number(arg2);
    let secondTimeInMinutes = Number(arg3);
    let thirdTimeInMinutes = Number(arg4);

    let distanceWithFirstSpeed = firstSpeed * (firstTimeInMinutes * 60 / 3600);
    let afterIncrease = ((firstSpeed * 0.1) + firstSpeed) * (secondTimeInMinutes * 60 / 3600);
    let afterDecrease = (((firstSpeed * 0.1) + firstSpeed) - (((firstSpeed * 0.1) + firstSpeed) * 0.05)) * (thirdTimeInMinutes * 60 / 3600);
    let total = distanceWithFirstSpeed + afterIncrease + afterDecrease;
    console.log(total.toFixed(2))
}