function task(arr) {
    let lastSector = arr[0];
    let rowFirstSector = Number(arr[1]);
    let numberSeatOddRow = Number(arr[2]);

    let lastSectorChar = lastSector.charCodeAt(0);

    let count = 0;

    for (let i = 65; i <= lastSectorChar; i++) {
        if (i === 65) {
            for (let j = 1; j <= rowFirstSector; j++) {
                if (j % 2 === 1) {
                    for (let k = 97; k < 97 + numberSeatOddRow; k++) {
                        count++;
                        console.log(String.fromCharCode(i) + `${j}` + `${String.fromCharCode(k)}`)
                    }
                } else {
                    for (let k = 97; k < 97 + numberSeatOddRow + 2; k++) {
                        count++;
                        console.log(String.fromCharCode(i) + `${j}` + `${String.fromCharCode(k)}`)
                    }
                }
            }
        } else if (i > 65) {
            rowFirstSector++;
            for (let j = 1; j <= rowFirstSector; j++) {
                if (j % 2 === 1) {
                    for (let k = 97; k < 97 + numberSeatOddRow; k++) {
                        count++;
                        console.log(String.fromCharCode(i) + `${j}` + `${String.fromCharCode(k)}`)
                    }
                } else {
                    for (let k = 97; k < 97 + numberSeatOddRow + 2; k++) {
                        count++;
                        console.log(String.fromCharCode(i) + `${j}` + `${String.fromCharCode(k)}`)
                    }
                }
            }
        }
    }

    console.log(count);
}


task([
        'C',
        '4',
        '2'
    ]
);