function vacation([arg1, arg2]){
    let budget = parseFloat(arg1);
    let season = arg2.toLowerCase();

    if(budget <= 1000){
        if(season == "summer"){
            console.log(`Alaska - Camp - ${(budget * 0.65).toFixed(2)}`);
        }else if (season == "winter"){
            console.log(`Morocco - Camp - ${(budget * 0.45).toFixed(2)}`);
        }
    }else if(budget > 1000 && budget <= 3000){
        if(season == "summer"){
            console.log(`Alaska - Hut - ${(budget * 0.80).toFixed(2)}`);
        }else if (season == "winter"){
            console.log(`Morocco - Hut - ${(budget * 0.60).toFixed(2)}`);
        }
    }else if (budget > 3000){
        if(season == "summer"){
            console.log(`Alaska - Hotel - ${(budget * 0.90).toFixed(2)}`);
        }else if (season == "winter"){
            console.log(`Morocco - Hotel - ${(budget * 0.90).toFixed(2)}`);
        }
    }
}
