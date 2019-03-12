function task(arr) {
    let numberPassenger = Number(arr[0]);
    let numberStop = Number(arr[1]);

    let countOdd = 0;
    let countEven = 0;
    for (let i = 1; i <= numberStop; i++) {
        if (i % 2 === 0) {
            countEven += 2
        } else {
            countOdd += 2;
        }
    }
    for (let i = 2; i <= arr.length - 2; i+= 2) {
        let down = Number(arr[i]);
        let up = Number(arr[i + 1]);

        if (down !== undefined && up !== undefined) {
            numberPassenger += up ;
            numberPassenger -= down;
        }
    }

    console.log(`The final number of passengers is : ${numberPassenger - countEven + countOdd}`);
}

task([
    '20',
    '2',
    '10',
    '5',
    '5',
    '3'
    ]
);