function task(arr) {
    arr = arr.map(Number);
    let numberStudents = arr.shift();

    let count2 = 0;
    let count3 = 0;
    let count4 = 0;
    let count5 = 0;
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        let evaluation = arr[i];
        sum += evaluation;
        if (evaluation >= 2 && evaluation <= 2.99) {
            count2++;
        } else if (evaluation >= 3 && evaluation <= 3.99) {
            count3++;
        } else if (evaluation >= 4 && evaluation <= 4.99) {
            count4++;
        } else if (evaluation >= 5) {
            count5++;
        }
    }

    let average = sum / numberStudents;

    console.log(`Top students: ${((count5 / numberStudents) * 100).toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${((count4 / numberStudents) * 100).toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${((count3 / numberStudents) * 100).toFixed(2)}%`);
    console.log(`Fail: ${((count2 / numberStudents) * 100).toFixed(2)}%`);
    console.log(`Average: ${average.toFixed(2)}`)
}

task([
    '6',
    '2',
    '3',
    '4',
    '5',
    '6',
    '2.2'
    ]
);