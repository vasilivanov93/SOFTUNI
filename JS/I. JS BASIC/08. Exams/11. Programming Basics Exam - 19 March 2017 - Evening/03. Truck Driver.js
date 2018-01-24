function truckDriverls([arg1, arg2]){
    let season = arg1;
    let kmPerMonth = Number(arg2);

    if(kmPerMonth <= 5000){
        if(season == "Spring" || season == "Autumn"){
            console.log(((kmPerMonth * 0.75 * 4) - ((kmPerMonth * 0.75 * 4) * 0.1)).toFixed(2));
        }else if(season == "Summer"){
            console.log(((kmPerMonth * 0.90 * 4) - ((kmPerMonth * 0.90 * 4) * 0.1)).toFixed(2));
        }else if(season == "Winter"){
            console.log(((kmPerMonth * 1.05 * 4) - ((kmPerMonth * 1.05 * 4) * 0.1)).toFixed(2));
        }
    }else if(kmPerMonth > 5000 && kmPerMonth <= 10000){
        if(season == "Spring" || season == "Autumn"){
            console.log(((kmPerMonth * 0.95 * 4) - ((kmPerMonth * 0.95 * 4) * 0.1)).toFixed(2));
        }else if(season == "Summer"){
            console.log(((kmPerMonth * 1.10 * 4) - ((kmPerMonth * 1.10 * 4) * 0.1)).toFixed(2));
        }else if(season == "Winter"){
            console.log(((kmPerMonth * 1.25 * 4) - ((kmPerMonth * 1.25 * 4) * 0.1)).toFixed(2));
        }
    }else if(kmPerMonth > 10000 && kmPerMonth <= 20000){
        if(season == "Spring" || season == "Autumn"){
            console.log(((kmPerMonth * 1.45 * 4) - ((kmPerMonth * 1.45 * 4) * 10 / 100)).toFixed(2));
        }else if(season == "Summer"){
            console.log(((kmPerMonth * 1.45 * 4) - ((kmPerMonth * 1.45 * 4) * 0.1)).toFixed(2));
        }else if(season == "Winter"){
            console.log(((kmPerMonth * 1.45 * 4) - ((kmPerMonth * 1.45 * 4) * 0.1)).toFixed(2));
        }
    }
}