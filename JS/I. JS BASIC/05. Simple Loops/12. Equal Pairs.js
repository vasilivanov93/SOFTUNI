function equalPair(input) {
    let digits = input.map(parseFloat);
    let n = digits.splice(0, 1);
    console.log(digits);
 
    let currentSum = Number(0);
    let previousSum = Number(0);
    let diff = 0;
    let maxDiff = 0;

    for (i = 0; i < n; i++) {
        previousSum = currentSum;
        currentSum = 0;
        currentSum += Number(digits.splice(0, 1));
        console.log(currentSum);

        currentSum += Number(digits.splice(0, 1));
        console.log(currentSum);

        if (i != 0) {
            diff = Math.abs(currentSum - previousSum);
            if (diff != 0 && diff > maxDiff) {
                maxDiff = diff;
            }
        }
    }

    if (previousSum == currentSum || n == 1) {
        console.log("Yes, value=" + currentSum);
    }
    else {
        console.log("No, maxdiff=" + maxDiff);
    }
}