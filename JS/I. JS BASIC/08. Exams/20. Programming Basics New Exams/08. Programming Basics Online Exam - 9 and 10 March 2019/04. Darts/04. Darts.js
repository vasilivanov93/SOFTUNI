function task(arr) {
    let namePlayer  = arr.shift();

    let max = 301;
    let countShotsWin = 0;
    let countShotsLose = 0;
    for (let i = 0; i < arr.length; i += 2) {
        let type = arr[i];
        let scores = arr[i + 1];

        if (type === 'Retire' && scores === undefined) {
            break;
        } else {
            if (type === 'Single') {
                scores *= 1;
            } else if (type === 'Double') {
                scores *= 2;
            } else if (type === 'Triple') {
                scores *= 3;
            }

            if (scores <= max) {
                max -= scores;
                countShotsWin++;
            } else {
                countShotsLose++;
            }
        }
    }

    if (max === 0) {
        console.log(`${namePlayer} won the leg with ${countShotsWin} shots.`);
    } else {
        console.log(`${namePlayer} retired after ${countShotsLose} unsuccessful shots.`);
    }
}

task([
    'Rob Cross',
    'Triple',
    '20',
    'Triple',
    '20',
    'Triple',
    '20',
    'Triple',
    '20',
    'Double',
    '20',
    'Triple',
    '20',
    'Double',
    '5',
    'Triple',
    '10',
    'Double',
    '6',
    'Retire'
    ]
);