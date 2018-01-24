function aggregateElements(arr) {
    let sum = 0;
    let sum2 = 0;
    let concat = "";

    for (let i = 0; i < arr.length; i++) {
        let currentNumber = Number(arr[i]);
        sum += currentNumber;
        sum2 += 1 / currentNumber;
        concat += currentNumber.toString();
    }
    
    console.log(sum);
    console.log(sum2);
    console.log(concat);
}

aggregateElements([1, 2, 3])