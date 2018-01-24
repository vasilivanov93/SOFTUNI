function carToGo([arg1, arg2]){
    let budget = parseFloat(arg1);
    let season = arg2;

    let classCar1 = "Economy class";
    let classCar2 = "Compact class";
    let classCar3 = "Luxury class";

    let carKabrio = 0;
    let carJeep = 0;
    let carJeepLux = 0;

    if(budget <= 100){
        if(season == "Summer"){
            carKabrio = budget * 35 / 100;
            console.log(classCar1);
            console.log(`Cabrio - ${carKabrio.toFixed(2)}`);
        }else if(season == "Winter"){
            carJeep = budget * 65 / 100;
            console.log(classCar1);
            console.log(`Jeep - ${carJeep.toFixed(2)}`);
        }
    }else if(budget > 100 && budget <= 500){
        if(season == "Summer"){
            carKabrio = budget * 45 / 100;
            console.log(classCar2);
            console.log(`Cabrio - ${carKabrio.toFixed(2)}`)
        }else if(season == "Winter"){
            carJeep = budget * 80 / 100;
            console.log(classCar2);
            console.log(`Jeep - ${carJeep.toFixed(2)}`);
        }
    }else if(budget > 500){
        carJeepLux = budget * 90 / 100;
        console.log(classCar3);
        console.log(`Jeep - ${carJeepLux.toFixed(2)}`);
    }
}