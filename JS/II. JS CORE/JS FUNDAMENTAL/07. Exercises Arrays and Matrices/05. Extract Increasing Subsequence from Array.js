function extractIncreasingSubsequenceFromArray(arr) {
    let biggestNumber = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = arr[i];

        if(currentNumber >= biggestNumber) {
            biggestNumber = currentNumber;
            console.log(currentNumber);
        }
    }
}

extractIncreasingSubsequenceFromArray([1, 3, 8, 4, 10, 12, 3, 2, 24]);