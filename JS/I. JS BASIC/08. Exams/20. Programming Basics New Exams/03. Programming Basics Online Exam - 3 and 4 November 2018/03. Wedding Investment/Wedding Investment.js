function task(arr) {
    let year = arr[0];
    let contract = arr[1];
    let sweet = arr[2];
    let month = Number(arr[3]);

    let money = 0;
    if (year === 'one') {
        if (contract === 'Small') {
            money = 9.98;
        } else if (contract === 'Middle') {
            money = 18.99;
        } else if (contract === 'Large') {
            money = 25.98;
        } else if (contract === 'ExtraLarge') {
            money = 35.99;
        }
    } else if (year === 'two') {
        if (contract === 'Small') {
            money = 8.58;
        } else if (contract === 'Middle') {
            money = 17.09;
        } else if (contract === 'Large') {
            money = 23.59;
        } else if (contract === 'ExtraLarge') {
            money = 31.79;
        }
    }

    if (sweet === 'yes') {
        if (money <= 10) {
            money += 5.50;
        } else if (money <= 30) {
            money += 4.35;
        } else if (money > 30) {
            money += 3.85;
        }
    }
    let total = money * month;
    if (year === 'two') {
        total *= 0.9625;
    }

    console.log(`${total.toFixed(2)} lv.`);
}

task([
        'two',
        'Large',
        'no',
        '10'
    ]
);