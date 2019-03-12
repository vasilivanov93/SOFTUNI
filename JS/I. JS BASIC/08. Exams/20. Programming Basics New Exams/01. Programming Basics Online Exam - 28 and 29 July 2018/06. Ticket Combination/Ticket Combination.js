function task(arr) {
    let endCombination = Number(arr[0]);
    let count = 0;

    for (let i = 66; i <= 76; i++) {
        for (let j = 102; j >= 97; j--) {
            for (let k = 65; k <= 67; k++) {
                for (let l = 1; l <= 10; l++) {
                    for (let m = 10; m >= 1; m--) {
                        if (i % 2 === 0) {
                            count++;
                            
                            if (count === endCombination) {
                                console.log(`Ticket combination: ${String.fromCharCode(i)}${String.fromCharCode(j)}${String.fromCharCode(k)}${l}${m}`);
                                
                                console.log(`Prize: ${i + j + k + l + m} lv.`);
                            }
                        }
                    }
                }
            }
        }
    }
}


task([
        '2568'
    ]
);