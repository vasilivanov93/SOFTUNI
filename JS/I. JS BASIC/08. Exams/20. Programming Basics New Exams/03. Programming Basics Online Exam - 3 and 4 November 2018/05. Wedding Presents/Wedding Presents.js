function task(arr) {
    let numberGuest = Number(arr.shift());
    let numberGift = Number(arr.shift());

    let countA = 0;
    let countB = 0;
    let countV = 0;
    let countG = 0;
    for (let i = 0; i < arr.length; i++) {
        let category = arr[i];

        if (category === 'A') {
            countA++;
        } else if (category === 'B') {
            countB++;
        } else if (category === 'V') {
            countV++;
        } else if (category === 'G') {
            countG++;
        }
    }

    console.log(`${((countA / numberGift) * 100).toFixed(2)}%`);
    console.log(`${((countB / numberGift) * 100).toFixed(2)}%`);
    console.log(`${((countV / numberGift) * 100).toFixed(2)}%`);
    console.log(`${((countG / numberGift) * 100).toFixed(2)}%`);
    console.log(`${((numberGift / numberGuest) * 100).toFixed(2)}%`);
}

task([
        '76',
        '10',
        'A',
        'V',
        'V',
        'V',
        'G',
        'B',
        'A',
        'V',
        'B',
        'B'
    ]
);