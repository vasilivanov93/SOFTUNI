function task(arr) {
    arr = arr.map(Number);

    let guests = arr[0];
    let budget = arr[1];

    let moneyForCouvert = guests * 20;
    
    if (budget >= moneyForCouvert) {
        let moneyForFireworks = (budget - moneyForCouvert) * 0.4;
        let moneyForCharity = (budget - moneyForCouvert) * 0.6;

        console.log(`Yes! ${moneyForFireworks} lv are for fireworks and ${moneyForCharity} lv are for donation.`);
    } else {
        console.log(`They won't have enough money to pay the covert. They will need ${Math.ceil(moneyForCouvert - budget)} lv more.`);
    }
}

task([
       '0',
        '0'
    ]
);