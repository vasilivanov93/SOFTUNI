function task(arr) {
    let minutes = Number(arr[0]);
    let nameSoccer = arr[1];

    if (minutes === 0) {
        console.log('Match has just began!');
    } else if (minutes > 0 && minutes < 45) {
        console.log('First half time.');
    } else if (minutes >= 45 && minutes <= 90) {
        console.log('Second half time.');
    }

    if (minutes >= 1 && minutes <= 10) {
        console.log(`${nameSoccer} missed a penalty.`);

        if (minutes % 2 === 0) {
            console.log(`${nameSoccer} was injured after the penalty.`);
        }
    }

    if (minutes > 10 && minutes <= 35) {
        console.log(`${nameSoccer} received yellow card.`);

        if (minutes % 2 === 1) {
            console.log(`${nameSoccer} got another yellow card.`);
        }
    }

    if (minutes > 35 && minutes < 45) {
        console.log(`${nameSoccer} SCORED A GOAL !!!`);
    }

    if (minutes > 45 && minutes <= 55) {
        console.log(`${nameSoccer} got a freekick.`);

        if (minutes % 2 === 0) {
            console.log(`${nameSoccer} missed the freekick.`);
        }
    }

    if (minutes > 55 && minutes <= 80) {
        console.log(`${nameSoccer} missed a shot from corner.`);

        if (minutes % 2 === 1) {
            console.log(`${nameSoccer} has been changed with another player.`);
        }
    }

    if (minutes > 80 && minutes <= 90) {
        console.log(`${nameSoccer} SCORED A GOAL FROM PENALTY !!!`);
    }
}

task(['45',
        'Harry Kane'
    ]
);