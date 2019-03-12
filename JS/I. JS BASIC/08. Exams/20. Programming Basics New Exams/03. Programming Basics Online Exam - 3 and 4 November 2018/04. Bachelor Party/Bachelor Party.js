function task(arr) {
    let singer = Number(arr.shift());

    let total = 0;
    let totalSum = 0;
    let countGuests = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 'The restaurant is full') {
            break;
        } else {
            let guests = Number(arr[i]);
            countGuests += guests;
            if (guests <= 4) {
                total = guests * 100;
            } else if (guests >= 5) {
                total = guests * 70;
            }

            totalSum += total;
        }
    }

    if (totalSum >= singer) {
        console.log(`You have ${countGuests} guests and ${totalSum - singer} leva left.`);
    } else {
        console.log(`You have ${countGuests} guests and ${totalSum} leva income, but no singer.`);
    }
}

task([
        '3200',
        '5',
        '12',
        '6',
        '6',
        '12',
        'The restaurant is full'
    ]
);