function task(arr) {
    let bestGoals = 0;
    let bestPlayer = '';

    for (let i = 0; i <= arr.length - 1; i += 2) {
        let nameSoccer = arr[i];
        let numberGoals = Number(arr[i + 1]);

        if (nameSoccer === "END") {
            break;
        } else {

            if (numberGoals !== undefined) {
                if (numberGoals > bestGoals) {
                    bestGoals = numberGoals;

                    bestPlayer = nameSoccer;

                    if (bestGoals >= 10) {
                        break;
                    }
                }
            }
        }
    }

    if (bestGoals <= 2) {
        console.log(`${bestPlayer} is the best player!
He has scored ${bestGoals} goals.
`);
    } else {
        console.log(`${bestPlayer} is the best player!
He has scored ${bestGoals} goals and made a hat-trick !!!
`);
    }
}

task(['Silva',
        '5',
        'Harry Kane',
        '10',
        'END'
    ]
)
;