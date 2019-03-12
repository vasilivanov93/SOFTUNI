function task(arr) {
    let food =  Number(arr.shift()) * 1000;

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'Adopted') {
            break;
        } else {
            sum += Number(arr[i]);
        }
    }

    if (food >= sum) {
        console.log(`Food is enough! Leftovers: ${food - sum} grams.`);
    } else {
        console.log(`Food is not enough. You need ${sum - food} grams more.`);
    }
}

task([
        '2',
        '999',
        '456',
        '999',
        '999',
        '123',
        '456',
        'Adopted'
    ]
);