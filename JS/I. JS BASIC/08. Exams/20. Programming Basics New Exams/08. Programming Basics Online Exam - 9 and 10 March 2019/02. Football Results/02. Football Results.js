function task(arr) {
    let firstMatch = arr[0];
    let secondMatch = arr[1];
    let thirdMatch = arr[2];

    let win = 0;
    let lose = 0;
    let draw = 0;
    if (Number(firstMatch[0]) > Number(firstMatch[2])) {
        win++;
    } else if (Number(firstMatch[0]) < Number(firstMatch[2])) {
        lose++;
    } else if (Number(firstMatch[0]) === Number(firstMatch[2])) {
        draw++;
    }

    if (Number(secondMatch[0]) > Number(secondMatch[2])) {
        win++;
    } else if (Number(secondMatch[0]) < Number(secondMatch[2])) {
        lose++;
    } else if (Number(secondMatch[0]) === Number(secondMatch[2])) {
        draw++;
    }

    if (Number(thirdMatch[0]) > Number(thirdMatch[2])) {
        win++;
    } else if (Number(thirdMatch[0]) < Number(thirdMatch[2])) {
        lose++;
    } else if (Number(thirdMatch[0]) === Number(thirdMatch[2])) {
        draw++;
    }

    console.log(`Team won ${win} games.
Team lost ${lose} games.
Drawn games: ${draw}
    `);
}

task([
    '4:2',
'0:3',
'1:0'

]
);