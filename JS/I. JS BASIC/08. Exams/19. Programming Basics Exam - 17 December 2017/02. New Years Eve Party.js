function newYearsEveParty([arg1, arg2]) {
    let numberGuest = Number(arg1);
    let budget = Number(arg2);

    let couvert = numberGuest * 20.00;

    let remainigMoney = budget - couvert;
    let priceForBoom = (remainigMoney * 40 / 100);
    let moneyForDonation = remainigMoney - priceForBoom;

    if(couvert <= budget){
        console.log(`Yes! ${Math.round(priceForBoom)} lv are for fireworks and ${Math.round(moneyForDonation)} lv are for donation.`);
    }else{
        console.log(`They won't have enough money to pay the covert. They will need ${Math.round(couvert - budget)} lv more.`);
    }
}

newYearsEveParty(["10", "150"]);