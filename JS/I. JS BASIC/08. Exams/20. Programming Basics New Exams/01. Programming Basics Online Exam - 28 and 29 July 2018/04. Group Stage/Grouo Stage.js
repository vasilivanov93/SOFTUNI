function task(arr) {
    let team = arr.shift();
    arr = arr.map(Number);
    arr.shift();

    let result = [];
    let point = 0;

    for (let i = 0; i < arr.length; i += 2) {
        let goalsScored = arr[i];
        let receivedGoals = arr[i + 1];

        if (goalsScored > receivedGoals) {
            point += 3;
            result.push(goalsScored - receivedGoals);
        } else if (goalsScored === receivedGoals) {
            point += 1;
            result.push(goalsScored - receivedGoals);
        } else {
            result.push(goalsScored - receivedGoals);
        }
    }
    let diff = result.reduce((a,b) => a + b);
    if (point === 0) {
        console.log(`${team} has been eliminated from the group phase.
Goal difference: ${diff}.
`);
    } else {
        console.log(`${team} has finished the group phase with ${point} points.
Goal difference: ${diff}.
`);
    }
}


task(['Croatia',
        '4',
        '3',
        '2',
        '1',
        '1',
        '2',
        '0',
        '2',
        '1'
    ]
);