function task(arr) {
    let numberMonth = Number(arr.shift());

    let electricity = 0;
    let water = numberMonth * 20;
    let internet = numberMonth * 15;

    for (let i = 0; i < arr.length; i++) {
        electricity += Number(arr[i]);
    }

    let others = (electricity + water + internet) + ((electricity + water + internet) * 0.2);
    let average = (electricity + water + internet + others) / numberMonth;

    console.log(`Electricity: ${electricity.toFixed(2)} lv`);
    console.log(`Water: ${water.toFixed(2)} lv`);
    console.log(`Internet: ${internet.toFixed(2)} lv`);
    console.log(`Other: ${others.toFixed(2)} lv`);
    console.log(`Average: ${average.toFixed(2)} lv`);
}

task([
        '5',
        '68.63',
        '89.25',
        '132.53',
        '93.53',
        '63.22'
    ]
);