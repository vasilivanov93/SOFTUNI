function travel([arg1, arg2]){
    let money = Number(arg1);
    let season = arg2;

    if(money <= 100){
        if(season == "summer"){
            console.log(`Somewhere in Bulgaria`);
            console.log(`Camp - ${((money * 30) / 100).toFixed(2)}`);
        }else if(season == "winter"){
            console.log(`Somewhere in Bulgaria`);
            console.log(`Hotel - ${((money * 70) / 100).toFixed(2)}`);
        }
    }else if(money > 100 && money <= 1000){
        if(season == "summer"){
            console.log(`Somewhere in Balkans`);
            console.log(`Camp - ${((money * 40) / 100).toFixed(2)}`);
        }else if(season == "winter"){
            console.log(`Somewhere in Balkans`);
            console.log(`Hotel - ${((money * 80) / 100).toFixed(2)}`);
        }
    }else if(money > 1000){
        console.log(`Somewhere in Europe`);
        console.log(`Hotel - ${((money * 90) / 100).toFixed(2)}`);
    }
}