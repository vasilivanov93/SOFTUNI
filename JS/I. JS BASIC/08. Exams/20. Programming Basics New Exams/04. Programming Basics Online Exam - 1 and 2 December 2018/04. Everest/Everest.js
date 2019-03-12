function task(arr) {
    let days = 1;
    let start = 5364;

    for (let i = 0; i < arr.length; i += 2) {
        let overnight = arr[i];
        let metres = Number(arr[i + 1]);
        
        if (overnight === 'END') {
            break;
        } else {
            if (overnight === 'Yes') {
                days++;
            }

            if (days > 5) {
                break;
            }

            start += metres;
        }
    }

    if (start >= 8848) {
        console.log(`Goal reached for ${days} days!`);
    } else {
        console.log(`Failed!`);
        console.log(`${start}`);
    }
}

task([
        'Yes',
        '1254',
        'Yes',
        '1402',
        'No',
        '250',
        'Yes',
        '635'
    ]
);