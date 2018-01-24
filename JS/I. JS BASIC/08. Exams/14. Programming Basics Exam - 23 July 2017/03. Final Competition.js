function finalCompetition([arg1, arg2, arg3, arg4]){
    let numberDancer = Number(arg1);
    let numberPoint = parseFloat(arg2);
    let season = arg3;
    let place = arg4;

    let money = 0;
    let moneyAfterCost = 0;

    if(place == "Abroad"){
        money = numberDancer * numberPoint + ((numberDancer * numberPoint) / 2);
        if(season == "summer"){
            moneyAfterCost = money - (money * 0.10);
        }else if(season == "winter"){
            moneyAfterCost = money - (money * 0.15);
        }
    }else if(place == "Bulgaria"){
        money = numberDancer * numberPoint;
        if(season == "summer"){
            moneyAfterCost = money - (money * 0.05);
        }else if(season == "winter"){
            moneyAfterCost = money - (money * 0.08);
        }
    }

    let charity = moneyAfterCost * 0.75;
    let remainingMoney = moneyAfterCost - charity;
    let moneyPerDancer = remainingMoney / numberDancer;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}