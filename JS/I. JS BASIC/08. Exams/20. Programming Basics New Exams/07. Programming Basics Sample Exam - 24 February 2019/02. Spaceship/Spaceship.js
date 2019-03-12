function task(arr) {
    arr = arr.map(Number);
    let width = arr[0];
    let length = arr[1];
    let height = arr[2];
    let averageHeight = arr[3];

    let volume = width * length * height;
    let volumeRoom = (averageHeight + 0.40) * 4;
    let result = Math.floor(volume / volumeRoom);

    if (result >= 3 && result <= 10) {
        console.log(`The spacecraft holds ${result} astronauts.`);
    } else if ( result > 10) {
        console.log(`The spacecraft is too big.`);
    } else {
        console.log(`The spacecraft is too small.`);
    }
}

task([
        '3.5',
        '4',
        '5',
        '1.70'


    ]
);