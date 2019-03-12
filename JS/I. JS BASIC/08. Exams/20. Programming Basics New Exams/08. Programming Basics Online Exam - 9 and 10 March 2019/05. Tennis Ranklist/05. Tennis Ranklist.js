function task(arr) {
    let numberTournament = Number(arr.shift());
    let points = Number(arr.shift());

    let sum = 0;
    let win = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] === 'W') {
            points += 2000;
            sum += 2000;
            win++;
        } else if (arr[i] === 'F') {
            points += 1200;
            sum += 1200;
        } else if (arr[i] === 'SF') {
            points += 720;
            sum += 720;
        }
    }

    console.log(`Final points: ${points}`);
    console.log(`Average points: ${Math.floor(sum / numberTournament)}`);
    console.log(`${((win/numberTournament) * 100).toFixed(2)}%`);
}

task([
    '4',
    '750',
    'SF',
    'W',
    'SF',
    'W'
    ]
);