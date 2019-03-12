function task(arr) {
    arr = arr.map(Number);
    let part = arr.shift();
    let pricePerPart = arr.shift();

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let point  = arr[i];

        if (i % 2 !== 0) {
            point *= 2;
        }

        sum += point;
    }

    console.log(`The project prize was ${(sum * pricePerPart).toFixed(2)} lv.`);
}

task([
        '7',
        '100.5',
        '2',
        '4',
        '5',
        '1',
        '1',
        '7',
        '3'
    ]
);