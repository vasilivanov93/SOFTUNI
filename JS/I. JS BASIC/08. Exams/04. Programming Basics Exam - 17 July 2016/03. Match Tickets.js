function matchTickets([arg1, arg2, arg3, arg4]){
    let budget = Number(arg1);
    let normalOrVip = arg2;
    let peopleInGroup = Number(arg3);

    let transport = 0;
    let normal = 249.99;
    let vip = 499.99;
    let price = 0;
    let diffBudget = 0;

    if(peopleInGroup > 0 && peopleInGroup <= 4){
        transport = peopleInGroup * 0.75;

        if(normalOrVip == "Normal"){
            price = normal * peopleInGroup;
            let percentBudget = budget * 0.75;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`);
            }
        }else if(normalOrVip == "VIP"){
            price = vip * peopleInGroup;
            let percentBudget = budget * 0.75;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`);
            }
        }
    }else if(peopleInGroup > 4 && peopleInGroup <= 9){
        transport = peopleInGroup * 0.60;
        
        if(normalOrVip == "Normal"){
            price = normal * peopleInGroup;
            let percentBudget = budget * 0.60;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }else if(normalOrVip == "VIP"){
            price = vip * peopleInGroup;
            let percentBudget = budget * 0.60;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }
    }else if(peopleInGroup >9 && peopleInGroup <= 24){
        transport = peopleInGroup * 0.50;

        if(normalOrVip == "Normal"){
            price = normal * peopleInGroup;
            let percentBudget = budget * 0.50;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }else if(normalOrVip == "VIP"){
            price = vip * peopleInGroup;
            let percentBudget = budget * 0.50;
            let diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }
    }else if(peopleInGroup > 24 && peopleInGroup <= 49){
        transport = peopleInGroup * 0.40;

        if(normalOrVip == "Normal"){
            price = normal * peopleInGroup;
            let percentBudget = budget * 0.40;
            let diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }else if(normalOrVip == "VIP"){
            price = vip * peopleInGroup;
            let percentBudget = budget * 0.40;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }
    }else if(peopleInGroup > 49){
        transport = peopleInGroup * 0.25;

        if(normalOrVip == "Normal"){
            price = normal * peopleInGroup;
            let percentBudget = budget * 0.25;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`);
            }
        }else if(normalOrVip == "VIP"){
            price = vip * peopleInGroup;
            let percentBudget = budget * 0.25;
            diffBudget = budget - percentBudget;
            if(price < diffBudget){
                console.log(`Yes! You have ${(diffBudget - price).toFixed(2)} leva left.`);
            }else{
                console.log(`Not enough money! You need ${(price - diffBudget).toFixed(2)} leva.`)
            }
        }
    }
}