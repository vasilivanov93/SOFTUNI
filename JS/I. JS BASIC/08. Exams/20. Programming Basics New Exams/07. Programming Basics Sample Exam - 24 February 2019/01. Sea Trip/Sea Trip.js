function task(arr) {
    arr = arr.map(Number);
    let moneyForFood = arr[0];
    let moneyForSouvenir = arr[1];
    let moneyForHotel = arr[2];

    let result = (((420 / 100) * 7) * 1.85) + ((moneyForFood + moneyForSouvenir) * 3) + (moneyForHotel * 0.9) + (moneyForHotel * 0.85) + (moneyForHotel * 0.8);

    console.log(`Money needed: ${result.toFixed(2)}`);
}

task([
        '100',
        '50',
        '500'

    ]
);