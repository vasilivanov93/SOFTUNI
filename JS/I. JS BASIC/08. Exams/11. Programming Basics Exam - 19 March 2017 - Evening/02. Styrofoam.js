function styrofoam([arg1, arg2, arg3, arg4, arg5]){
    let budget = parseFloat(arg1);
    let areaHouse = parseFloat(arg2);
    let numberWindows = Number(arg3);
    let km2Styrofoam = parseFloat(arg4);
    let pricePerStyrofoam = parseFloat(arg5);

    let areaHouseWithoutWindows = (areaHouse - (numberWindows * 2.4)) + ((areaHouse - (numberWindows * 2.4)) * 0.1);
    let needPackages = Math.ceil(areaHouseWithoutWindows / km2Styrofoam);
    let pricePackages = needPackages * pricePerStyrofoam;

    if(pricePackages <= budget){
        console.log(`Spent: ${pricePackages.toFixed(2)}`)
        console.log(`Left: ${(budget - pricePackages).toFixed(2)}`)
    }else{
        console.log(`Need more: ${(pricePackages - budget).toFixed(2)}`)
    }
}