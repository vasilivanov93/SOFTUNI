function task(arr) {
    let width = Number(arr.shift());
    let length = Number(arr.shift());
    let height = Number(arr.shift());

    let room = width * length * height;
    let sum = 0;

    for (let i = 0; i < arr.length ; i++) {
        if (arr[i] === 'Done') {
            break;
        } else {
            sum += Number(arr[i]);
        }
    }

    if (sum <= room) {
        console.log(`${room - sum} Cubic meters left.`);
    } else {
        console.log(`No more free space! You need ${sum - room} Cubic meters more.`);
    }
}

task([
        '10',
        '10',
        '2',
        '20',
        '20',
        '20',
        '20',
        '122'


    ]
);