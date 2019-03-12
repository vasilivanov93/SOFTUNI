function task(arr) {
    arr = arr.map(Number);

    let budget = arr[0];

    let message = arr[1] * 0.60;
    let rose = arr[2] * 7.2;
    let keyholder = arr[3] * 3.60;
    let cartoons = arr[4] * 18.20;
    let surprise = arr[5] * 22;

    let totalMoney = message + rose + keyholder + cartoons + surprise;
    let totalArticul = arr[1] + arr[2] + arr[3] + arr[4] + arr[5];

    if (totalArticul >= 25) {
        totalMoney -= totalMoney * 0.35;
    }

    totalMoney = totalMoney - (totalMoney * 0.1);

    if (totalMoney >= budget) {
        console.log(`Yes! ${(totalMoney - budget).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(budget - totalMoney).toFixed(2)} lv needed.`);
    }
}

task([
        '40.8',
        '20',
        '25',
        '30',
        '50',
        '10'

    ]
);