function task(arr) {
    arr = arr.map(Number);
    let num1 = arr[0];
    let num2 = arr[1];
    let num3 = arr[2];

    for (let i = 1; i <= num1; i++) {
        for (let j = 1; j <= num2; j++) {
            for (let k = 1; k <= num3; k++) {
                if (i % 2 === 0 && k % 2 === 0 && (j === 2 || j === 3 || j === 5 || j === 7)) {
                    console.log(`${i} ${j} ${k}`);
                }
            }
        }
    }
}

task([
    '8',
    '2',
    '8'
    ]
);