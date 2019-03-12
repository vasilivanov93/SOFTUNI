function task(arr) {
    let nameTeam = arr.shift();
    let numberGame = Number(arr.shift());

    let sumMinutes = 0;

    let gameWithPenalties = 0;
    let gameWithAdditionalTime = 0;
    for (let i = 0; i < arr.length; i++) {
        let min = Number(arr[i]);

        if (min > 90 && min <= 120) {
            gameWithAdditionalTime++;
        } else if (min > 120) {
            gameWithPenalties++;
        }
        sumMinutes += min;
    }

    let averageMinutes = sumMinutes / numberGame;

    console.log(`${nameTeam} has played ${sumMinutes} minutes. Average minutes per game: ${averageMinutes.toFixed(2)}`);
    console.log(`Games with penalties: ${gameWithPenalties}`);
    console.log(`Games with additional time: ${gameWithAdditionalTime}`);
}


task([
    'Croatia',
    '4',
    '93',
    '90',
    '120',
    '125'
    ]
);