function task(arr) {
    let n = Number(arr.shift());

    let sum = 0;
    let ratings = [];

    for (let numString of arr) {
        let tokens = numString.split('');
        let numberPC = Number(tokens[0] + tokens[1]);
        let rating = Number(tokens[2]);

        ratings.push(rating);

        if (rating === 2) {
            numberPC *= 0;
        } else if (rating === 3) {
            numberPC *= 0.5;
        } else if (rating === 4) {
            numberPC *= 0.7;
        } else if (rating === 5) {
            numberPC *= 0.85;
        } else if (rating === 6) {
            numberPC *= 1;
        }

        sum += numberPC;
    }

    console.log(sum.toFixed(2));
    console.log(`${(ratings.reduce((a, b) => a + b) / n).toFixed(2)}`);
}

task([
        '5',
        '122',
        '156',
        '202',
        '214',
        '185'
    ]
);