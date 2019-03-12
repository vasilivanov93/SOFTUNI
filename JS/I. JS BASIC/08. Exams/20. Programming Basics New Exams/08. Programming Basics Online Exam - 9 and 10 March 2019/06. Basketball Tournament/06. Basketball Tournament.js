function task(arr) {
    let win = 0;
    let lose = 0;
    let match = 0;
    for (let i = 0; i < arr.length; i++) {
        let name = arr.shift();
        let n = Number(arr.shift());

        let scores = [];

        if (name === 'End of tournaments') {
            break;
        } else {
            for (let i = 0; i < n * 2; i++) {
                scores.push(arr.shift());
            }
            let m = 1;
            for (let i = 0; i < scores.length; i+=2) {
                match++;
                let my = Number(scores[i]);
                let other = Number(scores[i + 1]);


                if (my > other) {
                    win++;
                    console.log(`Game ${m++} of tournament ${name}: win with ${my - other} points.`);
                } else {
                    lose++;
                    console.log(`Game ${m++} of tournament ${name}: lost with ${other - my} points.`);
                }
            }
        }
    }

    console.log(`${((win / match) * 100).toFixed(2)}% matches win`);
    console.log(`${((lose / match) * 100).toFixed(2)}% matches lost`);
}

task([
        'Dunkers',
        '2',
        '75',
        '65',
        '56',
        '73',
        'Fire Girls',
        '3',
        '67',
        '34',
        '83',
        '98',
        '66',
        '45',
        'End of tournaments'
    ]
);