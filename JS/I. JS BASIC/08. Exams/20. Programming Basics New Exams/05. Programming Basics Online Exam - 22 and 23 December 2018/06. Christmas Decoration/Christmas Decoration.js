function task(arr) {
    let budget = Number(arr.shift());

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let items = arr[i];

        if (items === 'Stop') {
            break;
        } else {
            let word = items.split('');
            for (let letter of word) {
                sum += Number(letter.charCodeAt(0));
            }

            if (sum <= budget) {
                console.log(`Item successfully purchased!`);
            }
        }
    }

    if (sum <= budget) {
        console.log(`Money left: ${Math.abs(sum - budget)}`);
    } else {
        console.log(`Not enough money!`);
    }
}

task([
        '3000',
        'star',
        'Christmas tree',
        'tinsel',
        'Tree stand'
    ]
);