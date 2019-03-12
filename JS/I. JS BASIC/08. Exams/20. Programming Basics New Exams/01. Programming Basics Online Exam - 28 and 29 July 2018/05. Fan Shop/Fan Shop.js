function task(arr) {
    let budget = Number(arr.shift());
    let numberItems = Number(arr.shift());

    let money = 0;
    for (let i = 0; i < arr.length; i++) {
        let item = arr[i];
        if (item === 'hoodie') {
            money += 30;
        } else if (item === 'keychain') {
            money += 4;
        } else if (item === 'T-shirt') {
            money += 20;
        } else if (item === 'flag') {
            money += 15;
        } else if (item === 'sticker') {
            money += 1;
        }
    }

    if (budget >= money) {
        console.log(`You bought ${numberItems} items and left with ${budget - money} lv.`)
    } else {
        console.log(`Not enough money, you need ${money - budget} more lv.`);
    }
}


task([
        '25',
        '3',
        'flag',
        'keychain',
        'sticker'
    ]
);